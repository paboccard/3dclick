import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchQuery: string = '';
  Category: string[];
  items: string[];

  constructor() {
    this.initializeCategory();
    this.initializeItems();
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