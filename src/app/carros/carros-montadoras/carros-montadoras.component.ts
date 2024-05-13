import { Component, OnInit } from '@angular/core';
import { MontadoraService } from '../../shared/service/montadora.service';
import Swal from 'sweetalert2';
import { Montadora } from '../../shared/model/montadora';

@Component({
  selector: 'app-carros-montadoras',
  templateUrl: './carros-montadoras.component.html',
  styleUrl: './carros-montadoras.component.scss'
})
export class CarrosMontadorasComponent implements OnInit{

    public montadora: Montadora = new Montadora()
    public montadoras: Array<Montadora> = new Array;

    constructor(private montadoraService: MontadoraService) { }

    ngOnInit(): void {
      this.consultarTodasMontadoras()
    }

    public consultarEstoque(id: number){
      if(!id){
        Swal.fire('Selecione uma montadora', '', 'warning')
        return
      }

      this.montadoraService.consultarEstoque(id).subscribe(
        resultado => {
            Swal.fire('Estoque' ,'Carros disponíveis em estoque: ' + resultado, 'info')
        },
        erro => {
          Swal.fire('Erro ao consultar os carros em estoque', erro, 'error')
        }
      )
    }

    public consultarTodasMontadoras(){
      this.montadoraService.consultarTodasMontadoras().subscribe(
        resultado => {
          this.montadoras = resultado
        },
        erro => {
          console.log('Erro ao consultar todas as montadoras' + erro)
        }
      )
    }
}
