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
dia:string = "BomDia.jpg";
noite:string = "BoaNoite.jpg";
madrugada:string = "Madrugada.jpg";
tarde:string = "BoaTarde.jpg";

  //Função para alterar a imagem
alterarImagem(){
  if(this.dia === "BomDia.jpg"){
    this.noite = "BoaNoite.jpg";
  }else if(this.noite === "BoaNoite.jpg"){
    this.dia = "BomDia.jpg";
  }else if(this.madrugada === "Madrugada.jpg"){
    this.tarde = "BoaTarde.jpg";
  }else if(this.tarde === "BoaTarde.jpg"){
    this.madrugada = "Madrugada.jpg";
  }
}
}
