import {Component} from '@angular/core';
import {RestaurantServiceService} from "../services/restaurant-service.service";

interface NoteItem {
  title: string;
  content: string;
}

const NOTE_KEY: string = "notes"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Note App';
  restaurantsList: Array<any> = new Array<any>();

  constructor(private restaurantService: RestaurantServiceService) {
    let num = 10;
    /*setTimeout(() => {
      num += 20;
      console.log(num);
    },3000);*/
    //ES6


    /*p.then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });*/

    //ES7 -> async/await keyword
    //SELF INVOKE FUNCTION


  }

  /*  async abc() {
      try {
        const p = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("error while counting"));
          }, 3000);
        })
        const data = await p;
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }*/

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(ob =>
      this.restaurantsList = ob
    );
  }


}
