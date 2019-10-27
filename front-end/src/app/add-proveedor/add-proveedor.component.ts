import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from '../Model/proveedor';
import { ProveedorService } from '../service/proveedor.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css'],
  providers: [ProveedorService]
})
export class AddProveedorComponent implements OnInit {
  proveedor: ProveedorModel;
  // values = '';

  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  // }

  constructor(private createProveedorService: ProveedorService) {
    this.proveedor = new ProveedorModel('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
    this.proveedor.cuit = value.controls.cuit.value;
    this.proveedor.nombre = value.controls.nombre.value;
    this.proveedor.apellido = value.controls.apellido.value;
    this.proveedor.email = value.controls.email.value;
    this.proveedor.telefono = value.controls.telefono.value;
    this.proveedor.direccion = value.controls.cuit.value;
 }

  public save(proveedor: ProveedorModel): void {
    // this.isValid == this.createProveedorService.validate(this.proveedor.cuit);
    // console.dir(data.cuit);
    // if (this.isValid) {

      // this.proveedor.cuit = data.cuit.value;
      // this.proveedor.nombre = data.nombre.value;
      // this.proveedor.apellido = data.apellido.value;
      // this.proveedor.email = data.email.value;
      // this.proveedor.direccion = data.direccion.value;


      this.createProveedorService.addProveedor(this.proveedor.cuit, this.proveedor.nombre, this.proveedor.apellido, this.proveedor.telefono,
        this.proveedor.email, this.proveedor.direccion);
      // this.createProveedorService.addProveedor(this.proveedor.cuit, this.proveedor.nombre, this.proveedor.apellido
      //   , this.proveedor.telefono, this.proveedor.email, this.proveedor.direccion);
    // } else {
    //   this.message = 'Verificar los campos obligatorios';
    // }
  }
}
