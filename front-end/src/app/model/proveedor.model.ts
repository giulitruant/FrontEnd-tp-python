import {parentEntity} from './parentEntity.model';

export class ProveedorModel extends parentEntity{

    public cuit: string;
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public email: string;
    public direccion: string;    
}