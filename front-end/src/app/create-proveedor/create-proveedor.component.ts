import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from '../Model/proveedor';
import { CreateProveedorService } from './create-proveedor.service';

@Component({
  selector: 'app-create-proveedor',
  templateUrl: './create-proveedor.component.html',
  styleUrls: ['./create-proveedor.component.css'],
  providers: [CreateProveedorService]
})
export class CreateProveedorComponent implements OnInit {

  private proveedor: ProveedorModel;
  private isValid: boolean = true;
  private message: string = '';

  constructor(private createProveedorService: CreateProveedorService) {
    this.proveedor = new ProveedorModel('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  public saveOrUpdate() {
    this.isValid == this.createProveedorService.validate(this.proveedor.cuit);

    if (this.isValid) {
      this.createProveedorService.addProveedor(this.proveedor);
      // this.createProveedorService.addProveedor(this.proveedor.cuit, this.proveedor.nombre, this.proveedor.apellido
      //   , this.proveedor.telefono, this.proveedor.email, this.proveedor.direccion);
    } else {
      this.message = 'Verificar los campos obligatorios';
    }
  }

}
