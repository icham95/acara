import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';
import { Vendor } from './vendor';
import { Observable } from 'rxjs/Observable';
import { CheckoutService } from '../checkout/checkout.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendors: Observable<any[]>;
  loading: Boolean = true;

  constructor(
    private vendorsService: VendorService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit() {
    this.getVendors();
  }

  getVendors(): void {
    this.vendors = this.vendorsService.getVendors();
    this.vendors.subscribe(res => {
      this.loading = false;
    });
  }

  addCheckout(item): void {
    this.checkoutService.addCheckout(item);
  }
}
