import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
//import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HttpReqApiComponent } from './components/http-req-api/http-req-api.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent }, //rota barra http://localhost:4200/
  { path: 'list', component: HttpReqApiComponent }, //rota list http://localhost:4200/list
  { path: 'list/:id', component: ItemDetailComponent }, //rota list http://localhost:4200/list/id
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/**
 * Este arquivo é parte do sistema de roteamento de um aplicativo Angular.
 * Ele define as rotas para diferentes componentes e configura o módulo de roteamento.
 *
 * Imports:
 * - NgModule: Decorator usado para definir um módulo Angular.
 * - RouterModule, Routes: Funcionalidades do Angular Router para definir e trabalhar com rotas.
 * - FirstComponentComponent, ListRenderComponent: Componentes personalizados que serão renderizados dependendo da rota acessada.
 *
 * Constante `routes`:
 * - Define um array de objetos, onde cada objeto é uma rota específica.
 * - Cada rota associa um caminho de URL a um componente.
 *   - `{ path: '', component: FirstComponentComponent }`: Define a rota padrão do aplicativo (por exemplo, http://localhost:4200/).
 *     Quando o usuário acessa a raiz do site, o `FirstComponentComponent` é renderizado.
 *   - `{ path: 'list', component: ListRenderComponent }`: Define a rota 'list' (por exemplo, http://localhost:4200/list).
 *     Quando o usuário acessa '/list', o `ListRenderComponent` é renderizado.
 *
 * @NgModule:
 * - O decorator `NgModule` define um módulo Angular.
 * - `declarations`: Array vazio, pois as declarações de componentes são geralmente feitas em outros módulos.
 * - `imports`: Importa o RouterModule configurado com as rotas definidas acima, o que ativa o sistema de roteamento.
 * - `exports`: Exporta o RouterModule para que as funcionalidades de roteamento estejam disponíveis em outros módulos que importam o `AppRoutingModule`.
 *
 * `AppRoutingModule`:
 * - A classe `AppRoutingModule` é um módulo de configuração de roteamento padrão para o aplicativo Angular.
 * - Ele encapsula todas as configurações relacionadas ao roteamento e é importado no módulo raiz (geralmente `AppModule`) para ser utilizado em todo o aplicativo.
 */
