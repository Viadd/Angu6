import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.css']
})
export class MostrarEmailComponent implements OnInit, DoCheck {
  emailContacto: string;
  constructor() { }

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
    console.log(localStorage.getItem('emailContacto'));
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

 eliminarEmail() {
   localStorage.removeItem('emailContacto');
 }

}
