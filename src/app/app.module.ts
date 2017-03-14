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
import { ProductPage } from '../pages/product/product';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetpwdPage } from '../pages/resetpwd/resetpwd';

// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthService } from '../providers/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyCC91KCGuqRLddIq39J2WH6L0AZQHy1VHw",
  authDomain: "dclick-33a50.firebaseapp.com",
  databaseURL: "https://dclick-33a50.firebaseio.com",
  storageBucket: "dclick-33a50.appspot.com",
  messagingSenderId: "903964503324"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

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
    ProductPage,
    LoginPage,
    RegisterPage,
    ResetpwdPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
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
    ProductPage,
    LoginPage,
    RegisterPage,
    ResetpwdPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthService]
})
export class AppModule {}
