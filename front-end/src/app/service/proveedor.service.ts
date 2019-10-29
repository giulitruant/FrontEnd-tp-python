import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { ProveedorModel } from '../model/proveedor';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

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
    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.post('http://127.0.0.1:5000/addProveedor', JSON.stringify({'cuit': cuit,
    'nombre': nombre,
    'apellido': apellido,
    'telefono': telefono,
    'email': email,
    'direccion': direccion}), {headers})
    .pipe(
      catchError(this.handleError));
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }




}

