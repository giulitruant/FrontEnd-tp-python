import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FacturaModel } from '../model/factura';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(protected http: HttpClient) { }

  // getSolicitud(solicitud: string): Observable<any[]> {
  //   return this.http.get<any[]>('http://127.0.0.1:5000/getClientes');
  // }


  addCompra(solicitud: any) {
    const headers = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.post('http://127.0.0.1:5000/EmitirFactura?solicitud', solicitud, {headers}).toPromise();
    // return this.http.post('http://127.0.0.1:5000/EmitirFactura?solicitud', solicitud, {headers});


    //.subscribe();
    //.toPromise();
  }
}
