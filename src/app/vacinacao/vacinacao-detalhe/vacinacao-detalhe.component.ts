import { Component, OnInit } from '@angular/core';
import { Aplicacao } from '../../shared/model/aplicacao';
import { Pessoa } from '../../shared/model/pessoa';
import { Vacina } from '../../shared/model/vacina';
import { AplicacaoService } from '../../shared/service/aplicacao.service';
import { PesquisadorService } from '../../shared/service/pessoa.service';
import { VacinasService } from '../../shared/service/vacinas.service';


@Component({
  selector: 'app-vacinacao-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './vacinacao-detalhe.component.html',
  styleUrl: './vacinacao-detalhe.component.scss'
})
export class VacinacaoDetalheComponent implements OnInit{

  public vacinacao: Aplicacao = new Aplicacao();
  public pessoas: Array<Pessoa> = new Array();
  public vacinas: Array<Vacina> = new Array();

  constructor(private vacinaService : VacinasService,
    private pessoaService : PesquisadorService,
    private vacinacaoService: AplicacaoService
  ) {}
  ngOnInit(): void {
    this.pessoaService.consultarTodasPessoas().subscribe(
      retorno => {
        this.pessoas = retorno;
      },
      erro =>
        console.error('Erro ao consultarTodasPessoas', erro)

    );


    this.vacinaService.listarTodas().subscribe(
      retorno => {
        this.vacinas = retorno;
      },
      erro =>
        console.error('Erro ao listarTodasVacinas', erro)
    )
  }

  public salvar() {
    this.vacinacaoService.inserir(this.vacinacao).subscribe(
      retorno => {
        this.vacinacao = retorno;
      }

    )

  }

}
