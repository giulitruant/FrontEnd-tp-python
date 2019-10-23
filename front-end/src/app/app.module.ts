import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProveedorComponent } from './lista-proveedor/lista-proveedor.component';
import { AddProveedorComponent } from './add-proveedor/add-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProveedorComponent,
    AddProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
