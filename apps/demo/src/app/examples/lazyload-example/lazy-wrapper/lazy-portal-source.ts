import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LazyModule, LazyModuleComponentInfo } from '@gewd/lazy/contracts';
import { DynamicPortalModule } from '@gewd/ng-utils/dynamic-portal';

@Component({
  selector: 'test-module-comp',
  template: `
    <ng-template [dynamicPortalSource]="portalKey">
      <div class="portal-source">
      Lazy Portal Content with outer Binding: {{testProp}}
      </div>
    </ng-template>

    This is the content of the lazy loaded component.
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .portal-source {
        background: darkblue;
        border: 2px dashed blue;
        padding: 5px;
      }
    `
  ]
})
export class PortalModuleComp implements OnInit, OnChanges, OnDestroy {
  @Input()
  public testProp: any;

  @Input()
  public portalKey: string;

  constructor() {
  }

  ngOnChanges (changes: SimpleChanges): void {

    console.info('onChanges', changes);
  }

  ngOnDestroy (): void {
    alert('destroy');
  }

  ngOnInit (): void {
  }
}

@NgModule({
    declarations: [
        PortalModuleComp
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        DynamicPortalModule
    ]
})
export class PortalModule implements LazyModule {
  getComponents (): LazyModuleComponentInfo[] {
    return [
      {
        name: 'PortalModuleComp',
        componentType: PortalModuleComp
      }
    ];
  }


}
