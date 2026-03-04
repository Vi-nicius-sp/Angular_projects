import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-bindings-componente',
  imports: [],
  templateUrl: './bindings-componente.html',
  styleUrl: './bindings-componente.css',
})
export class BindingsComponente {

  // Varialvel de Imagem
imagem:string = "BomDia.jpg";

  //Função para alterar a imagem
alterarImagem(){
  if(this.imagem === "BomDia.jpg"){
    this.imagem = "BoaTarde.jpg";
  }
  else if(this.imagem === "BoaTarde.jpg"){
    this.imagem = 'BoaNoites.jpg';
  }
  else if(this.imagem === "BoaNoites.jpg"){
    this.imagem = 'Madrugada.jpg';
  }
  else{
    this.imagem = 'BomDia.jpg';
  }
}
}
