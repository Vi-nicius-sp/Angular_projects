import { Component, signal } from '@angular/core';
import { NgforComponente } from "./ngfor-componente/ngfor-componente";
//import { NgswitchComponente } from "./ngswitch-componente/ngswitch-componente";
import { StyleComponente } from "./style-componente/style-componente";

@Component({
  selector: 'app-root',
  imports: [StyleComponente ], //NgswitchComponente , NgforComponente 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto03');
}
