import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { FacturaModel } from '../model/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(protected http: HttpClient) { }

  // getSolicitud(solicitud: string): Observable<any[]> {
  //   return this.http.get<any[]>('http://127.0.0.1:5000/getClientes');
  // }


  addCompra(solicitud: string): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/EmitirFactura?solicitud', solicitud);
    //.subscribe();
    //.toPromise();
  }
}
