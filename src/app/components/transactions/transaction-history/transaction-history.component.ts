import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service/crypto-service';
import { RefreshService } from 'src/app/services/refresh-service/refresh-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit, OnDestroy {
  @Input('title') title = "Tranzakciók";
  @Input('tableHeaders') tableHeaders = ["Tranzakció", "Valuta", "Mennyiség", "Dátum"];

  private transactionHistorySubscription: Subscription;

  transactionHistory;

  buy = "Vásárlás";
  sell = "Eladás";
  reset = "Alaphelyzetre állítás"

  constructor(private service: CryptoService, private refresh: RefreshService) {
  }

  ngOnInit() {
    
    this.transactionHistorySubscription = this.refresh.refreshObservable.subscribe(
      response => {
        if (typeof response === "boolean") {
          this.getHistory();
        } else {
        const newTransaction = {
          "type": response.Type, "symbol": response.Symbol, "amount": response.Amount, "createdAt": response.Date
        };
        this.transactionHistory.push(newTransaction);
      }
    });
  }

  ngOnDestroy() {
    this.transactionHistorySubscription.unsubscribe();
  }

  getHistory(){
    this.service.getHistory().subscribe(response => {this.transactionHistory = response},
      error => {alert(error)});
  }
}
