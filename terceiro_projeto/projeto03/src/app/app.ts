import { Component, signal } from '@angular/core';
import { NgforComponente } from "./ngfor-componente/ngfor-componente";

@Component({
  selector: 'app-root',
  imports: [NgforComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto03');
}
