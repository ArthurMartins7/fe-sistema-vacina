import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';
import { FormsModule } from '@angular/forms';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';

@NgModule({
  declarations: [PessoasListagemComponent, PessoasDetalheComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule
  ]
})
export class PessoasModule { }
