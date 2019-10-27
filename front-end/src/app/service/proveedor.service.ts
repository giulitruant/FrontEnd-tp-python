import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ProveedorModel } from '../model/proveedor';
import { JsonPipe } from '@angular/common';

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
    const url = `${'http://127.0.0.1:5000/deleteProveedor'}/${cuit}`;
    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.delete(url, {headers});
  }

  addProveedor(cuit: string, nombre: string, apellido: string, telefono: string, email: string, direccion: string) {
    let data = {'cuit': cuit,
    'nombre': nombre,
    'apellido': apellido,
    'telefono': telefono,
    'email': email,
    'direccion': direccion };
    let params = "json="+JSON.stringify({data});
    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.post('http://127.0.0.1:5000/addProveedor', params, {headers});
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
}
