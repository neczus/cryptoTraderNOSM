import { Component, OnInit, Input } from '@angular/core';
import { CryptoService } from 'src/app/crypto-service/crypto-service.component';

@Component({
  selector: 'transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  @Input('title') title = "Tranzakciók";
  @Input('tableHeaders') tableHeaders = ["Tranzakció", "Valuta", "Mennyiség", "Dátum"];

  transactionHistory;

  buy="Vásárlás";
  sell="Eladás";
  reset="Alaphelyzetre állítás"

  constructor(service: CryptoService) {
    this.transactionHistory = service.getHistory();
  }

  ngOnInit() {
  }

}
