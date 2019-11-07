import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ClienteModel } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(protected http: HttpClient) { }

  getClientes(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>('http://127.0.0.1:5000/getClientes');
  }

  getCliente(dni: number): Observable<ClienteModel> {
    return this.http.get<ClienteModel>('http://127.0.0.1:5000/getCliente?id=' + dni);

  }

  deleteCliente(dni: number) {
    const url = `${'http://127.0.0.1:5000/deleteCliente'}/${dni}`;
    // const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    // const params = new HttpParams().set('cuit', cuit);
    return this.http.delete(url).toPromise();
    // .subscribe(
    //   result => console.log(result),
    //   err => console.error(err)
    // ); //.toPromise();
  }

  addCliente(cliente: ClienteModel) {
    const headers = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.post('http://127.0.0.1:5000/addCliente', cliente).toPromise();
    // .then(function(value) {
    //   console.dir(value);
    // }), (error) => {
    //   console.dir('Promise rejected with ' + JSON.stringify(error));
    // };

  }

  updateCliente(c: ClienteModel) {
    let bodyObj = {
      'dni': c.dni,
      'nombre': c.nombre,
      'apellido': c.apellido,
      'direccion': c.direccion,
      'tel': c.tel,
      'email': c.email
    };

    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.put('http://127.0.0.1:5000/updateCliente',
    JSON.stringify(bodyObj), {headers}).subscribe();
  }
}
