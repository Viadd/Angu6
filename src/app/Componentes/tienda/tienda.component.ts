import { Component, OnInit } from '@angular/core';
// Componentes o Modulos para animaciones
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('active', style(
        {
          background: 'blue',
          borderRadius: '100%'
        })
      ),
      state('inactive', style(
        {
          borderRadius: '20%'
        })
      ),
      transition('inactive => active', animate('500ms linear')),
      transition('active => inactive', animate('500ms linear'))
    ])
  ]
})
export class TiendaComponent implements OnInit {

  status;
  btn;
  constructor() {
    this.status = 'inactive';
    this.btn = 'Desactivado';
  }

  cambiarstatus(estado) {
    if (estado === 'inactive') {
      this.status = 'active';
      this.btn = 'Activado';
    } else {
      this.status = 'inactive';
      this.btn = 'Desactivado';
    }
  }
  ngOnInit() {
  }

}
