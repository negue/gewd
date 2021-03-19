import { Component, OnInit } from '@angular/core';

const img1 = 'https://cdn.pixabay.com/photo/2013/07/12/12/58/tv-test-pattern-146649_1280.png'
const img2 = 'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg'

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

  toggleImgSource() {
    this.imgSource = this.imgSource === img1 ? img2 : img1;
  }
}
