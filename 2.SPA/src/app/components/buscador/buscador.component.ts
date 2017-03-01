import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from './../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      console.log(this.termino);
      this.heroes = this._heroeService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });

  }

}
