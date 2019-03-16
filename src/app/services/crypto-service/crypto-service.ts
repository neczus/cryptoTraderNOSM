import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../../core/classes/transaction';

@Injectable()
export class CryptoService {
  readonly baseLink = "https://obudai-api.azurewebsites.net/api";
  readonly token = "B98D398A-1181-4CB2-A3F3-FDE05324FB8D";

  private exchange = "/exchange";

  private account = "/account";
  private balance = "";
  private history = "/history";
  private purchase = "/purchase";
  private sell = "/sell";
  private reset = "/reset";

  header;

  constructor(private http: HttpClient) {
}

  getBalance() {
    this.header=this.addTokenToHeader();
    return this.http.get(this.baseLink+this.account, {headers:this.header});
  }
  
  getHistory() {
    this.header=this.addTokenToHeader();
    return this.http.get(this.baseLink+this.account+this.history, {headers:this.header});     
  }

  postTransaction(type, amount, symbol) {
    this.header=this.addTokenToHeader();
    let transaction = { Amount:amount, Symbol:symbol };
    return this.http.post(this.baseLink+this.account+'/'+type, new Transaction(symbol, amount), {headers:this.header});
  }

  addTokenToHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('X-Access-Token', this.token);
    
    return headers;
  }

}
