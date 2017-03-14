import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CartPage } from '../pages/cart/cart';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { SendPage } from '../pages/send/send';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalContentPage } from '../pages/send/send';
import { DetailPage } from '../pages/detail/detail';
import { NavigationDetailsPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CartPage,
    HomePage,
    SearchPage,
    SendPage,
    TabsPage,
    ModalContentPage,
    DetailPage,
    NavigationDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CartPage,
    HomePage,
    SearchPage,
    SendPage,
    TabsPage,
    ModalContentPage,
    DetailPage,
    NavigationDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
