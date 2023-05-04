import { Component } from '@angular/core';

@Component({
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.css']
})
export class PlusButtonComponent {
  contador: number = 0;

  increaseNumber(): void {
    this.contador++;
  }
  decreaseNumber(): void {
    this.contador--;
  }

}
