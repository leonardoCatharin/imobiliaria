import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public pathImgs = '../../assets/img/';

  public listaImoveis = [
    {
      imagens   : ['casa1-1.jpg', 'casa1-2.jpg', 'casa1-3.jpg'],
      titulo    : 'Casa à venda em Maringá',
      descricao : 'Casa recém construída com excelente localização',
      valor     : 480000.00
    },
    {
      imagens   : ['casa2-1.jpg', 'casa2-2.jpg'],
      titulo    : 'Casa à venda em Maringá',
      descricao : 'Excelente investimento',
      valor     : 140000.00
    },
    {
      imagens   : ['casa3-1.jpg'],
      titulo    : 'Casa à venda em Mandaguaçu',
      descricao : 'Casa quitada localizada no centro da cidade',
      valor     : 120000.00
    }
  ]

  constructor(private navCtrl: NavController) {}

  /* método utilizado para formatar o valor me R$ */
  formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  /* método utilizado para enviar enviar objeto para a página de detalhes */
  goImovel(imovel) {
    this.navCtrl.navigateForward('imovel', {
      queryParams: { imovel: imovel }
    });
  }

}
