import { DiretoresService } from './../diretores.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diretores } from '../diretores.model';

@Component({
  selector: 'app-diretores-create',
  templateUrl: './diretores-create.component.html',
  styleUrls: ['./diretores-create.component.css']
})
export class DiretoresCreateComponent implements OnInit {
  
  diretores: Diretores = {
    name: '',
    rank: null,
    count_movies: null
  }

  constructor(private diretoresServices: DiretoresService,
    private router: Router){ }

  ngOnInit(): void {
    
  }

  createDiretores(): void {
    this.diretoresServices.create(this.diretores).subscribe(()=>{
      this.diretoresServices.showMessage('Diretor criado!')
      this.router.navigate(['diretores'])
    })
    
  }

  cancelDiretores(): void {
    this.router.navigate(['diretores'])
  }

}
