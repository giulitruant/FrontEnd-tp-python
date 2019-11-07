import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../Model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css'],
  providers: [ClienteService]
})
export class ListaClienteComponent implements OnInit {
  private cliente: ClienteModel;
  private clientes: Array<ClienteModel>;
  public selectedRow: Number;
  public setClickedRow: Function;

  constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAllClientes();
  }

  getAllClientes() {
    this.clienteService.getClientes()
    .subscribe(
      (data) => { //success
        this.clientes = data['cliente'];
      },
      (error) => { //error
        console.error(error);
      });
  }

  getCliente(dni: number) {
    this.clienteService.getCliente(dni)
    .subscribe(
      (data) => { //success
        this.cliente = data;
      }
      // ,(error) => { //error
      //   console.error(error);
      // }
      );
  }

  deleteCliente(dni: number) {
    debugger;
    return this.clienteService.deleteCliente(dni);
  }

  editCliente(c: ClienteModel) {
    this.router.navigate(['./addCliente', c.dni, c.nombre, c.apellido, c.direccion, c.email, c.tel]);
    //this.router.navigate(['cliente']); :dni/:nombre/:apellido/:direccion/:email/:tel
  }

}
