import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

	public isDisabled:boolean=true;
	public edited:boolean;
	public onglet:string;

  constructor(public navCtrl: NavController) {
  	this.isDisabled = true;
  	this.edited = false;
  	this.onglet = "info";
  }

  editeInformation(){
  	this.isDisabled = false;
  	this.edited = true;
  }

  cancelChanges(){
  	this.isDisabled = true;
  	this.edited = false;
  }

  changeLabel(){
  	this.editeInformation();
  }


}
