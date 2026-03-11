import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgforComponente } from '../ngfor-componente/ngfor-componente';

@Component({
  standalone: true,
  selector: 'app-style-componente',
  imports: [CommonModule],
  templateUrl: './style-componente.html',
  styleUrl: './style-componente.css',
})
export class StyleComponente {

  //Variável Booleana
  condicao: boolean = true;

  //Lista de aprovados e reprovados
  lista: string[] = ['Aprovado', 'Reprovado', 'Reprovado', 'Aprovado'];

}
