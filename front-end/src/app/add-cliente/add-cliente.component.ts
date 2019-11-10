import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../Model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css'],
  providers: [ClienteService]
})
export class AddClienteComponent implements OnInit {
  public cliente: ClienteModel;
  public isValid: boolean =  true;
  public message: string = '';
  public rta: any;
  public popupProv: boolean = false;
  public edicion: boolean =  true;

  constructor(private createClienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.cliente = new ClienteModel(undefined, '', '', '', '', '');
     }

  ngOnInit() {
    debugger;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cliente.dni = params['dni'];
      this.cliente.nombre = params['nombre'];
      this.cliente.apellido = params['apellido'];
      this.cliente.direccion = params['direccion'];
      this.cliente.email = params['email'];
      this.cliente.tel = params['telefono'];
    });

    if (this.cliente.dni.toString() === ":dni") {
      this.cliente = new ClienteModel(undefined, '', '', '', '', '');
    }
    console.dir(JSON.stringify(this.cliente));
  }

  onSubmit(value: ClienteModel) {
    if (this.isValid) {
      if (this.edicion) {
        this.rta = this.createClienteService.addCliente(this.cliente);
      if(<string>this.message === "ok") {
        this.cliente = new ClienteModel(undefined, '', '', '', '', '');
        this.router.navigate(['/cliente']);
      }
      else {
        this.popupProv = true;
        this.message = 'Verificar los campos obligatorios';
      }
    } else {
      this.rta = this.createClienteService.updateCliente(this.cliente);
      if(<string>this.message === "ok") {
        this.cliente = new ClienteModel(undefined, '', '', '', '', '');
        this.router.navigate(['/cliente']);
      }
      else {
        this.popupProv = true;
        this.message = 'Verificar los campos obligatorios';
      }
    }
  }
}

}
