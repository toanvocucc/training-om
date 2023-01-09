import { Component } from '@angular/core';

@Component({
  selector: 'mail',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'traning';
  
  public student =[{
    name:"Toan", home: "haiduong"
  },
    {name:"cuong", home: "haiphong"
  }
];
}
