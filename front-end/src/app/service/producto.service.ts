import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ProductoModel } from '../model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>('http://127.0.0.1:5000/getClientes');
  }

  getCliente(id: string): Observable<ProductoModel> {
    return this.http.get<ProductoModel>('http://127.0.0.1:5000/getCliente?id=' + id);

  }

  deleteCliente(id: string) {
    const url = `${'http://127.0.0.1:5000/deleteCliente'}/${id}`;
    // const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    // const params = new HttpParams().set('cuit', cuit);
    return this.http.delete(url)
    .subscribe(
      result => console.log(result),
      err => console.error(err)
    ); //.toPromise();
  }

  addCliente(cliente: ProductoModel) {
    const headers = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.post('http://127.0.0.1:5000/addCliente', cliente).toPromise();
    // .then(function(value) {
    //   console.dir(value);
    // }), (error) => {
    //   console.dir('Promise rejected with ' + JSON.stringify(error));
    // };

  }

  updateCliente(pro: ProductoModel) {
    let bodyObj = {
      'id': pro.id,
      'descripcion': pro.descripcion,
      'precioU': pro.precioU,
      'cantMin': pro.cantMin,
      'stock': pro.stock
    };

    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.put('http://127.0.0.1:5000/updateCliente',
    JSON.stringify(bodyObj), {headers}).subscribe();
  }

}
