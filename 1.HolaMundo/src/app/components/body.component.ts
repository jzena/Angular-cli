import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-body',
    templateUrl: 'body.component.html'
})
export class BodyComponent implements OnInit {
    mostrar: boolean = true;
    texto: string = "Un gran poder, requiere una gran responsabilidad.";
    autor: string = "Ben parker";

    personajes: string[] = ["spiderman", "benom", "Dr. Octopus"];

    constructor() { }

    ngOnInit() { }
}