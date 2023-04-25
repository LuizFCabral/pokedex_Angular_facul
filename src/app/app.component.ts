import { Component } from '@angular/core';
import { Pokedex } from './pokedex';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex_Angular_facul';

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.nextPokemon();
  }

  nextPokemon(){
    this.pokedexService.getPokemon(this.id).subscribe(
      {
        next : data => {
          this.pokemon = data;
          this.getImage();
        }
      }
    );
  }

  pokemon: Pokedex = {} as Pokedex;
  image: string = "001";
  id: number = 1;
  serve: PokedexService = {} as PokedexService;

  getImage(){
    try{
      if(this.pokemon.id < 100){
        if(this.pokemon.id < 10)
          this.image = "00" + this.pokemon.id;
        else
          this.image = "0" + this.pokemon.id;

      }
      else
        this.image = this.pokemon.id.toString();
    }
    catch(e){
      console.log("Erro: " + e);
    }
  }

  onclick(change: string){
    if(this.id===1 && change==='prev'){
      this.id = 1008;
    }
    else if(this.id===1008 && change==='prox'){
      this.id = 1;
    }
    else
      change==="prox"?this.id++:this.id--;

    this.nextPokemon();


  }

}
