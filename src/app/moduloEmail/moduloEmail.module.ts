import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Rutas Import
import { RouterModule, Routes } from '@angular/router';
import { GuardarEmailComponent } from './guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './main-email/main-email.component';

// Sistema de rutas


@NgModule({
  declarations: [
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  exports: [MainEmailComponent]
})
export class ModuloEmailModule { }
