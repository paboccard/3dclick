import { Component } from '@angular/core';

import { Keyboard } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchQuery: string = '';
  Category: string[];
  items: string[];
  Keyboard: Keyboard;

  constructor(keyboard: Keyboard) {
    this.initializeCategory();
    this.initializeItems();
    this.Keyboard = keyboard;
  }

  initializeCategory() {
    this.Category = [
      'Sport',
      'Modélisme',
      'Déco',
      'Modélisme'
    ];
  }

  initializeItems() {
    this.items = [
      'Maison monopoly rouge',
      'Maison monopoly verte',
      'Maison monopoly starwars'
    ];
  } 

  onSearch(event) {
    this.Keyboard.close();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}