import {parentEntity} from './parentEntity.model';

export class ProductoModel extends parentEntity{
    public id: number;
    public descripcion: string;
    public precio_u: number;
    public stock: number;
    public cant_min: number;
    public cuit: string;
}