import {Component, Inject, ViewChild, OnInit, ElementRef} from '@angular/core';
import jsPDF from 'jspdf';
import { FacturaService } from '../service/factura.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { JsonPipe } from '@angular/common';

export interface Factura {
  producto: any[];
  dni: string;
  domicilioCli: string;
  fecha: string;
  nroFactura: string;
  tipoFactura: string;
  telefonoCli: string;
  importeTotal: string;
  razonSocialCli: string;
}

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [FacturaService]
})
export class FacturaComponent implements OnInit {
  fact: Factura;
  rta: any;
  Facturacion: any;
    submitted = false;
  factura: boolean = false;
  productos: any[];
  fechaFactura: string;
  razonSocial: string;
  domicilio: string;
  telefono: string;
  dni: string;
  importeTotal: string;
  nroFact: string;
  tipoFactura: string;
  constructor(private facturaService: FacturaService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.factura = false;
    this.Facturacion = this.fb.group({
      nom_tarjeta: [''],
      solicitud: ['', Validators.requiredTrue],
      tipo_pago: ['', Validators.requiredTrue],
      tipo: ['', Validators.requiredTrue],
      nro_tarjeta: [''],
      cuenta: ['', Validators.requiredTrue],
      cuotas: ['', Validators.minLength(1)]
  }
  // , {
  //     validator: MustMatch('password', 'confirmPassword')
  // }
  );
  }

  get f() { return this.Facturacion.controls; }

  @ViewChild('contenido', {static: false}) content: ElementRef;

  //BuscarSolicitud
  onSubmit(fac: any) { //FormBuilder
    debugger;
    this.submitted = true;
    let facturacion;

    const json = JSON.stringify({
      nom_tarjeta: fac.nom_tarjeta === undefined ? " " : fac.nom_tarjeta,
      solicitud: fac.solicitud,
      tipo_pago: fac.tipo_pago,
      tipo: fac.tipo,
      nro_tarjeta: fac.nro_tarjeta === undefined ? " " : fac.nro_tarjeta,
      cuenta: fac.cuenta === undefined ? " " : fac.cuenta,
      cuotas: fac.cuotas === undefined ? " " : fac.cuotas
    });
    // if (this.Facturacion.invalid) {
    //   this.factura = false;
    //   return;
    // }

    this.rta = this.facturaService.addCompra(json)
    .then(
      res => { // Success
      this.rta = res;
      debugger;
      this.fact = this.rta;
      this.productos = this.rta.producto;
      },
      msg => { // Error
        console.dir(msg);
      // reject(msg);
      }
    );



    // if ( this.rta.dni !== undefined ) {
    //   debugger;
    //   this.productos = this.rta.producto;
    //   this.dni = this.rta.dni;
    //   this.domicilio = this.rta.domicilioCli;
    //   this.fechaFactura = this.rta.fecha;
    //   this.nroFact = this.rta.nroFactura;
    //   this.tipoFactura = this.rta.tipoFactura;
    //   this.telefono = this.rta.telefinoCli;
    //   this.importeTotal = this.rta.importeTotal;
    // }
    this.factura = true;

   }

  onReset() {
    debugger;
    this.submitted = false;
    this.Facturacion.reset();
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

