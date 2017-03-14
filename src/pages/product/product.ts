import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-product',
  templateUrl : 'product.html'
})
export class ProductPage {

	product:any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  	this.product = navParams.data;
  }

}