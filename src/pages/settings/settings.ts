import { Component } from '@angular/core';

import { NavController, MenuController, App } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

	public isDisabled:boolean=true;
	public edited:boolean;
	public onglet:string;

  constructor(public navCtrl: NavController, app: App, menu: MenuController) {
  	menu.enable(true);
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

