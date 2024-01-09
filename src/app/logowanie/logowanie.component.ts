import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css'],
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: '',
  };
  
  showError = false;

  constructor(private authService: AuthService, private router: Router) {}

  logowanie() {
    // Tutaj można zaimplementować logikę logowania
    console.log(this.formData.username);
    console.log(this.formData.password);
    if (this.formData.username === 'exampleUser' && this.formData.password === 'validPassword') {
      console.log('Zalogowano pomyślnie');
      this.showError = false;
    } else {
      console.log('Błąd logowania. Sprawdź dane.');
      this.showError = true;
    }
  }

  login() {
    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}
