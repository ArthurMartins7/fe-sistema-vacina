import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aplicacao } from '../model/aplicacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {

  private readonly API = 'http://localhost:8080/estudo-de-caso-2/rest/aplicacao';

  constructor(private httpClient: HttpClient) { }

  inserir(vacinacao: Aplicacao):Observable<any> {
    return this.httpClient.post<Aplicacao>(this.API, vacinacao);
  }

  atualizar(alterar: Aplicacao): Observable<any>{
    return this.httpClient.put<Aplicacao>(this.API, alterar);
  }

  excluir (id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/' + id)
  }

  consultarPorId(id: number):Observable<Aplicacao>{
    return this.httpClient.get<Aplicacao>(this.API + '/' + id);
  }

  consultarTodasAplicacoes():Observable<Array<Aplicacao>>{
    return this.httpClient.get<Array<Aplicacao>>(this.API + '/todas')
  }

}
