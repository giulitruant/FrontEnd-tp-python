import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from '../Model/proveedor';
import { ProveedorService } from '../service/proveedor.service';
import { AddProveedorComponent } from '../add-proveedor/add-proveedor.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-proveedor',
  templateUrl: './lista-proveedor.component.html',
  styleUrls: ['./lista-proveedor.component.css'],
  providers: [ProveedorService]
})
export class ListaProveedorComponent implements OnInit {
  private proveedor: ProveedorModel;
  private proveedores: Array<ProveedorModel>;
  public selectedRow: Number;
  public setClickedRow: Function;

  constructor(private proveedorService: ProveedorService, private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.getAllProveedores();
  }

  getAllProveedores() {
     this.proveedorService.getProveedores()
     .subscribe(
       (data) => { // Success
       this.proveedores = data['proveedor'];
       },
       (error) => {
         console.error(error);
       });
     }

  getProveedor(cuit: string) {
    return this.proveedorService.getProveedor(cuit).subscribe(value => {
      this.proveedor = value;
      console.log(value);
      console.log(value.cuit);
    });
  }

  // addProveedor(cuit: string, nombre: string, apellido: string, telefono: string, email: string, direccion: string) {
  //   return this.proveedorService.addProveedor(cuit, nombre, apellido, telefono, email, direccion);
  // }

  deleteProveedor(cuit: string) {
    debugger;
    console.dir('Eliminar cuit' + cuit);
    return this.proveedorService.deleteProveedor(cuit);
  }

  editProveedor(proveedor: ProveedorModel) {
    //console.dir('Eliminar proveedor' + JSON.stringify(proveedor));
    this.router.navigate(['./addProveedor', proveedor.cuit, proveedor.nombre, proveedor.apellido, proveedor.direccion,
  proveedor.email, proveedor.telefono]);
  }
}
