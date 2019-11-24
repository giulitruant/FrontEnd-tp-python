export class SolicitudDetalleModel {
    public id : number;
    public nroSol: number;
    public cantidad: number;
    public prod : number;
    
    
    constructor(nro: number, cant: number , prod : number) {
      this.nroSol = nro;
      this.cantidad = cant;
      this.prod = prod;
    }
  }
