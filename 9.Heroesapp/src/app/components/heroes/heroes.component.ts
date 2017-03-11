import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroe.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})

export class HeroesComponent implements OnInit {

  //heroes: Heroe;
  heroes: any[] = [];
  loading: boolean = true;

  constructor(private _heroesService: HeroesService) {

    this._heroesService.getHeroes()
      .subscribe(data => {
        this.loading = false
        this.heroes = data;

        // for (let key$ in data) {
        //   let h = data[key$];
        //   h.key$ = key$;
        //   this.heroes.push(data[key$]);
        // }
        // console.log(this.heroes);
      });
  }

  ngOnInit() {
  }

  borraHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$)
      .subscribe(data => {
        if (data) {
          console.error(data);
        }
        else {
          // todo bien
          delete this.heroes[key$];
        }

      });

  }
}
