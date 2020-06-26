import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gewd-xkcd',
  templateUrl: './xkcd.component.html',
  styleUrls: ['./xkcd.component.css']
})
export class XkcdComponent implements OnInit {

  imgToShow$: Observable<string>;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.imgToShow$ = this.http.get<any>('https://xkcd.now.sh/?comic=latest').pipe(
      map(r => r.img)
    )
  }

}
