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
  name: string = "Luan";
  password: string = "";
}
