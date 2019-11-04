import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProveedorComponent } from './lista-proveedor/lista-proveedor.component';
import { AddProveedorComponent } from './add-proveedor/add-proveedor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProveedorComponent,
    AddProveedorComponent,
    AddClienteComponent,
    ListaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
