import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Servicios
import { ListaDeseosService } from './services/lista-deseos.service';

import { TabsPage } from '../pages/tabs/tabs';

// Componentes
import { PendientesComponent } from './../pages/pendientes/pendientes.component';
import { TerminadosComponent } from './../pages/terminados/terminados.component';
import { AgregarComponent } from './../pages/agregar/agregar.component';
import { DetalleComponent } from './../pages/detalle/detalle.component';

// Pipes
import { PlaceHolderPipe } from './pipes/placeholder.pipe';


@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  providers: [
    ListaDeseosService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
