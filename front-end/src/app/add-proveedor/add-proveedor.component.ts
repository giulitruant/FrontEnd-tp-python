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
  public isValid: boolean =  true;
  public message: string = '';

  constructor(private createProveedorService: ProveedorService) {
    this.proveedor = new ProveedorModel('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
    // this.proveedor.cuit = value.controls.cuit.value;
    // this.proveedor.nombre = value.controls.nombre.value;
    // this.proveedor.apellido = value.controls.apellido.value;
    // this.proveedor.email = value.controls.email.value;
    // this.proveedor.telefono = value.controls.telefono.value;
    // this.proveedor.direccion = value.controls.cuit.value;

    if (this.isValid) {
      this.createProveedorService.addProveedor(this.proveedor.cuit.toString(), this.proveedor.nombre, this.proveedor.apellido, this.proveedor.telefono,
        this.proveedor.email, this.proveedor.direccion.toString());
      } else {
        this.message = 'Verificar los campos obligatorios';
      }

 }

  // public save(proveedor: ProveedorModel): void {
  // }
}
