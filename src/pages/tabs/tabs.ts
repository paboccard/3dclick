import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { SendPage } from '../send/send';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CartPage;
  tab3Root: any = SearchPage;
  tab4Root: any = SendPage;
  tab5Root: any = SettingsPage;

  constructor() {

  }
}
