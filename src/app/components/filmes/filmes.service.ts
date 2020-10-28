import { Filmes } from './filmes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesServices {

  baseUrl = "http://localhost:3000/movies"

  constructor( private snackBar : MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(filmes: Filmes): Observable<Filmes> {
    return this.http.post<Filmes>(this.baseUrl, filmes)
  }

  read(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(this.baseUrl)
  }
}
