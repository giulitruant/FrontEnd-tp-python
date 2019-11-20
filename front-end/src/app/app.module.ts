import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProveedorComponent } from './lista-proveedor/lista-proveedor.component';
import { AddProveedorComponent } from './add-proveedor/add-proveedor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { FacturaComponent } from './factura/factura.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProveedorComponent,
    AddProveedorComponent,
    AddClienteComponent,
    ListaClienteComponent,
    ListaProductoComponent,
    AddProductoComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
