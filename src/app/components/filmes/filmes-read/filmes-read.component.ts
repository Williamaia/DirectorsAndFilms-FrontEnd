import { FilmesServices } from './../filmes.service';
import { Component, OnInit } from '@angular/core';
import { Filmes } from '../filmes.model';

@Component({
  selector: 'app-filmes-read',
  templateUrl: './filmes-read.component.html',
  styleUrls: ['./filmes-read.component.css']
})
export class FilmesReadComponent implements OnInit {
  filmes : Filmes[] = []
  displayedColumns = ['id', 'title', 'hank']
  p

  constructor(private filmesServices: FilmesServices) { }

  ngOnInit(): void {
    this.filmesServices.read().subscribe(filmes => {
      this.filmes = filmes
      console.log(filmes)
    })  
  }

}
