import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretores-crud',
  templateUrl: './diretores-crud.component.html',
  styleUrls: ['./diretores-crud.component.css']
})
export class DiretoresCrudComponent implements OnInit {

  constructor(private router : Router) {

  }

  ngOnInit(): void {
  }

  navigateToDiretoresCreate(): void {
    this.router.navigate(['/diretores/create'])
  }
}
