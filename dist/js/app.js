import { Negociacao } from "./models/negociacao.js";
const negociacao = new Negociacao(new Date(), 10, 100);
alert(negociacao.getVolume);
alert(negociacao.getQuantidade);
alert(negociacao.getValor);
alert(negociacao.getData);
