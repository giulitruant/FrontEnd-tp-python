import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import jsPDF from 'jspdf';
import { FacturaService } from '../service/factura.service';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

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
              private fb: FormBuilder, private router: Router) { }

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
  );
  }

  get f() { return this.Facturacion.controls; }

  @ViewChild('contenido', {static: false}) content: ElementRef;

  //BuscarSolicitud
  onSubmit(fac: any) { //FormBuilder
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
      }
    );
    this.factura = true;
   }

  onReset() {
    this.submitted = false;
    this.Facturacion.reset();
}

  generarPDF() {

    const doc = new jsPDF();

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


