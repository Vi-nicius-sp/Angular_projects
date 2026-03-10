import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-ngfor-componente',
  imports: [CommonModule],
  templateUrl: './ngfor-componente.html',
  styleUrl: './ngfor-componente.css',
})
export class NgforComponente {

  //Vetor de nomes
  nome: string[] = ['Ariane', 'Bruna', 'Caio', 'Denis', 'Pricila']
  superHerois: string[] = ['Batman', 'Superman', 'Mulher Maravilha', 'Flash', 'Lanterna Verde']
  vilao: string[] = ['Coringa', 'Lex Luthor', 'Cheetah', 'Capitão Frio', 'Sinestro']
}
