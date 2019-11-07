import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ProveedorModel } from '../model/proveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(protected http: HttpClient) { }

  getClientes(): Observable<ProveedorModel[]> {
    return this.http.get<ProveedorModel[]>('http://127.0.0.1:5000/getClientes');
  }

  getCliente(id: string): Observable<ProveedorModel> {
    return this.http.get<ProveedorModel>('http://127.0.0.1:5000/getCliente?id=' + id);

  }

  deleteCliente(id: string) {
    const url = `${'http://127.0.0.1:5000/deleteCliente'}/${id}`;
    // const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    // const params = new HttpParams().set('cuit', cuit);
    return this.http.delete(url).toPromise();
    // .subscribe(
    //   result => console.log(result),
    //   err => console.error(err)
    // ); //.toPromise();
  }

  addCliente(proveedor: ProveedorModel) {
    const headers = new HttpHeaders({'Content-Type':  'application/json'});
    // let json = JSON.stringify(proveedor);
    // console.dir(json);
    return this.http.post('http://127.0.0.1:5000/addCliente', proveedor).toPromise();
    // .then(function(value) {
    //   console.dir(value);
    // }), (error) => {
    //   console.dir('Promise rejected with ' + JSON.stringify(error));
    // };

  }

  updateCliente(cuit: string, nombre: string, apellido: string, telefono: string, email: string, direccion: string) {
    let bodyObj = {
      'cuit': cuit,
      'nombre': nombre,
      'tel': telefono,
      'email': email,
      'direccion': direccion
    };

    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.put('http://127.0.0.1:5000/updateCliente',
    JSON.stringify(bodyObj), {headers}).subscribe();
  }
}
