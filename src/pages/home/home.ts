import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { AuthService } from '../../providers/auth-service';

import firebase from 'firebase';
import { LoginPage } from '../login/login';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
//import { starter } from 'ionic-ion-horizontal-scroll-cards';

@Component({
  selector: 'page-home',
  templateUrl : 'home.html'
})

export class HomePage {

	ctrl : NavController;
	products : any;
	theProducts: FirebaseListObservable<any>;
	theCategories: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFire, public authService: AuthService) {

  	firebase.auth().onAuthStateChanged(function(user) {
	  if (!user) {
	    navCtrl.setRoot(LoginPage);
	  }
	});

  	this.ctrl = navCtrl;
  	this.theCategories = af.database.list('/categories');
  	this.theProducts = af.database.list('/products');
  	
  }

  goToProduct(product){
  	this.ctrl.push(ProductPage, product);
  }

  logout() {
	  this.authService.doLogout();
	}

  createProducts(af : AngularFire){
  	this.theProducts = af.database.list('/products');
  	this.theProducts.push({
		title: "GoT",
		prix: "2,45",
		description: "Figurine du dragon",
		imgSrc : "img/img1.jpeg"
  	});
  	this.theProducts.push({
		title: "Yugi",
		prix: "13",
		description: "Figurine de Yugi-Ho",
		imgSrc : "img/img1.jpeg"
  	});
  	this.theProducts.push({
		title: "Mike",
		prix: "14,32",
		description: "Modelisme d'avion",
		imgSrc : "img/img1.jpeg"
  	});
  	this.theProducts.push({
		title: "Chaise",
		prix: "32,25",
		description: "Chaise parfaite pour une salle à manger",
		imgSrc : "img/img1.jpeg"
  	});
  }

  createCategories(af: AngularFire){
  	this.theCategories = af.database.list('/categories');
  	this.theCategories.push({
			categorie : "En tête d'impression"
	});
	this.theCategories.push({
			categorie : "Nouveautés"
	});
	this.theCategories.push({
			categorie : "Promotion"
	});
	this.theCategories.push({
			categorie : "Suggestion"
	}); 
  }

}
