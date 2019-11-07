import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaProveedorComponent } from './lista-proveedor/lista-proveedor.component';
import { AddProveedorComponent } from './add-proveedor/add-proveedor.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'proveedor', component: ListaProveedorComponent },
  { path: 'addProveedor/:cuit/:nombre/:apellido/:direccion/:email/:telefono', component: AddProveedorComponent },
  { path: 'cliente', component: ListaClienteComponent },
  { path: 'addCliente/:dni/:nombre/:apellido/:direccion/:email/:telefono', component: AddClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
