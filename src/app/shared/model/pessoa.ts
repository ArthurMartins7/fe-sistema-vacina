import { Pais } from "./pais";

export interface Pessoa {

  idPessoa: number;
	nome: string;
	dataNascimento: Date;
	sexo: string;
	cpf: string;
	tipoDePessoa: number;
	pais: Pais;

}
