import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})
export class JokeComponent implements OnInit {
  #apiService : ApiService = inject(ApiService);
  jokeInterval : any;

  setup : string = '';
  delivery : string = '';


  ngOnInit(): void {
    this.jokeInterval = setInterval(() => {
      this.#apiService.getJoke()
      .subscribe((joke) => {
        this.setup = joke.setup;
        this.delivery = joke.delivery;
      })
    }, 5000)
  }



}
