import {Component} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  public slides: Array<string> = [
    'assets/img/img-1.png',
    'assets/img/img-2.jpeg',
    'assets/img/img-3.jpeg',
  ];
  public activeImage = this.slides[0];

  changeActiveImage(img:string) {
    this.activeImage = img;
  }
}
