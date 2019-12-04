import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { SolicitudService } from '../service/solicitud.service';
import { Router } from '@angular/router';
import { ProductoModel } from '../Model/producto';

export class Solicitud {
  dni: string;
  fecha: string;
  productos: Array<ProductoModel>;
}

@Component({
  selector: 'app-add-solicitud',
  templateUrl: './add-solicitud.component.html',
  styleUrls: ['./add-solicitud.component.css']
})
export class AddSolicitudComponent implements OnInit {
  public productos: Array<ProductoModel>;
  public listaProductos = [];


  constructor(private productoService: ProductoService,
    private solicitudService: SolicitudService, private router: Router ) { }

  ngOnInit() {
    this.getAllProductos();
  }

  getAllProductos() {
    this.productoService.getProductos()
    .subscribe(
      (data) => { // Success
      //this.productos = data['producto'];
      this.productos = data['producto'];
      },
      (error) => { //error
        console.error(error);
      });
    }

    public agregarProducto(prod: ProductoModel) {
      this.listaProductos.push(prod);
    }

    onSubmit(valor: any) {
      debugger;
      let json = JSON.stringify({
        cliente : valor.dni,
        productos : [this.listaProductos]
      });
      this.solicitudService.addSolicitud(json)
      .then(
        (value) => {
          debugger;
          return 'Completed Two';
          this.router.navigate(['/']);
        },
        (error) => {
          debugger;
          console.error(error);
        }
      )
      .then(
        (value) => console.log(value),
        (error) => console.error(error)
      );
    }

}
