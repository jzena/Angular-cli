import { Router,  CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { Auth } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  canActivate() {
    
    if (this.auth.authenticated()) {
      console.log("El Guard paso");
      return true;
    }
    else {
      console.error("Bloqueado por el Guard");
      this.router.navigate(['/home']);
      return false;
    }

  }

}
