import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from '../Model/proveedor';
import { ProveedorService } from '../service/proveedor.service';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css'],
  providers: [ProveedorService]
})
export class AddProveedorComponent implements OnInit {

  private proveedor: ProveedorModel;
  private isValid: boolean = true;
  private message: string = '';

  constructor(private createProveedorService: ProveedorService) {
    this.proveedor = new ProveedorModel('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  public saveOrUpdate() {
    // this.isValid == this.createProveedorService.validate(this.proveedor.cuit);

    if (this.isValid) {
      this.createProveedorService.addProveedor(this.proveedor.cuit, this.proveedor.nombre, this.proveedor.apellido, this.proveedor.telefono,
        this.proveedor.email, this.proveedor.direccion);
      // this.createProveedorService.addProveedor(this.proveedor.cuit, this.proveedor.nombre, this.proveedor.apellido
      //   , this.proveedor.telefono, this.proveedor.email, this.proveedor.direccion);
    } else {
      this.message = 'Verificar los campos obligatorios';
    }
  }

}
