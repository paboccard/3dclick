import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CartPage } from '../pages/cart/cart';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';
import { SendPage } from '../pages/send/send';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CartPage,
    HomePage,
    AccountPage,
    SendPage,
    TabsPage
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
    AccountPage,
    SendPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
