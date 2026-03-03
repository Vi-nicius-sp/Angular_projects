import { Component, signal } from '@angular/core';
import { BindingsComponente } from "./bindings-componente/bindings-componente";

@Component({
  selector: 'app-root',
  imports: [ BindingsComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('segundo_projeto');
}
