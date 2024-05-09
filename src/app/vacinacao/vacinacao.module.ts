import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinacaoRoutingModule } from './vacinacao-routing.module';
import { VacinaDetalheComponent } from '../vacinas/vacina-detalhe/vacina-detalhe.component';
import { VacinacaoDetalheComponent } from './vacinacao-detalhe/vacinacao-detalhe.component';

@NgModule({
  declarations: [
    VacinacaoDetalheComponent
  ],
  imports: [
    CommonModule,
    VacinacaoRoutingModule
  ]
})
export class VacinacaoModule { }
