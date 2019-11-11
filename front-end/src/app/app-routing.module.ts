import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaProveedorComponent } from './lista-proveedor/lista-proveedor.component';
import { AddProveedorComponent } from './add-proveedor/add-proveedor.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { FacturaComponent } from './factura/factura.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'proveedor', component: ListaProveedorComponent },
  { path: 'addProveedor/:cuit/:nombre/:apellido/:direccion/:email/:telefono', component: AddProveedorComponent },
  { path: 'cliente', component: ListaClienteComponent },
  { path: 'addCliente/:dni/:nombre/:apellido/:direccion/:email/:telefono', component: AddClienteComponent },
  { path: 'producto', component: ListaProductoComponent },
  { path: 'addProducto/:id/:desc/:precioU/:cantStock/:cantMin/:cuit', component: AddProductoComponent },
  { path: 'factura', component: FacturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
