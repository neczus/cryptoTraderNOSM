import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CryptoService {
  readonly baseLink = "https://obudai-api.azurewebsites.net/api";
  private accessToken = "B98D398A-1181-4CB2-A3F3-FDE05324FB8D";

  private exchange = "/exchange";

  private account = "/account";
  private balance = "";
  private history = "/history";
  private purchase = "/purchase";
  private sell = "/sell";
  private reset = "/reset";

  constructor(private http: HttpClient) { }

  getBalance() {
    /*return {
      "token": "b98d398a-1181-4cb2-a3f3-fde05324fb8d",
      "usd": 5000,
      "btc": 0,
      "eth": 0,
      "xrp": 0
    }*/
    return this.http.get(this.baseLink);
  }
  
  getHistory() {
    return [
      {
          "symbol": null,
          "amount": 0,
          "type": "Reset",
          "createdAt": "2019-03-16T10:49:57.9977795+00:00",
          "balance": {
              "token": "b98d398a-1181-4cb2-a3f3-fde05324fb8d",
              "usd": 5000,
              "btc": 0,
              "eth": 0,
              "xrp": 0
          },
          "exchangeRates": null
      },
      {
          "symbol": "BTC",
          "amount": 0.1,
          "type": "Purchase",
          "createdAt": "2019-03-16T10:50:01.5818053+00:00",
          "balance": {
              "token": "b98d398a-1181-4cb2-a3f3-fde05324fb8d",
              "usd": 4120.2092508411242,
              "btc": 0.1,
              "eth": 0,
              "xrp": 0
          },
          "exchangeRates": {
              "btc": 8797.9074915887522,
              "eth": 733.71958397702724,
              "xrp": 0.73691367093548477
          }
      },
      {
          "symbol": "BTC",
          "amount": 0.1,
          "type": "Purchase",
          "createdAt": "2019-03-16T10:50:04.6387555+00:00",
          "balance": {
              "token": "b98d398a-1181-4cb2-a3f3-fde05324fb8d",
              "usd": 3243.317679774384,
              "btc": 0.2,
              "eth": 0,
              "xrp": 0
          },
          "exchangeRates": {
              "btc": 8768.9157106674011,
              "eth": 736.29346824296044,
              "xrp": 0.74016339129304065
          }
      },
      {
          "symbol": "BTC",
          "amount": 0.1,
          "type": "Purchase",
          "createdAt": "2019-03-16T11:29:30.9784342+00:00",
          "balance": {
              "token": "b98d398a-1181-4cb2-a3f3-fde05324fb8d",
              "usd": 2366.6894213034752,
              "btc": 0.30000000000000004,
              "eth": 0,
              "xrp": 0
          },
          "exchangeRates": {
              "btc": 8766.282584709088,
              "eth": 733.939971561345,
              "xrp": 0.73838902491577763
          }
      },
      {
          "symbol": "BTC",
          "amount": 0.15,
          "type": "Purchase",
          "createdAt": "2019-03-16T11:57:47.3856067+00:00",
          "balance": {
              "token": "b98d398a-1181-4cb2-a3f3-fde05324fb8d",
              "usd": 1045.1565552638235,
              "btc": 0.45000000000000007,
              "eth": 0,
              "xrp": 0
          },
          "exchangeRates": {
              "btc": 8810.219106931012,
              "eth": 729.40456093315652,
              "xrp": 0.74223811529605566
          }
      },
      {
          "symbol": "BTC",
          "amount": 0.15,
          "type": "Sell",
          "createdAt": "2019-03-16T11:59:34.3374034+00:00",
          "balance": {
              "token": "b98d398a-1181-4cb2-a3f3-fde05324fb8d",
              "usd": 2361.0214294597381,
              "btc": 0.30000000000000004,
              "eth": 0,
              "xrp": 0
          },
          "exchangeRates": {
              "btc": 8772.4324946394318,
              "eth": 739.3908741731766,
              "xrp": 0.73750398389918681
          }
      }
    ]
  }

  postTransaction() {
    
  }

}
