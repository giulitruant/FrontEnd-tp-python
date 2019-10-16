import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProveedorModel } from '../Model/proveedor';

@Injectable({
  providedIn: 'root'
})
export class CreateProveedorService {

  constructor(protected http: HttpClient) { }

  public validate(cuit: string) {
    let isvalid = true;

    if (!cuit) {
      isvalid = false;
    }
    return isvalid;
  }

  public addProveedor(proveedor: ProveedorModel) {
//, {'Access-Control-Allow-Origin', '*'}, {'Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT'}
    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    return this.http.post('http://127.0.0.1:5000/addProveedor', JSON.stringify(
    {
      cuit: proveedor.cuit,
      nombre: proveedor.nombre,
      apellido: proveedor.apellido,
      telefono: proveedor.telefono,
      email: proveedor.email,
      direccion: proveedor.direccion
    }), {headers}).toPromise().then(data => {
      console.log(data);
    });

  }

  // public addProveedor(cuit: string, nombre: string, apellido: string, telefono: string, email: string, direccion: string) {
  //     let data = {
  //       'cuit': cuit,
  //       'nombre': nombre,
  //       'apellido': apellido,
  //       'tel': telefono,
  //       'email': email,
  //       'direccion': direccion
  //   };
  //     const headers = new HttpHeaders ({'Content-Type': 'application/json'});
  //     return this.http.post('http://127.0.0.1:5000/addProveedor', JSON.stringify({data}), {headers});
  //   }
  }
