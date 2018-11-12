import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { MovieInterceptorService } from "./service/movie-interceptor.service";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieAllListComponent } from './movie-all-list/movie-all-list.component';

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieAllListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MovieInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
