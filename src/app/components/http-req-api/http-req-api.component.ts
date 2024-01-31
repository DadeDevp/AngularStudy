import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-http-req-api',
  templateUrl: './http-req-api.component.html',
  styleUrls: ['./http-req-api.component.css'],
})
export class HttpReqApiComponent {
  animals: Animal[] = [];

  //O construtor já cria um novo serviço (ListService) via injecao de dependencia
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
  animalDetails = '';
  //Esse método recebe uma variavel do tipo interface Animal
  //retorna void
  showAge(animal: Animal): void {
    //as crases no type/javascript é como interpolation do c# que usamos o $
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    //remove do frontend
    this.animals = this.animals.filter((a) => animal.name !== a.name);

    //remove do banco de dados atraves do service
    this.listService.remove(animal.id).subscribe();
  }
}

/**
 * Este método, getAnimals, é responsável por obter uma lista de animais de um serviço e atribuí-la à propriedade 'animals' do componente.
 *
 * 1. `listService.getAll()`:
 *    - É chamado o método `getAll()` do serviço `listService`. Este método é presumivelmente uma operação HTTP que retorna um Observable contendo uma lista de animais.
 *
 * 2. `subscribe((animals) => (this.animals = animals))`:
 *    - Utiliza-se o método `subscribe` para se inscrever e ouvir as mudanças no Observable retornado por `getAll()`.
 *    - Quando os dados (lista de animais) são recebidos assincronamente, a função de seta `(animals) => (this.animals = animals)` é executada.
 *    - Dentro desta função, `this.animals` (uma propriedade da classe/componente) é atribuída à lista de animais recebida (`animals`).
 *    - Isso efetivamente atualiza a propriedade 'animals' do componente com os dados recebidos do serviço.
 *
 * 3. `void`:
 *    - A palavra-chave `void` indica que este método não retorna um valor.
 *
 * Resumindo, `getAnimals()` é um método que faz uma chamada de serviço para obter uma lista de animais, e, uma vez que os dados são recebidos, eles são atribuídos à propriedade `animals` do componente para uso posterior, como exibição no template do componente.
 */
