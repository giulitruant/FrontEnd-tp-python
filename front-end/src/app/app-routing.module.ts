import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProveedorComponent } from './proveedor/proveedor.component';


const routes: Routes = [
  { path: '', redirectTo: '/appComponent', pathMatch: 'full' },
  { path: 'appComponent', component: AppComponent },
  { path: 'proveedor', component: ProveedorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
