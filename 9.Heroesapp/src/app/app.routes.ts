import { HeroeEditComponent } from './components/heroes/heroe-edit.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeEditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);