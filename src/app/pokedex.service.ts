import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokedex } from './pokedex';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getPokemon(id:number): Observable <Pokedex>{
    return this.http.get<Pokedex>('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}
