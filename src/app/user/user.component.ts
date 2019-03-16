import { Component, OnInit, Input } from '@angular/core';
import { CryptoService } from '../crypto-service/crypto-service.component';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input('name') name = "Trab Antal";
  imgSrc = "./assets/img_avatar.png";

  usd = "USD";
  btc = "BTC";
  eth = "ETH";
  xrp = "XRP";

  balance;

  constructor(private service : CryptoService) {
  }

  ngOnInit() {
    this.balance = this.service.getBalance();
  }

}
