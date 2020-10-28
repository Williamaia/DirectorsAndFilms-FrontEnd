import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes-crud',
  templateUrl: './filmes-crud.component.html',
  styleUrls: ['./filmes-crud.component.css']
})
export class FilmesCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDiretoresCreate(): void {
    this.router.navigate(['/filmes/create'])
  }
}
