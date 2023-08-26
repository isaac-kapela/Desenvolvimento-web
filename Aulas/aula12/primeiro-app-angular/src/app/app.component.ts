import { Component } from '@angular/core';
import Pessoa from './models/funcionario';
import Analista from './models/analista';
import Gestor from './models/gestor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public analistas: Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Maria", 192076, "Gestora de TI", []);

  constructor() {
    this.analistas.push(new Analista("Thompson", 121314, "Analista de infraestrutura", this.gestor.nome));
    this.analistas.push(new Analista("Amanda", 131517, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("John", 131518, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Elizabete", 131519, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Marcia", 131516, "Analista de cloud", this.gestor.nome));
    this.analistas.push(new Analista("Robert", 131515, "Analista de cyber-secutiry", this.gestor.nome));
    this.analistas.push(new Analista("Albert", 131514, "Analista de negocios", this.gestor.nome));
    this.analistas.push(new Analista("Ana", 131513, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Willian", 131512, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Alfred", 131511, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Junior", 131521, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Alessandra", 131523, "Analista de sistemas", this.gestor.nome));

    this.gestor.nomeSubordinados = this.analistas.map(analista => analista.nome);
  }
}
