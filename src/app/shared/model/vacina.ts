import { Pessoa } from "./pessoa";
import { Pais } from "./pais";

export class Vacina {

  id: number;
	nome: string;
	paisDeOrigem: Pais;
	estagioDaPesquisa: number;
	dataDeInicioDaPesquisa: Date;
	media: number;
	pesquisador: Pessoa;
  produtoSeletor: string;

}
