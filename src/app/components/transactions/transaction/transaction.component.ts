import { Component, OnInit, Input } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service/crypto-service';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input('type') type = 'purchase';
  title;
  btnColor;
  btnColorHover;

  Amount: number = 0;
  Symbol: string = "BTC";

  constructor(private service: CryptoService) {
  }

  ngOnInit() {
    if (this.type == 'purchase') {
      this.title = "Vásárlás";
      this.btnColor = "light-green";
      this.btnColorHover = "green";
    } else {
      this.title = "Eladás";
      this.btnColor = "deep-orange";
      this.btnColorHover = "red";
    }
  }

  postTransaction() {
    this.service.postTransaction(this.type, this.Amount, this.Symbol).subscribe(response => {
      this.Amount = 0;
      this.Symbol = "BTC";
    });
  }
}
