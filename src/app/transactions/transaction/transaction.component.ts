import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input('type') type = 'buy';
  title;
  btnColor;
  btnColorHover;

  constructor() {   
  }

  ngOnInit() {
    if (this.type=='buy') {
      this.title = "Vásárlás";
      this.btnColor = "light-green";
      this.btnColorHover = "green";
    } else {
      this.title = "Eladás";
      this.btnColor = "deep-orange";
      this.btnColorHover = "red";  
    }
  }

}
