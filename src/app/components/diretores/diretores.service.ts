import { Diretores } from './diretores.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DiretoresService {

  baseUrl = "http://localhost:3000/directors"

  constructor( private snackBar : MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(diretores: Diretores): Observable<Diretores> {
    return this.http.post<Diretores>(this.baseUrl, diretores)
  }

  read(): Observable<Diretores[]> {
    return this.http.get<Diretores[]>(this.baseUrl)
  }
}
