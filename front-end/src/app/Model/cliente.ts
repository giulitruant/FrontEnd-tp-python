export class ClienteModel {
  public dni: number;
  public nombre: string;
  public apellido: string;
  public tel: string;
  public email: string;
  public direccion: string;

  constructor(dni: number, nombre: string , apellido: string, tel: string, email: string, direccion: string) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.tel = tel;
    this.email = email;
    this.direccion = direccion;
  }
}
