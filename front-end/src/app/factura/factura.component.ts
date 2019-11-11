import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
// import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @ViewChild('contenido', {static: false}) content: ElementRef;

  generarPDF() {
    debugger;

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

