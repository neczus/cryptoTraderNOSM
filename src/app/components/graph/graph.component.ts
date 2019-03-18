import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service/crypto-service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  chartData = [];
  chartLabels = [];

  constructor(private service: CryptoService) { }

  ngOnInit(): void {
    forkJoin(
      this.service.getExchange("btc"),
      this.service.getExchange("eth"),
      this.service.getExchange("xrp")
    ).subscribe(([btc, eth, xrp]: any) => {
      this.chartData = [
        { data: btc ? this.transformDataValue(btc) : [], label: btc.symbol ? btc.symbol : "" },
        { data: eth ? this.transformDataValue(eth) : [], label: eth.symbol ? eth.symbol : "" },
        { data: xrp ? this.transformDataValue(xrp) : [], label: xrp.symbol ? xrp.symbol : "" }
      ];
      this.chartLabels = this.transformDataKey(btc.history || [], eth.history || [], xrp.history || []);
    });
  }

  chartOptions = {
    responsive: true
  };

  onChartClick(event) {
    console.log(event);
  }

  transformDataValue(type) {
    console.log(Object.values(history));
    return Object.values(type.history).map((item:number) => item - type.currentRate);
  }

  transformDataKey(hstryBTC, hstryETH, hstryXRP) {
    return Array.from(new Set([...Object.keys(hstryBTC), ...Object.keys(hstryETH), ...Object.keys(hstryXRP)]));
  }
}