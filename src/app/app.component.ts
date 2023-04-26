import { Component } from '@angular/core';
import { Pokedex } from './pokedex';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokedex_Angular_facul';

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.nextPokemon();
  }

  nextPokemon() {
    this.pokedexService.getPokemon(this.id).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.getImage();
      },
    });
  }

  pokemon: Pokedex = {} as Pokedex;
  image: string = '001';
  id: number = 1;
  serve: PokedexService = {} as PokedexService;

  getImage() {
    try {
      if (this.pokemon.id < 100) {
        if (this.pokemon.id < 10) this.image = '00' + this.pokemon.id;
        else this.image = '0' + this.pokemon.id;
      } else this.image = this.pokemon.id.toString();
    } catch (e) {
      console.log('Erro: ' + e);
    }
  }

  onclick(change: string) {
    if (this.id === 1 && change === 'prev') {
      this.id = 1008;
    } else if (this.id === 1008 && change === 'prox') {
      this.id = 1;
    } else change === 'prox' ? this.id++ : this.id--;

    this.nextPokemon();
  }

  getColor(type: string) {
    let color;

    if (type === 'grass') color = '#9BCC50';
    if (type === 'poison') color = '#B97FC9';
    if (type === 'bug') color = '#729F3F';
    if (type === 'psychic') color = '#F366B9';
    if (type === 'flying') color = '#BDB9B8';
    if (type === 'fire') color = '#FD7D24';
    if (type === 'ghost') color = '#7B62A3';
    if (type === 'dark') color = '#707070';
    if (type === 'water') color = '#4592C3';
    if (type === 'ice') color = '#50C3E6';
    if (type === 'normal') color = '#A4ACAF';
    if (type === 'fairy') color = '#FDB9E9';
    if (type === 'fighting') color = '#D56723';
    if (type === 'rock') color = '#A38C21';
    if (type === 'ground') color = '#F7DE3F';
    if (type === 'steel') color = '#9EB7B8';
    if (type === 'dragon') color = '#F16E57';
    if (type === 'electric') color = '#EED535';

    return color;
  }
}
