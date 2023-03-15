import {Component} from '@angular/core';

interface Language {
  name: string;
  isShow: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //decorator==annotation
  title = 'demo-2';
  public hello: string = "Hello World";
  public languages: Array<string> = ["Java", "Python", "C#", "C++", "JavaScript"];
  public transformLanguages: Array<Language> = [];

  constructor() {
    this.transformLanguages = this.languages.map((lang) => {
      return {
        name: lang,
        isShow: true
      }
    })
    console.log(this.languages);
    //[{name:"Java", isShow:true}, {name:"Python", isShow:true}, {name:"C#", isShow:true}, {name:"C++", isShow:true}, {name:"JavaScript", isShow:true}}]
  }

  public toggleItem(item: any) {
    item.isShow = !item.isShow;
  }

  public showText: boolean = true;

  public addBG: boolean = false;

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
