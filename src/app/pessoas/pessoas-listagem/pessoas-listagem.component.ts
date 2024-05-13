import { PessoasDetalheComponent } from './../pessoas-detalhe/pessoas-detalhe.component';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { PesquisadorService } from '../../shared/service/pessoa.service';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import { PessoaSeletor } from '../../shared/model/seletor/pessoa-seletor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-listagem',
 // standalone: true,
 // imports: [],
  templateUrl: './pessoas-listagem.component.html',
  styleUrl: './pessoas-listagem.component.scss'
})
export class PessoasListagemComponent implements OnInit{


  public pessoas: Array<Pessoa> = new Array();
  public paises: Array<Pais> = new Array();
  public seletor: PessoaSeletor =  new PessoaSeletor();

  constructor(private pessoaService: PesquisadorService,
    private paisService: PaisService, private router: Router){}

  ngOnInit(): void {
    this.consultarTodosPaises();
    this.consultarTodasAsPessoas();

  }

  consultarTodosPaises(){
    this.paisService.consultarTodosPaises().subscribe(
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.error('Erro ao consultar todos os paises', erro);
      }
    )
  }

  private consultarTodasAsPessoas() {
    this.pessoaService.consultarTodasPessoas().subscribe(
      (resultado) => {
        this.pessoas = resultado;

      },
      (erro) => {
        console.error('Erro ao listar todas as Pessoas ', erro)
      }

    )};

    pesquisar(){
      this.pessoaService.consultarComSeletor(this.seletor).subscribe(
        resultado => {
          this.pessoas = resultado;
        },
        erro => {
          console.error('Erro ao consultar pessoas com seletor', erro)
        }
      )

    }

    limpar() {
      this.seletor = new PessoaSeletor();
      }

      public editar(idPessoa: number) {
        this.router.navigate(['/pessoas/detalhes/', idPessoa])

      }



}
