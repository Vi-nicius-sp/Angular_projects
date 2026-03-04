import { Component, signal } from '@angular/core';
import { BindingsComponente } from "./bindings-componente/bindings-componente";
import { SegundoComponente } from "./segundo-componente/segundo-componente";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ SegundoComponente], //BindingsComponente
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('segundo_projeto');
}
