import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../model/producto.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProveedorService{
    constructor(private http: HttpClient){ }

    public getProveedores(): Observable<ProductoModel[]>{
        return this.http.get<ProductoModel[]>('http://localhost:4200/getProveedores')
    }
}