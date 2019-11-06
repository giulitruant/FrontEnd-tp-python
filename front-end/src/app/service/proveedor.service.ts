import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { ProveedorModel } from '../model/proveedor';
import { throwError, Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  constructor(protected http: HttpClient) { }

  getProveedores(): Observable<ProveedorModel[]> {
    return this.http.get<ProveedorModel[]>('http://127.0.0.1:5000/getProveedores');
  }

  getProveedor(cuit: string): Observable<ProveedorModel> {
    return this.http.get<ProveedorModel>('http://127.0.0.1:5000/getProveedor?cuit=' + cuit);

  }

  deleteProveedor(cuit: string) {
    const url = `${'http://127.0.0.1:5000/deleteProveedor'}/${cuit}`;
    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.delete(url, {headers});
  }

  addProveedor(proveedor: ProveedorModel) {
    const headers = new HttpHeaders({'Content-Type':  'application/json'});
    // let json = JSON.stringify(proveedor);
    // console.dir(json);
    return this.http.post('http://127.0.0.1:5000/addProveedor', proveedor).toPromise()
    .then(function(value) {
      console.dir(value);
    }), (error) => {
      console.dir('Promise rejected with ' + JSON.stringify(error));
    };

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
    JSON.stringify(bodyObj), {headers}).subscribe();
  }
}

