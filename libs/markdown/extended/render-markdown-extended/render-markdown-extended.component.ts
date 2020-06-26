import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MarkdownCacheService, MarkdownService } from '@gewd/markdown/service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MermaidService } from '@gewd/markdown/service/mermaid.service';

export interface ExtendedComponentRegistry {
  [key: string]: ExtendedComponentEntry;
}

export interface ExtendedComponentEntry {
  component: Type<any>;
  allowProps?: string[];
}

export type CustomComponentyFactory = (name: string) => void;

@Component({
  selector: 'gewd-markdown-extended',
  templateUrl: './render-markdown-extended.component.html',
  styleUrls: ['./render-markdown-extended.component.scss']
})
export class RenderMarkdownExtendedComponent implements OnInit, OnChanges {

  @Input()
  public showRawMd = false;

  @Input()
  public useCache = false;

  @Input()
  public allowMermaid = true;

  @Input()
  public mermaidTheme: string;

  @Input()
  public extendedComponents: ExtendedComponentRegistry = {};

  public morphDomConfig = {
    getNodeKey: (node: Node|any) => {
      console.info('getNodeKey', node.id, node);
      return node.id;
    },
    onBeforeNodeAdded: (node: Node) => {
      if (this._morphState.nodesByName[node.nodeName]
        && this._morphState.nodesByName[node.nodeName].some(
        (n:Node)=> n.textContent === node.textContent
      )) {
        console.info('already found');
        return null;
      }

      console.info('onBeforeNodeAdded', {node});
      return node;
    },
    onNodeAdded: (node) => {
      if (!this._morphState.nodesByName[node.nodeName]) {
        this._morphState.nodesByName[node.nodeName] = [];
      }

      this._morphState.nodesByName[node.nodeName].push(node);
      // console.info('onNodeAdded', {node});

      return node;
    },
    onBeforeElUpdated: (fromEl: Element, toEl: Element) => {
      console.info({fromEl, toEl});
      if (this.extendedComponents[fromEl.nodeName.toLowerCase()]) {
        console.info('onBeforeElUpdated returning false');

        this.eachAttribute(toEl.attributes, attr => {
          const currentAttr = fromEl.attributes.getNamedItem(attr.name);

          if (currentAttr) {
            currentAttr.value = attr.value;
          } else {
            const newAttr = document.createAttribute(attr.name);

            newAttr.value = attr.value;
            fromEl.attributes.setNamedItem(newAttr);
          }

        });



        return false;
      }

      // console.info('onBeforeElUpdated', {fromEl, toEl});

      return true;
    },
    onElUpdated: (el) => {
      console.info('onElUpdated', {el});
    },
    onBeforeNodeDiscarded: (node) => {

     /* const nodeNames = [node.nodeName, node.parentNode.nodeName].map(s => s.toLowerCase());
      console.info('onBeforeNodeDiscarded', {nodeNames});

      if (nodeNames.some(n => !!this.extendedComponents[n])) {
        console.info('returning false', {node});
        this._morphState.markAsRemoved.push(node);
        return false;
      }
*/
      // console.info('onBeforeNodeDiscarded', {node});
      return true;
    },
    onNodeDiscarded: (node) => {

      console.info('onNodeDiscarded', {node});
    },
    onBeforeElChildrenUpdated: (fromEl, toEl) => {
      // console.info('onBeforeElChildrenUpdated', {fromEl, toEl});
      return true;
    },
    childrenOnly: false
  };

  get markdown (): string {
    return this._markdown;
  }

  @Input()
  set markdown (value: string) {
    if (this._markdown  !== value) {
      this._markdown = value;
      if (this.showRawMd) {
        this._htmlToShow$.next(value);
      }
      this.compile();
    }
  }
  public parsedHtml$: Observable<string|SafeHtml>;
  bottomComponents: any[] = [];


  private _htmlToShow$ = new BehaviorSubject<string|SafeHtml>("");
  private _markdown: string;
  private _xssWhiteList = {};
  private _morphState = {
    markAsRemoved: [],
    nodesByName: {}
  };


  constructor (private service: MarkdownService,
               private mermaid: MermaidService,
               private element: ElementRef,
               private sanitizer: DomSanitizer,
               private cache: MarkdownCacheService,
               private resolver: ComponentFactoryResolver,
               private injector: Injector,
               private app: ApplicationRef) {
    this.parsedHtml$ = this._htmlToShow$;

  }

  ngOnInit() {
    this.setWhitelist();
    this.compile();
  }

  private async compile() {
    console.info('compiled called');
    try {
      if (this.useCache) {
        const cachedMarkdown = await this.cache.getCached(this._markdown);
        if (!!cachedMarkdown) {
          this._htmlToShow$.next(cachedMarkdown);
          return;
        }
      }

      console.info(this._markdown);

      let parsedHtml = await this.service.compileMarkdown(this._markdown, this._xssWhiteList);
console.info({parsedHtml});
      if (this.allowMermaid) {
        parsedHtml = await this.mermaid.compileMermaid(parsedHtml.trim());
      }

      this._htmlToShow$.next(parsedHtml);

      if (this.useCache) {
        this.cache.saveCached(this._markdown, parsedHtml);
      }
    } catch (er) {
      console.error(er);
      this._htmlToShow$.next(er);
    }
  }

  morphDomDone (elementRef: ElementRef<Element>) {
    const removed = [...this._morphState.markAsRemoved];
    console.info('marked for delete', {
      removed
    });

    this._morphState.markAsRemoved.length = 0;

    for (const tagName of Object.keys(this.extendedComponents)) {

      for (const foundElement of this.element.nativeElement.getElementsByTagName(tagName) ) {

        const wrapped = foundElement.attributes.getNamedItem('wrapped')
        || foundElement.attributes.getNamedItem('wrapped');
console.info({wrapped, attr: foundElement.attributes});
      if(wrapped) {
        console.info('foundelement', {foundElement});

        this.updateProperties(foundElement, foundElement.componentRef );


        continue;
      } else {
        // debugger;
      }

      foundElement.attributes.setNamedItem(document.createAttribute('wrapped'));

// var tpl : TemplateRef;
// tpl.createEmbeddedView() << attach
      console.info('creating', { foundElement });


      const factory = this.resolver.resolveComponentFactory(this.extendedComponents[tagName].component);
      const ref = factory.create(this.injector, [], foundElement);

      foundElement.componentRef = ref;


      this.updateProperties(foundElement, ref);


      // ref.compRef.stuff = true;

      // exacutes binding and stuff
      this.app.attachView(ref.hostView);

      }
    }
  }

  updateProperties (foundElement: Element, componentRef: ComponentRef<any>) {
    const elementName = foundElement.nodeName.toLowerCase();

    this.eachAttribute(foundElement.attributes, attr => {
      if (attr.name.includes('_ng') || attr.name.includes('ng-')) {
        return;
      }

      if (this.extendedComponents[elementName].allowProps.includes(attr.name)) {
        componentRef.instance[attr.name] = attr.value;
      }
    });

    componentRef.changeDetectorRef.markForCheck();
    componentRef.changeDetectorRef.detectChanges();
  }

  eachAttribute(attributes, callback: (attr: Attr) => void) {
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes.item(i);

      callback(attr);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['extendedComponents']) {
      this.setWhitelist();
    }
  }

  private setWhitelist() {
    const allowProps = {};
    for (const compEntryKey of Object.keys(this.extendedComponents)) {
        const compEntry = this.extendedComponents[compEntryKey];

      allowProps[compEntryKey.toLowerCase()] = [
        'id',
        ...compEntry.allowProps.map(p => p.toLowerCase())
      ];
    }

    this._xssWhiteList = allowProps;
  }
}
