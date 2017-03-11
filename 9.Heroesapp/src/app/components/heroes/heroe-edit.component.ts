import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from './../../interfaces/heroe.interface';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styles: []
})
export class HeroeEditComponent implements OnInit {

  private heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  }

  nuevo: boolean = false;
  id: string;

  constructor(
    private _heroeService: HeroesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== "nuevo") {
        this._heroeService.getHeroe(this.id)
          .subscribe(data => this.heroe = data);
      }
    });
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);

    if (this.id == "nuevo") {
      //insertando
      this._heroeService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          this.router.navigate(['/heroe', data.name]);
        },
        error => console.error(error)
        );
    } else {
      //actualizando
      this._heroeService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => {
          console.log(data);

        },
        error => console.error(error)
        );
    }

  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa:"Marvel"
    });
  }

}
