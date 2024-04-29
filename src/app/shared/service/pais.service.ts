import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../model/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/estudo-de-caso-2/rest/pais';

  public consultarTodosPaises():Observable<Array<Pais>> {
    return this.httpClient.get<Array<Pais>>(this.API + "/todos")
  }

  public inserir(pais: Pais):Observable<any>{
    return this.httpClient.post<Pais>(this.API, pais);
  }

  public consultarPorId(id: number):Observable<Pais>{
    return this.httpClient.get<Pais>(this.API + '/' + id);
  }


}
