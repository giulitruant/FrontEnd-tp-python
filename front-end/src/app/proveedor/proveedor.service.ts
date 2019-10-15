import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { Observable } from 'rxjs';
import { ProveedorModel } from '../Model/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(protected http: HttpClient) { }

  getProveedores() {
    return this.http.get<ProveedorModel[]>('http://127.0.0.1:5000/getProveedores');
  }

  getProveedor(cuit: string) {
    return this.http.get<ProveedorModel>('http://127.0.0.1:5000/getProveedores?cuit=' + cuit);
  }

  deleteProveedor(cuit: string) {
    //let data = {'cuit': cuit }

    const url = `${'http://127.0.0.1:5000/deleteProveedor'}/${cuit}`;
    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.delete(url, {headers});
  }

  addProveedor(cuit: string, nombre: string, apellido: string, telefono: string, email: string, direccion: string) {
    let data = {'cuit': cuit,
    'nombre': nombre,
    'apellido': apellido,
    'tel': telefono,
    'email': email,
    'direccion': direccion };
    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.post('http://127.0.0.1:5000/addProveedor', JSON.stringify({data}), {headers});

    //return this.http.post<any>('http://127.0.0.1:5000/addProveedor', JSON.stringify({data}), {headers});
    //let heroesURL = `${'http://127.0.0.1:5000/addProveedor'}?${data}`;
    //return this.http.jsonp('http://127.0.0.1:5000/addProveedor')

    }

  updateProveedor(cuit: string, nombre: string, apellido: string, telefono: string, email: string, direccion: string) {
    let bodyObj = {
      'cuit': cuit,
      'nombre': nombre,
      'tel': telefono,
      'email': email,
      'direccion': direccion
    };

    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.put('http://127.0.0.1:5000/updateProveedor',
    JSON.stringify(bodyObj), {headers});
  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body;
  // }

  // private handleError (error: any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   // We'd also dig deeper into the error to get a better message
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  //   return Observable.throw(errMsg);
  // }
}
