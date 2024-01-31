import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  //O construtor já cria um novo serviço (ListService) via injecao de dependencia
  constructor(private listService: ListService) {}

  //normalmente esses dados viriam de um banco
  animals: Animal[] = [
    { id: 1, name: 'Turca', type: 'Dog', age: 4 },
    { id: 2, name: 'Tom', type: 'Cat', age: 10 },
    { id: 3, name: 'Frida', type: 'Dog', age: 5 },
    { id: 4, name: 'Bob', type: 'Horse', age: 1 },
  ];

  animalDetails = '';

  //Esse método recebe uma varial do tipo interface Animal
  //retorna void
  showAge(animal: Animal): void {
    //as crases no type/javascript é como interpolation do c# que usamos o $
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
