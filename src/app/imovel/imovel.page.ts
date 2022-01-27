import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.page.html',
  styleUrls: ['./imovel.page.scss'],
  
})
export class ImovelPage {
  
  public pathImgs = '../../assets/img/';
  
  public imovel = {
    imagens   : [],
    titulo    : '',
    descricao : '',
    valor     : 0.00
  }

  constructor(private route: ActivatedRoute) {
    
    /* recebimento de objetos por parâmetro */
    this.route.queryParams.subscribe(params => {
      this.imovel = params['imovel'];
    });

   }

  /* método utilizado para formatar o valor me R$ */
  formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

}
