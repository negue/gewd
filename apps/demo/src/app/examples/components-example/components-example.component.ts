import { Component, OnInit } from '@angular/core';

const img1 = '/assets/example_md.png';
const img2 = '/assets/example-bg.png';

@Component({
  selector: 'gewd-components-example',
  templateUrl: './components-example.component.html',
  styleUrls: ['./components-example.component.css']
})
export class ComponentsExampleComponent implements OnInit {
  imgSource = img1;

  constructor() { }

  ngOnInit(): void {
  }

  toggleImgSource(): void  {
    this.imgSource = this.imgSource === img1 ? img2 : img1;
  }
}
