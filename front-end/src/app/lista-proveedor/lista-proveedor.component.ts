import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from '../Model/proveedor';
import { ProveedorService } from '../service/proveedor.service';

@Component({
  selector: 'app-lista-proveedor',
  templateUrl: './lista-proveedor.component.html',
  styleUrls: ['./lista-proveedor.component.css'],
  providers: [ProveedorService]
})
export class ListaProveedorComponent implements OnInit {
  private proveedor: ProveedorModel;
  private proveedores: Array<ProveedorModel>;
  constructor(private proveedorService: ProveedorService) { }

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
    return this.deleteProveedor(cuit);
  }
}
