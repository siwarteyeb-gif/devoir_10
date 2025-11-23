import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
@Component({
  selector: 'app-logout',
  template: '<p>Déconnexion en cours...</p>'
})
export class Logout {

  constructor(private authService:Auth, private router: Router) { }

  ngOnInit(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}