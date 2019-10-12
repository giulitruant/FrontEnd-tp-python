import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  constructor(public json: JsonService){
    // this.json.getJson('https://randomuser.me/api/').subscribe((res: any) => {
    //   console.log(res);
    this.json.getJson('https://randomuser.me/api/').subscribe((res: any) => {
      console.log(res);
  });
}

}
