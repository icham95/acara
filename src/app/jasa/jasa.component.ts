import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JasaService } from './jasa.service';
import { CheckoutService } from '../checkout/checkout.service';

@Component({
  selector: 'app-jasa',
  templateUrl: './jasa.component.html',
  styleUrls: ['./jasa.component.css']
})
export class JasaComponent implements OnInit {
  jasas: Observable<any[]>;
  loading: Boolean = true;
  constructor(
    private jasaService: JasaService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit() {
    this.getJasas();
  }

  getJasas() {
    this.jasas = this.jasaService.getJASAS();
    this.jasas.subscribe(() => (this.loading = false));
  }

  addCheckout(item): void {
    this.checkoutService.addCheckout(item);
  }
}
