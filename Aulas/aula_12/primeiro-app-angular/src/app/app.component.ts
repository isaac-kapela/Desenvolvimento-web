import { Component } from '@angular/core';
import Pessoa from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public listaPessoas: Pessoa[] = new Array<Pessoa>();

  constructor() {
    this.listaPessoas.push(new Pessoa("Julia", 23, "DEV Full Stack"));
    this.listaPessoas.push(new Pessoa("Fernanda", 22, "Dev Java"));
    this.listaPessoas.push(new Pessoa("João", 42, "DEV Front-end"));
    this.listaPessoas.push(new Pessoa("Pedro", 30, "Dev Python"));
    this.listaPessoas.push(new Pessoa("Joelma", 27, "Devops Engineer"));
    this.listaPessoas.push(new Pessoa("Jeiza", 21, "Dev Python"));
  }

  public detalhes(): void {
    alert('erro')
  }
}
