import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from '../Model/proveedor';
import { ProveedorService } from '../service/proveedor.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private createProveedorService: ProveedorService, private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) {
    this.proveedor = new ProveedorModel('', '', '', '', '', '');
  }

  ngOnInit() {
    debugger;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.proveedor = params['proveedor'];
    });
    // this.activatedRoute.snapshot.paramMap.get('proveedor');
    // this.activatedRoute.data.subscribe(data => {
    //   this.proveedor.cuit = <any>data;
    // })
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
