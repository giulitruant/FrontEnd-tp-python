import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from '../Model/proveedor';
import { ProveedorService } from '../service/proveedor.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  public rta: any;
  public popupProv: boolean = false;

  constructor(private createProveedorService: ProveedorService,
    public dialog: MatDialog) {
    this.proveedor = new ProveedorModel('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    //console.log(value);
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

}
