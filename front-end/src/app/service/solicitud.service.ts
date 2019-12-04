import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitudModel } from '../Model/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(protected http: HttpClient) { }

  getSolicitudes(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>('http://127.0.0.1:5000/getProveedores');
  }

  addSolicitud(solicitud: any) {
    const headers = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.post('http://127.0.0.1:5000/addSolicitud', solicitud, {headers}).toPromise();
  }
}
