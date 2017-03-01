import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from './../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  providers: [HeroesService]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.heroe = this._heroeService.getHeroe(id);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
