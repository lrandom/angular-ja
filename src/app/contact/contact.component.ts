import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public name: string = "";
  public id: string = "";
  public age: string = "";

  constructor(private route: ActivatedRoute) {
    /*this.route.params.subscribe(params => {
      console.log(params);
      this.id = this.route.snapshot.id;
      this.name = this.route.snapshot.name;
    });*/
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.name = this.route.snapshot.paramMap.get('id') ?? '';
    this.age = this.route.snapshot.queryParamMap.get('age') ?? '';
    alert(this.age);
  }
}
