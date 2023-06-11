import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public mensagem: string = 'ola angular!';
public nome: string = 'fulano';
public idade: number = 20;
public profissao: string = 'Dev javascript';

public listaAnimais = [{id: "64793aab0a2a051996e0b24", nome: 'dovahkiin', raca:"SRD", peso: 4},
                      {id: "6485bd7cdfd0cc79a0f5d3d7", nome: 'penelope', raca:"SRD", peso: 5},
                      {id: "6485bd7cdfd0cc79a0f5d3d7", nome: 'marrie', raca:"SRD", peso: 5},
                      {id: "6485bd7cdfd0cc79a0f5d3d7",nome: 'frajola', raca:"SRD", peso: 25},
                     {id: "6485bd7cdfd0cc79a0f5d3d7",nome: 'cindy', raca:"SRD", peso: 25},];

}
