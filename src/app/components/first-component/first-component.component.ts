import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  Pessoa = {
    nome: 'Matheus',
    idade: 20,
    profissao: 'Dev Front-End',
  }
}
