import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaProveedorComponent } from './lista-proveedor/lista-proveedor.component';
import { AddProveedorComponent } from './add-proveedor/add-proveedor.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'proveedor', component: ListaProveedorComponent },
  { path: 'addProveedor/:proveedor', component: AddProveedorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
