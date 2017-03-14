import { Component } from '@angular/core';

import { Keyboard, NavController, NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchQuery: string = '';
  Category: string[];
  items: string[];
  Keyboard: Keyboard;
  item;
  cats = [];
  inSearch:boolean;

  constructor(keyboard: Keyboard, params: NavParams,public nav: NavController) {
    this.initializeCategory();
    this.initializeItems();
    this.Keyboard = keyboard;
    this.item = params.data.item;
    this.inSearch = false;
  }

  initializeCategory() {
    this.cats = [
      {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'HTML5',
        'icon': 'html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'JavaScript',
        'icon': 'javascript',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Sass',
        'icon': 'sass',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': 'NodeJS',
        'icon': 'nodejs',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Python',
        'icon': 'python',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': 'Markdown',
        'icon': 'markdown',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      },
      {
        'title': 'Tux',
        'icon': 'tux',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]
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
    this.inSearch = true;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else {
      this.inSearch = false;
    }
  }

  openNavDetailsPage(cat) {
    this.nav.push(NavigationDetailsPage, { cat: cat });
  }

}

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>
      {{ cat.title }}
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <ion-icon [name]="'logo-' + cat.icon" [ngStyle]="{'color': cat.color}"></ion-icon>
  {{ cat.description }}
</ion-content>
`
})

export class NavigationDetailsPage {
  cat;

  constructor(params: NavParams) {
    this.cat = params.data.cat;
  }
}