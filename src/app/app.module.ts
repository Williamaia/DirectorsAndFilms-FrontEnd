import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './views/home/home.component';
import { DiretoresCrudComponent } from './views/diretores-crud/diretores-crud.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FilmesCrudComponent } from './views/filmes-crud/filmes-crud.component';
import { DiretoresCreateComponent } from './components/diretores/diretores-create/diretores-create.component';
import { MatButtonModule } from '@angular/material/button';
import { FilmesCreateComponent } from './components/filmes/filmes-create/filmes-create.component';
import { HttpClientModule } from '@angular/common/http'

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DiretoresReadComponent } from './components/diretores/diretores-read/diretores-read.component';
import { FilmesReadComponent } from './components/filmes/filmes-read/filmes-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DiretoresCrudComponent,
    FilmesCrudComponent,
    DiretoresCreateComponent,
    FilmesCreateComponent,
    DiretoresReadComponent,
    FilmesReadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    RouterModule, 
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
