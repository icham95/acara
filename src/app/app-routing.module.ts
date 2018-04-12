import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorComponent } from './vendor/vendor.component';
import { JasaComponent } from './jasa/jasa.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'vendors',
    component: VendorComponent
  },
  {
    path: 'services',
    component: JasaComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
