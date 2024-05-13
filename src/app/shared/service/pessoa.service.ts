import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';
import { PessoaSeletor } from '../model/seletor/pessoa-seletor';

@Injectable({
  providedIn: 'root'
})
export class PesquisadorService {


  private readonly API = 'http://localhost:8080/estudo-de-caso-2/rest/pessoa';

  constructor(private httpCliente: HttpClient) { }

  public consultarTodasPessoas():Observable<Array<Pessoa>> {
    return this.httpCliente.get<Array<Pessoa>>(this.API + '/todas')
  }

  public consultarPorPesquisador():Observable<Array<Pessoa>> {
    return this.httpCliente.get<Array<Pessoa>>(this.API + '/pesquisadores')
  }

  public consultarPessoaPorId(id: number):Observable<Pessoa> {
    return this.httpCliente.get<Pessoa>(this.API + '/' + id);
  }

  public inserir(pessoa: Pessoa):Observable<any> {
    return this.httpCliente.post<Pessoa>(this.API, pessoa)
  }

  public atualizar(pessoa: Pessoa):Observable<any> {
    return this.httpCliente.put(this.API, pessoa);

  }

  public excluir(id: number):Observable<boolean> {
    return this.httpCliente.delete<boolean>(this.API + '/' + id)
  }

  public consultarComSeletor(seletor: PessoaSeletor):Observable <Array<Pessoa>> {
    return this.httpCliente.post<Array<Pessoa>>(this.API + '/filtro', seletor)
  }

}
