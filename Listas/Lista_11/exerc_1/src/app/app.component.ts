import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public comprar(){
    alert('Ir para a página de compras');
  }

  public mesage: string = "Aquarius_Coffee"

  public produtos: Produto[] = new Array<Produto>();

  constructor() {
    this.produtos.push(new Produto("Bolo de murangu","Melhor bolo do mundo",
                                  "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/b1/ac/b5/b1acb5e4-9845-0e4b-e9ed-22a53aa5eec3/source/256x256bb.jpg",
                                  100));

    this.produtos.push(new Produto("Café","Café torrado",
                                  "https://pbs.twimg.com/profile_images/637011771497291776/HBwfD5ot_400x400.jpg",
                                  25));

    this.produtos.push(new Produto("Suco de laranja", "Puro suco da laranja",
                                   "https://padarialider.loji.com.br/storage/uploads/XvG9mfmDbukWCd4rcEM6iSgjJFRvBDbC4cnybRFx.webp",
                                   10));

    this.produtos.push(new Produto("Hamburguer", "O queijinho chega derrete",
                                   "https://image.gobox.app.br/produto/255/t14327.png?v=1",
                                   20));

    this.produtos.push(new Produto("Bolo de chocolate", "Humm, chocolatinho em",
                                   "https://bolonahora.com.br/web/image/product.template/137/image_256/BOLO%20CHOCOLATE%20COM%20NOZES?unique=dcbc04a",
                                   25));

    this.produtos.push(new Produto("Croissant", "Recheio de chocolate",
                                   "https://padariavianney.com.br/web/image/product.template/4960/image_256/%5B94230%5D%20Croissant%20de%20Chocolate%20%20?unique=7166dac",
                                   5));

  }

  public detalhes(): void {
    alert('erro')

  }
}
