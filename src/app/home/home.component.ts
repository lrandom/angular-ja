import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.goToContact();
    }, 4000)
  }

  goToContact() {
    this.router.navigate(['/contact', 1, 'Luan'],
      {queryParams: {name: 'Name', age: 18}})
  }
}
