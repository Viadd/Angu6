import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'NGZOO';
  constructor() { }

  ngOnInit() {
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
  }

}
