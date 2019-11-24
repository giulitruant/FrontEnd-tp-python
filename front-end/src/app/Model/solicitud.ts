export class SolicitudModel {
    public nroSol: number;
    public dniCli: string;
    public precioTotal: number;
    
    
    constructor(nro: number, dni: string , precio: number) {
      this.nroSol = nro;
      this.dniCli = dni;
      this.precioTotal = precio;
    }
  }
