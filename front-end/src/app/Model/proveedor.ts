export class ProveedorModel{

    public cuit: string;
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public email: string;
    public direccion: string;
  
    constructor(cuit: string, nombre: string, apellido: string, telefono: string, email: string, direccion: string) {
      this.cuit = cuit;
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.email = email;
      this.direccion = direccion;
    }
  }