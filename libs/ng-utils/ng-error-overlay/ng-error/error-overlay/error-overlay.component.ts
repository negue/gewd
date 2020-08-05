import { Component, Input, OnInit } from '@angular/core';
import { ErrorInterface } from '../error-handler.service';

@Component({
  selector: 'error-overlay',
  templateUrl: './error-overlay.component.html',
  styleUrls: ['./error-overlay.component.scss']
})
export class ErrorOverlayComponent implements OnInit {

  @Input()
  error: ErrorInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
