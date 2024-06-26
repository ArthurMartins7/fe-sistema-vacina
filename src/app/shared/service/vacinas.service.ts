import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VacinaSeletor } from '../model/seletor/vacina-seletor';
import { Vacina } from '../model/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {


  private readonly API = 'http://localhost:8080/estudo-de-caso-2/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  public listarTodas(): Observable <Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + "/todas");

  }
  public consultarPorId(id: number): Observable <Vacina> {
    return this.httpClient.get<Vacina>(this.API + '/' + id);

  }
  public consultarComSeletor(seletor: VacinaSeletor): Observable <Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + "/filtro", seletor)
  }


  public salvar(vacina: Vacina): Observable<any> {
    return this.httpClient.post<Vacina>(this.API, vacina)
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir/' + id);
  }

  public atualizar(vacina: Vacina):Observable<any> {
    return this.httpClient.put(this.API, vacina)
  }


}
