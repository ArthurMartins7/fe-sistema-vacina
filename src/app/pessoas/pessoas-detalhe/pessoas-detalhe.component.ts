import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { Pais } from '../../shared/model/pais';
import { PesquisadorService } from '../../shared/service/pessoa.service';
import Swal from 'sweetalert2';
import { PaisService } from '../../shared/service/pais.service';

@Component({
  selector: 'app-pessoas-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './pessoas-detalhe.component.html',
  styleUrl: './pessoas-detalhe.component.scss'
})
export class PessoasDetalheComponent implements OnInit {

constructor(private pessoaService: PesquisadorService, private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.consultarTodosPaises().subscribe(
      (resultado) => {
        this.pais = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas paises', erro);
      }
    );

  }

  public pessoa: Pessoa = new Pessoa();
  public pais: Array<Pais> = new Array();

  public salvar() {
    if(this.pessoa.idPessoa) {
      this.atualizar();
    }
     else {
      this.inserir();
     }

  }

  public inserir(): void {
    this.pessoaService.inserir(this.pessoa).subscribe(
      resultado => {
        this.pessoa = resultado;
        Swal.fire('Pessoa salva com sucesso!', '', 'success');
        this.voltar();
      },
      erro => {
        Swal.fire('Erro ao salvar pessoa', erro.error.mensagem, 'error')
      }
    )
  }

  public atualizar(): void {
    this.pessoaService.atualizar(this.pessoa).subscribe(
      resultado => {
        this.pessoa = resultado;
        Swal.fire('Pessoa atualizada com sucesso!', '', 'success')
        this.voltar();
      },
      erro => {
        Swal.fire('Erro ao atualizar pessoa!', erro.error.mensagem, 'error')
      }
    )
  }



  public voltar() {

  }


}
