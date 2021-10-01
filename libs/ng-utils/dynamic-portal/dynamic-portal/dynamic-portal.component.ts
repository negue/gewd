import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PortalHubService } from '../portal-hub.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'dynamic-portal',
  templateUrl: './dynamic-portal.component.html',
  styleUrls: ['./dynamic-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicPortalComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  key: string;

  templateToShow$: Observable<TemplateRef<any>>;

  private key$ = new BehaviorSubject('');

  constructor (private hub: PortalHubService) {
    this.templateToShow$ = this.key$.pipe(
      switchMap(key => this.hub.getTemplate$(key))
    );
  }

  ngOnInit (): void  {
    this.checkKeyAndPushTemplate();
  }

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['key']) {
      this.checkKeyAndPushTemplate();
    }
  }

  ngOnDestroy (): void {

  }

  private checkKeyAndPushTemplate () {
    this.key$.next(this.key);
  }
}
