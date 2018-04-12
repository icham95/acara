import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout/checkout.service';

@Component({
  selector: 'app-checkout-basket',
  templateUrl: './checkout-basket.component.html',
  styleUrls: ['./checkout-basket.component.css']
})
export class CheckoutBasketComponent implements OnInit {
  checkouts: any[];
  loadingSave: Boolean = false;
  constructor(private checkoutService: CheckoutService) {}

  ngOnInit() {
    this.getCheckouts();
  }

  getCheckouts(): void {
    this.checkouts = this.checkoutService.getCheckouts();
  }

  saveCheckouts(): void {
    this.loadingSave = true;
    this.checkoutService.saveCheckout().then(status => {
      if (typeof status !== 'undefined') {
        alert('your simulation is empty!');
      } else {
        alert('success, your plan has been submitted!');
        this.checkoutService.setCheckouts([]);
        this.getCheckouts();
      }
      this.loadingSave = false;
    });
  }

  removeCheckout(item): void {
    this.checkoutService.removeCheckout(item);
  }
}
