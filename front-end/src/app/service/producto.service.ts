import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ProductoModel } from '../model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getProductos(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>('http://127.0.0.1:5000/getProductos');
  }

  getProducto(id: string): Observable<ProductoModel> {
    return this.http.get<ProductoModel>('http://127.0.0.1:5000/getCliente?id=' + id);

  }

  deleteProducto(id: string) {
    const url = `${'http://127.0.0.1:5000/deleteProducto'}/${id}`;
    // const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    // const params = new HttpParams().set('cuit', cuit);
    return this.http.delete(url)
    .subscribe(
      result => console.log(result),
      err => console.error(err)
    ); //.toPromise();
  }

  addProducto(producto: ProductoModel) {

    return this.http.post('http://127.0.0.1:5000/addProducto', producto)
    // .subscribe(
    //   result => console.log(result),
    //   err => console.error(err)
    // );

  }

  updateProducto(pro: ProductoModel) {
    
    return this.http.put('http://127.0.0.1:5000/updateProducto',
    pro)
    // .subscribe(
    //   result => console.log(result),
    //   err => console.error(err)
    // );
  }

}
