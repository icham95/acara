import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { JasaComponent } from './jasa/jasa.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorService } from './vendor/vendor.service';
import { JasaService } from './jasa/jasa.service';
import { CheckoutBasketComponent } from './checkout-basket/checkout-basket.component';
import { CheckoutService } from './checkout/checkout.service';

@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    JasaComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    AboutComponent,
    DashboardComponent,
    CheckoutBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features,
    // ServiceWorkerModule.register('/ngsw-worker.js', {
    //   enabled: environment.production
    // })
  ],
  providers: [VendorService, JasaService, CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule {}
