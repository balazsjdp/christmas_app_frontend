import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = "https://christmasdrawbackend.azurewebsites.net";

  #http : HttpClient = inject(HttpClient);
  

  constructor() {}

  getNames(): Observable<any> {
    // Make the GET request using the get method of HttpClient
    return this.#http.get<any>(this.API_URL + "/api/names");
  }

  getJoke() : Observable<any> {
    return this.#http.get<any>("https://v2.jokeapi.dev/joke/christmas")
  }

  drawName(user : string) : Observable<any> {
    return this.#http.get<any>(this.API_URL + "/api/draw?user=" + user, { responseType: 'text' as 'json'});
  }

  reset() : Observable<any> {
    return this.#http.post<any>(this.API_URL + "/api/reset", {});
  }

}
