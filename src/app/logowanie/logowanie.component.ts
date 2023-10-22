import { Component } from '@angular/core';

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
}
