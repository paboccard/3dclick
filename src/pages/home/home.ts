import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';
//import { starter } from 'ionic-ion-horizontal-scroll-cards';

@Component({
  selector: 'page-home',
  templateUrl : 'home.html'
})

export class HomePage {

	ctrl : NavController;
	products : any;

  constructor(public navCtrl: NavController) {
  	this.ctrl = navCtrl;
  	this.products = [
			{
				categorie : "En tête d'impression",
				items :
				[
					{
						title: "GoT",
						prix: "2,45",
						description: "Figurine du dragon",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Yugi",
						prix: "13",
						description: "Figurine de Yugi-Ho",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Mike",
						prix: "14,32",
						description: "Modelisme d'avion",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Chaise",
						prix: "32,25",
						description: "Chaise parfaite pour une salle à manger",
						imgSrc : "img/img1.jpeg"
					}
				]
			},
			{
				categorie : "Suggestion",
				items :
				[
					{
						title: "GoT",
						prix: "2,45",
						description: "Figurine du dragon",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Yugi",
						prix: "13",
						description: "Figurine de Yugi-Ho",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Mike",
						prix: "14,32",
						description: "Modelisme d'avion",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Chaise",
						prix: "32,25",
						description: "Chaise parfaite pour une salle à manger",
						imgSrc : "img/img1.jpeg"
					}
				]
			},
			{
				categorie : "Promotion",
				items :
				[
					{
						title: "GoT",
						prix: "2,45",
						description: "Figurine du dragon",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Yugi",
						prix: "13",
						description: "Figurine de Yugi-Ho",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Mike",
						prix: "14,32",
						description: "Modelisme d'avion",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Chaise",
						prix: "32,25",
						description: "Chaise parfaite pour une salle à manger",
						imgSrc : "img/img1.jpeg"
					}
				]
			},
			{
				categorie : "Nouveautés",
				items :
				[
					{
						title: "GoT",
						prix: "2,45",
						description: "Figurine du dragon",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Yugi",
						prix: "13",
						description: "Figurine de Yugi-Ho",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Mike",
						prix: "14,32",
						description: "Modelisme d'avion",
						imgSrc : "img/img1.jpeg"
					},
					{
						title: "Chaise",
						prix: "32,25",
						description: "Chaise parfaite pour une salle à manger",
						imgSrc : "img/img1.jpeg"
					}
				]
			}
		]
  }

  goToProduct(product){
  	this.ctrl.push(ProductPage, product);
  }

}
