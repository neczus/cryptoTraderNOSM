import { Component, OnInit, Input } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service/crypto-service';

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

  constructor(private service: CryptoService) {
  }

  ngOnInit() {
    this.service.getHistory().subscribe(response => this.transactionHistory = response);
  }

}
