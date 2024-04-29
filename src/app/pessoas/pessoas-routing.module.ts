import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';

const routes: Routes = [
  { path: '', component: PessoasListagemComponent },
  { path: 'detalhes', component: PessoasDetalheComponent},
  { path: 'detalhes/:id', component: PessoasDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
