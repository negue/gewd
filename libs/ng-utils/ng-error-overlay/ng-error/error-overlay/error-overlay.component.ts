import { Component, Input, OnInit } from '@angular/core';
import { ErrorInterface } from '../error-handler.service';
import ErrorStackParser from 'error-stack-parser';

@Component({
  selector: 'error-overlay',
  templateUrl: './error-overlay.component.html',
  styleUrls: ['./error-overlay.component.scss']
})
export class ErrorOverlayComponent implements OnInit {

  @Input()
  error: ErrorInterface;

  public errorStack: any[];

  constructor() { }

  ngOnInit(): void {
    this.errorStack = ErrorStackParser.parse(this.error);
  }

}
