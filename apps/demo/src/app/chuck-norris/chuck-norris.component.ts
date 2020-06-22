import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gewd-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

  joke$: Observable<string>;

  constructor(private http: HttpClient) {
    this.joke$ = http.get<any>('http://api.icndb.com/jokes/random').pipe(
      map(r => r.value.joke)
    )
  }

  ngOnInit(): void {
  }

}
