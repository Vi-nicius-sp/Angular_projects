import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-ngswitch-componente',
  imports: [CommonModule],
  templateUrl: './ngswitch-componente.html',
  styleUrl: './ngswitch-componente.css',
})
export class NgswitchComponente {

  //Variável contendo uma linguagem de "programação"
  
  linguagem: string = 'JS';

}
