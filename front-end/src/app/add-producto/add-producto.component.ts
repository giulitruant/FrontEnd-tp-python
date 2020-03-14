import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../Model/producto';
import { ProductoService } from '../service/producto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { resolve } from 'url';
 
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css'],
  providers: [ProductoService]
})
export class AddProductoComponent implements OnInit {
  public producto: ProductoModel;
  public isValid: boolean =  true;
  public edicion: boolean =  false;
  public message: string = '';
  public rta: any;
  public popupProv: boolean = false;

  constructor(private productoService: ProductoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
                this.producto = new ProductoModel(undefined, undefined, undefined, undefined, undefined, undefined);
              }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.producto.id = params['id'];
      this.producto.descripcion = params['desc'];
      this.producto.precioU = params['precioU'];
      this.producto.stock = params['cantStock'];
      this.producto.cantMin = params['cantMin'];
      this.producto.cuit = params['cuit'];
    });
    if (this.producto.id.toString() === ":id") {
      this.producto = new ProductoModel(undefined, undefined, undefined, undefined, undefined, undefined);
    } else {
      this.edicion = true;
    }
  }

  onSubmit(value: ProductoModel) {
    if (this.isValid) {
      if (this.edicion) {
        // this.rta = 
        this.productoService.updateProducto(value).toPromise().then((val) => {
          console.log(val);
        })
        .then((val) => console.log(val))
        .catch((err) => console.error(err));

      } else {
        this.productoService.addProducto(this.producto).toPromise()
        .then((res: any) => {
          // Success
          this.rta = res

          console.log(res.json());


          // Si tengo que mapear los datos 

          // this.data = res.map((res: any) => {
          //   return new Post(
          //     res.userId,
          //     res.id,
          //     res.title,
          //     res.body
          //   );
          // });
          //resolve();
        },
        err => {
          // Error
          //reject(err);
        }
        );
        
      }
      console.dir(this.rta);
      if (<string>this.message === "ok") {
        this.producto = new ProductoModel(undefined, undefined, undefined, undefined, undefined, undefined);
        this.router.navigate(['/producto']);
      } else {
        this.popupProv = true;
        this.message = 'Error de servicio';
      }
      } else {
        this.popupProv = true;
        this.message = 'Verificar los campos obligatorios';
      }
      this.router.navigate(['/producto']);
    }
}
