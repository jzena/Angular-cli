import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from './../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from './../../app/services/lista-deseos.service';


@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {

    nombreLista: string = "";
    nombreItem: string = "";
    items: ListaItem[] = [];

    constructor(
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        private _listaDeseosService: ListaDeseosService
    ) { }

    ngOnInit() { }

    agregar() {
        if (this.nombreItem.length == 0) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push(item);
        this.nombreItem = "";
    }

    borrarItem(idx: number) {
        this.items.splice(idx, 1);
    }

    guardarLista() {
        if (this.nombreLista.length == 0) {
            let alert = this.alertCtrl.create({
                title: 'Nombre de lista',
                subTitle: 'el nombre de la lista es necesario!',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        this._listaDeseosService.listas.push(lista);
        this.navCtrl.pop();
    }
}