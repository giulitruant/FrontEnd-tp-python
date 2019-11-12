import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import { FacturaService } from '../service/factura.service';
//import { FacturaModel } from '../model/factura';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [FacturaService]
})
export class FacturaComponent implements OnInit {
  factura: boolean = false;
  productos: any;
  fechaFactura: string;
  razonSocial: string;
  domicilio: string;
  telefono: string;
  dni: string;
  importeTotal: string;
  nroFact: string;
  tipoFactura: string;
  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
    this.factura = false;
  }

  @ViewChild('contenido', {static: false}) content: ElementRef;

  BuscarSolicitud(nroSolicitud: string) {
    let facturacion;
    this.facturaService.addCompra(nroSolicitud).subscribe(
      (data) => { //success
        debugger;
        this.productos = data['producto'];
        this.dni = data['dni'];
        this.domicilio = data['domicilioCli'];
        this.fechaFactura = data['fecha'];
        this.importeTotal = data['importeTotal'];
        this.nroFact = (data['nroFactura']).toString();
        this.razonSocial = data['razonSocialCli'];
        this.tipoFactura = data['tipoFactura'];
        console.dir(data);
      },
      (error) => { //error
        console.error(error);
      });
      debugger;

    this.factura = true;

  }

  generarPDF() {

    const doc = new jsPDF();
    // doc.text('Hello world!', 10, 10);
    // doc.save('a4.pdf');

    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('factura.pdf');
  }
}


    // html2canvas(document.getElementById('contenido'), {
    //   // Opciones
    //   allowTaint: true,
    //   useCORS: false,
    //   // Calidad del PDF
    //   scale: 1
    // }).then( function(canvas) {
    //   var img = canvas.toDataURL("image/png");
    //   var doc = new jsPDF();
    //   doc.addImage(img,'PNG',7, 20, 195, 105);
    //   doc.save('postres.pdf');
    // });

