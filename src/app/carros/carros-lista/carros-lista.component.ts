import { Component, OnInit } from '@angular/core';
import { Carro } from '../../shared/model/carro';
import { CarroSeletor } from '../../shared/model/seletor/carro-seletor';
import { CarrosService } from '../../shared/service/carros.service';
import Swal from 'sweetalert2';
import { Montadora } from '../../shared/model/montadora';
import { MontadoraService } from '../../shared/service/montadora.service';

@Component({
  selector: 'app-carros-lista',
  templateUrl: './carros-lista.component.html',
  styleUrl: './carros-lista.component.scss'
})
export class CarrosListaComponent implements OnInit{

  public carros: Array<Carro> = new Array;
  public montadoras: Array<Montadora> = new Array;
  public seletor: CarroSeletor = new CarroSeletor()

  constructor(private carroService: CarrosService,
              private montadoraService: MontadoraService) {}

  ngOnInit(): void{
    this.pesquisar()
    this.consultarTodasMontadoras()
  }

  public consultarTodasMontadoras(){
    this.montadoraService.consultarTodasMontadoras().subscribe(
      resultado => {
        this.montadoras = resultado
      },
      erro => {
        console.log('Erro ao consultar todas montadoras' + erro)
      }
    )
  }

  public pesquisar(){
    this.carroService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.carros = resultado
        if(this.carros.length === 0){
          Swal.fire('Nenhum veículo encontrado', '', 'question')
        }
      },
      erro => {
        Swal.fire('Erro ao pesquisar carros com filtro', erro, 'error')
      }
    )
  }

  public limpar(){
    this.seletor = new CarroSeletor();
  }



}
