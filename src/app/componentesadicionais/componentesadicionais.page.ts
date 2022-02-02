import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentesadicionais',
  templateUrl: './componentesadicionais.page.html',
  styleUrls: ['./componentesadicionais.page.scss'],
})
export class ComponentesadicionaisPage {
  
  public botoes = [
    { posicao: 'top'    , icone: 'logo-vimeo'     },
    { posicao: 'bottom' , icone: 'logo-facebook'  },
    { posicao: 'start'  , icone: 'logo-instagram' },
    { posicao: 'end'    , icone: 'logo-twitter'   }
  ]

  public value      : number;
  public iluminacao : number;

  constructor() { 
    this.initeProgressBar();
  }

  /* métodos utilizados para demonstrar a barra de progresso */
  initeProgressBar() {
    for (let index = 0; index <= 100; index++) {
      this.addPbar(index);
    }
  }

  addPbar(i) {
    setTimeout(() => {
      let apc = (i / 100)
      this.value = apc;
    }, 30 * i);
  }
  /* --- */

  printIluminacao(){
    console.log(this.iluminacao);
  }
}
