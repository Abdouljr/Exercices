import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, WritableSignal, signal, computed } from '@angular/core';
import { State } from './models/state.model';
import { MovieApiResponse } from './models/movie.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  http: HttpClient = inject(HttpClient);
  baseUrl: string = 'https://api.themoviedb.org/3';
  private fetchTrendMovie$: WritableSignal<State<MovieApiResponse, HttpErrorResponse>> = signal(State.Builder<MovieApiResponse, HttpErrorResponse>().forInit().build());
  fetchTrendMovie = computed(() => this.fetchTrendMovie$());
  constructor() { }

  getTrends(): void{
    let headers: HttpHeaders = new HttpHeaders().set('Authorization',`Bearer ${environment.TMDB_KEYS}`); 
    // this.http.get<MovieApiResponse>(`${this.baseUrl}/trending/movie/day`, {headers}).subscribe({
    //   next: (data) => {
    //     this.fetchTrendMovie$.set(State.Builder<MovieApiResponse, HttpErrorResponse>().forSuccess(data).build());
    //   },
    //   error: (error) => {
    //     this.fetchTrendMovie$.set(State.Builder<MovieApiResponse, HttpErrorResponse>().forError(error).build());
    //   }
    // })

    this.http.get<MovieApiResponse>(`${this.baseUrl}/trending/movie/day`, {headers}).subscribe({
      next: tmdbResponse => 
        this.fetchTrendMovie$.set(State.Builder<MovieApiResponse, HttpErrorResponse>().forSuccess(tmdbResponse).build()),
      
      error: err =>
        this.fetchTrendMovie$.set(State.Builder<MovieApiResponse, HttpErrorResponse>().forError(err).build())
    })
  }
}
