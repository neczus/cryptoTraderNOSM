import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CryptoService } from '../../services/crypto-service/crypto-service';
import { Subscription } from 'rxjs';
import { RefreshService } from 'src/app/services/refresh-service/refresh-service';
import { TransactionHistory } from 'src/app/core/classes/transactionHistory';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  @Input('name') name = "Trab Antal";
  imgSrc = "./assets/img_avatar.png";
  btnColor = "blue";
  btnColorHover = "indigo";

  private transactionHistorySubscription: Subscription;

  usd = "USD";
  btc = "BTC";
  eth = "ETH";
  xrp = "XRP";

  balance;

  Amount: number = 0;
  Symbol: string = "";
  Type: string = "reset";

  constructor(private service : CryptoService, private refresh: RefreshService) {
  }

  ngOnInit() {
    this.getBalance();  
    this.transactionHistorySubscription = this.refresh.refreshObservable.subscribe(() => {
        this.getBalance();
      });  
  }
  
  ngOnDestroy() {
    this.transactionHistorySubscription.unsubscribe();
  }

  getBalance() {
    this.service.getBalance().subscribe(response => this.balance = response);
  }

  postTransaction() {
    this.service.postTransaction(this.Type, this.Amount, this.Symbol).subscribe(response => {
      this.refresh.updateTransactionHistory(new TransactionHistory(this.Symbol, this.Amount, this.Type));
    });
  }

}
