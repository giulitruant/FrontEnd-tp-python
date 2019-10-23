export class ProductoModel {
    public id: number;
    public descripcion: string;
    public precioU: number;
    public stock: number;
    public cantMin: number;
    public cuit: string;
  
    constructor(id: number, descripcion: string , precioU: number, stock: number, cantMin: number, cuit: string) {
      this.cuit = cuit;
      this.descripcion = descripcion;
      this.precioU = precioU;
      this.stock = stock;
      this.cantMin = cantMin;
      this.cuit = cuit;
    }
  }