import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-segundo-componente',
  imports: [CommonModule], //CommonModule é necessário para usar diretivas como *ngIf, porque é uma biblioteca que contém as comandos comuns do Angular.
  templateUrl: './segundo-componente.html',
  styleUrl: './segundo-componente.css',
})
export class SegundoComponente {
  
  //variavel exibir
exibir: boolean = true;

  //função para exibir ou ocultar o quadrado
  acao() {
    if(this.exibir === true){
      this.exibir = false;
    } else{
      this.exibir = true;
    }
  }
}
