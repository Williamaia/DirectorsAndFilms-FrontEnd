import { FilmesCreateComponent } from './components/filmes/filmes-create/filmes-create.component';
import { DiretoresCreateComponent } from './components/diretores/diretores-create/diretores-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { DiretoresCrudComponent } from "./views/diretores-crud/diretores-crud.component";
import { FilmesCrudComponent } from "./views/filmes-crud/filmes-crud.component";


const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "diretores",
  component: DiretoresCrudComponent
}, {
  path: "filmes",
  component: FilmesCrudComponent
}, {
  path: "diretores/create",
  component: DiretoresCreateComponent
}, {
  path: "filmes/create",
  component: FilmesCreateComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})

export class AppRoutingModule { }
