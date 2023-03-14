import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //decorator==annotation
  title = 'demo-2';
  public hello: string = "Hello World";
  public languages:Array<String> = ["Java", "Python", "C#", "C++", "JavaScript"];

  public showText:boolean = true;

  public addBG:boolean = false;

  changeText() {
    this.hello = "Hello Angular";
  }

  addMoreItem() {
    this.languages.push("TypeScript");
  }

  toggleText() {
    this.showText = !this.showText;
  }

  toggleBG() {
    this.addBG = !this.addBG;
  }
}
