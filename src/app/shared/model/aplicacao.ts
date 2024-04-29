import { Vacina } from "./vacina";

export interface Aplicacao {

  id: number;
	dataDaAplicacao: Date;
	idPessoa: number;
	vacinaAplicada: Vacina;
	avaliacao: number;

}
