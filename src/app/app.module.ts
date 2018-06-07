import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Componente de animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modulos Independientes
import { ModuloEmailModule } from './moduloEmail/moduloEmail.module'; // Modulo simple
import { AdminModule } from './admin/admin.module'; // Modulo Funcional
// Rutas Import
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { HomeComponent } from './Componentes/home/home.component';
import { AnimalsComponent } from './Componentes/animals/animals.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { KeepersComponent } from './Componentes/keepers/keepers.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { TiendaComponent } from './Componentes/tienda/tienda.component';

// Sistema de rutas
const rutas: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'keepers', component: KeepersComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeepersComponent,
    TiendaComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
