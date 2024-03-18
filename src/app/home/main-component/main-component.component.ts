import { Component, OnInit, effect, inject } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie, MovieApiResponse } from '../../services/models/movie.model';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent implements OnInit {
  tmdbService = inject(TmdbService);
  trendMovie: Movie | undefined;

  constructor() { 
    effect(() => {
      const trendMovieResponse: MovieApiResponse | undefined = this.tmdbService.fetchTrendMovie().value;
    })
  }

  ngOnInit(): void {
    this.fetchMovieTrends();
  }

fetchMovieTrends(): void {
  this.tmdbService.getTrends();
}
}
