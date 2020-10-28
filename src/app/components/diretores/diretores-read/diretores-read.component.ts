import { DiretoresService } from './../diretores.service';
import { Component, OnInit } from '@angular/core';
import { Diretores } from '../diretores.model';

@Component({
  selector: 'app-diretores-read',
  templateUrl: './diretores-read.component.html',
  styleUrls: ['./diretores-read.component.css']
})
export class DiretoresReadComponent implements OnInit {
  diretores: Diretores[]
  displayedColumns = ['id', 'name', 'rank', 'count_movies']

  constructor(private diretoresService: DiretoresService) { }

  ngOnInit(): void {
    this.diretoresService.read().subscribe(diretores =>{
    this.diretores = diretores
    console.log(diretores)
    })
  }
}
