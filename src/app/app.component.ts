import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  emailContacto: string;
  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
    console.log(localStorage.getItem('emailContacto'));
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }
}
