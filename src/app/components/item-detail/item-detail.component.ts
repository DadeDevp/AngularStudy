import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent {
  //Animal pode vir ou nao, por isso a "?"
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  getAnimal() {
    //Extrair a propriedade id e converte para number
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}

/* 
A linha de código const id = Number(this.route.snapshot.paramMap.get('id')); no Angular faz o seguinte:

Acessa o Objeto route: this.route refere-se ao serviço ActivatedRoute injetado no componente. 
Este serviço contém informações sobre a rota ativa, incluindo parâmetros, dados da rota, etc.

Obtém o Snapshot da Rota Atual: this.route.snapshot fornece o estado atual da rota ativa. 
O snapshot é uma imagem do estado da rota no momento em que foi acessado.

Acessa o paramMap do Snapshot: paramMap é um dicionário de parâmetros de rota. 
Cada chave no paramMap é o nome de um parâmetro definido na rota, e o valor é o valor do parâmetro.

Obtém o Valor do Parâmetro 'id': .get('id') acessa o valor do parâmetro de rota chamado 'id'. 
Em uma rota definida como /somepath/:id, por exemplo, se a URL for /somepath/42, o valor de id será '42' (como uma string).

Converte o Valor para um Número: Number(...) converte o valor obtido do paramMap em um número. Isso é necessário porque os valores dos parâmetros de rota são sempre strings, e muitas vezes queremos trabalhar com eles como números (especialmente no caso de identificadores como IDs).
*/
