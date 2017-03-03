import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any;
  errorMessage: string;
  pistas: any[];

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this._activatedRouter.params
      .map(params => params['id'])
      .subscribe(id => {

        this._spotifyService.getArtista(id).subscribe(
          response => {
            this.artista = response;
            //console.log(this.artista);
          },
          error => {
            this.errorMessage = <any>error;
            if (this.errorMessage != null) {
              console.log(this.errorMessage);
              alert("Error en la peticion");
            }
          }
        );

        this._spotifyService.getTop(id).subscribe(
          response => {
            this.pistas = response;
            console.log(this.pistas);
          },
          error => {
            this.errorMessage = <any>error;
            if (this.errorMessage != null) {
              console.log(this.errorMessage);
              alert("Error en la peticion");
            }
          }
        );

      });
  }

}
