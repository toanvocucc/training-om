import { Component } from '@angular/core';

@Component({
  selector: 'mail',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'traning';
    public cities =[{
      name: 'hochiminh ',temp: -30
    },{
      name: 'hanoi ', temp: 19
    },{
      name:'haiphong ', temp: -4
    }];
  
}
