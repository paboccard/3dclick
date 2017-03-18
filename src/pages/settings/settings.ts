import { Component } from '@angular/core';

import { NavController, MenuController, App } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import firebase from 'firebase';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

	public isDisabled:boolean=true;
	public edited:boolean;
	public onglet:string;
  public afService : any;

  public profilForm;

  // We'll use this to create a database reference to the userProfile node.
  public profileData: firebase.database.Reference;
  public userProfile : any;
  public profils : any;

  // We'll use this to create an auth reference to the logged in user.
  public currentUser: firebase.User;

  constructor(public navCtrl: NavController, app: App, menu: MenuController, af: AngularFire, public formBuilder: FormBuilder) {
    

    this.afService = af;

    this.currentUser = firebase.auth().currentUser;
    this.profileData = firebase.database().ref('/userData');

  	menu.enable(true);
  	this.isDisabled = true;
  	this.edited = false;
  	this.onglet = "info";

    this.profilForm = formBuilder.group({
      nom : [''],
      prenom : [''],
      dateNaissance : [''],
      adresse : ['']
    })

    this.getUserProfile().on('value', (snapshot) => {
      this.userProfile = snapshot.val();
    });
  }

  getUserProfile(): firebase.database.Reference {
    return this.profileData.child(this.currentUser.uid);
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

  validChanges(){
    this.profils = this.afService.database.list('/userData');
    this.profils.update(this.currentUser.uid, {
      nom : this.profilForm.value.nom,
      prenom : this.profilForm.value.prenom,
      dateNaissance : this.profilForm.value.dateNaissance,
      adresse : this.profilForm.value.adresse
    });
    this.cancelChanges();
  }

}

