import { Component, OnInit } from '@angular/core';
import { fundido } from '../animations';
import { animation } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fundido]
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido a NGZOO';
  constructor() { }

  ngOnInit() {
  }

}
