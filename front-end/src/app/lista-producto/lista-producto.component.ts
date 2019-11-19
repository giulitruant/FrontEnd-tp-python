import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../Model/producto';
import { ProductoService } from '../service/producto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css'],
  providers: [ProductoService]
})
export class ListaProductoComponent implements OnInit {
  private producto: ProductoModel;
  private productos: Array<ProductoModel>;
  // public selectedRow: Number;
  // public setClickedRow: Function;
  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAllProductos();
  }

  getAllProductos() {
    debugger;
    this.productoService.getProductos()
    .subscribe(
      (data) => { // Success
        debugger;
      this.productos = data['producto'];
      },
      (error) => { //error
        debugger;
        console.error(error);
      });
    }

    //sin uso
    getProducto(id: string) {
      return this.productoService.getProducto(id).subscribe(value => {
        this.producto = value;
        // console.log(value);
        // console.log(value.cuit);
      });
    }

    deleteProducto(id: string) {
      //console.dir('Eliminar cuit' + cuit);
      return this.productoService.deleteProducto(id);
    }

    editProducto(producto: ProductoModel) {
      this.router.navigate(['./addProducto', producto.id, producto.descripcion,
                                            producto.precioU, producto.stock,
                                            producto.cantMin, producto.cuit]);
      //this.router.navigate(['proveedor']);
    }

}
