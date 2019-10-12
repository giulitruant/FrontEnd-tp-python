import { Component, OnInit } from '@angular/core';
import { ProveedorService } from './proveedor.service';
import {ProveedorModel} from '../model/proveedor.model'

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css'],
  providers: [ProveedorService]
})
export class ProveedorComponent implements OnInit {

  private proveedores : Array<ProveedorModel>;
  constructor(private proveedorService: ProveedorService) { }

  ngOnInit() {
    this.loadProveedores();
  }

  private loadProveedores(): void {
    this.proveedorService.getProveedores().subscribe(value =>{
      //this.proveedores = value;
      console.log(value);
      console.log(value[0].id); 
    });
  }

}
