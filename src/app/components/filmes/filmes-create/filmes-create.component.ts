import { FilmesServices } from './../filmes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filmes } from '../filmes.model';

@Component({
  selector: 'app-filmes-create',
  templateUrl: './filmes-create.component.html',
  styleUrls: ['./filmes-create.component.css']
})
export class FilmesCreateComponent implements OnInit {

  filmes: Filmes = {
    title: '',
    hank: null
  }

  constructor(private filmesServices: FilmesServices,
    private router: Router) { }

  ngOnInit(): void {
  }

  createFilmes(): void {
    this.filmesServices.create(this.filmes).subscribe(()=>{
      this.filmesServices.showMessage('Filme criado!')
      this.router.navigate(['filmes'])
    })
  }

  cancelFilmes(): void {
    this.router.navigate(['filmes'])
  }

}
