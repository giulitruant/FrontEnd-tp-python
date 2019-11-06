import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from '../Model/proveedor';
import { ProveedorService } from '../service/proveedor.service';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css'],
  providers: [ProveedorService]
})
export class AddProveedorComponent implements OnInit {
  public proveedor: ProveedorModel;
  public isValid: boolean =  true;
  public message: string = '';
  public rta: any;
  public popupProv: boolean = false;

  constructor(private createProveedorService: ProveedorService, private activatedRoute: ActivatedRoute) {
    this.proveedor = new ProveedorModel('', '', '', '', '', '');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.proveedor.cuit = params['cuit'];
      this.proveedor.nombre = params['nombre'];
      this.proveedor.apellido = params['apellido'];
      this.proveedor.direccion = params['direccion'];
      this.proveedor.email = params['email'];
      this.proveedor.telefono = params['telefono'];
    });

    console.dir(JSON.stringify(this.proveedor));
    // this.getProveedor(this.proveedor.cuit);
    // this.activatedRoute.snapshot.paramMap.get('proveedor');
    // this.activatedRoute.data.subscribe(data => {
    //   this.proveedor.cuit = <any>data;
    // })
  }

  onSubmit(value: any) {
    debugger;
    if (this.isValid) {
      this.rta = this.createProveedorService.addProveedor(this.proveedor);
      if(<string>this.message == "ok"){
        this.proveedor = null;
      }
      } else {
        this.popupProv = true;
        this.message = 'Verificar los campos obligatorios';
      }
    }
    // public getProveedor(cuit: string) {

    //    this.createProveedorService.getProveedor(cuit).subscribe(value => {
    //      console.dir(value);
    //      this.proveedor = value;
    //    });
    //    debugger;
    //    console.dir(this.proveedor);
    //   //  this.proveedor =
    //   // if(value != undefined){
    //   //   this.proveedor = value;
    //   // }
    // }
}
