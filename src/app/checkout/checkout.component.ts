import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutsDB: Observable<any[]>;
  loading: Boolean = false;
  constructor(private checkoutService: CheckoutService) {}

  ngOnInit() {
    this.getCheckoutsDB();
  }

  getCheckoutsDB(): void {
    this.loading = true;
    this.checkoutsDB = this.checkoutService.getCheckoutsDB();
    this.checkoutsDB.subscribe(res => {
      this.loading = false;
    });
  }

  timestampToTime(timestamp: string): string {
    let dates = new Date(timestamp);
    let year = dates.getFullYear().toString();
    let month = dates.getMonth() + 1;
    let date = dates.getDay().toString();
    let monthSay = '';
    switch (month) {
      case 1:
        monthSay = 'january';
        break;
      case 2:
        monthSay = 'february';
        break;
      case 3:
        monthSay = 'march';
        break;
      case 4:
        monthSay = 'april';
        break;
      case 5:
        monthSay = 'may';
        break;
      case 6:
        monthSay = 'june';
        break;
      case 7:
        monthSay = 'july';
        break;
      case 8:
        monthSay = 'august';
        break;
      case 9:
        monthSay = 'september';
        break;
      case 10:
        monthSay = 'october';
        break;
      case 11:
        monthSay = 'november';
        break;
      case 12:
        monthSay = 'desember';
        break;
    }
    return `${date} - ${monthSay} - ${year}`;
  }
}
