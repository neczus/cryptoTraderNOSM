import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Transaction } from '../../core/classes/transaction';
import { Observable, throwError, forkJoin } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RobotService } from '../robot-service/robot-service';
import { RefreshService } from '../refresh-service/refresh-service';

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

  constructor(private http: HttpClient, private robotService:RobotService, private refreshService:RefreshService) {
    setInterval(()=>{
      forkJoin([this.getExchange("btc"),this.getExchange("xrp"),this.getExchange("eth")]).subscribe(
        (response) => {
          this.refreshService.updateTransactionHistory(true);
          this.robotService.updateTransactionHistory(response).subscribe((sellBuy)=>
            {
              if (sellBuy[0]) {
              this.postTransaction(sellBuy[0].Type, sellBuy[0].Amount,sellBuy[0].Symbol).subscribe((asd)=>console.log(asd));
              }
              if (sellBuy[1]) {
                this.postTransaction(sellBuy[1].Type, sellBuy[1].Amount, sellBuy[1].Symbol).subscribe((asd)=>console.log(asd));
              }
            }
      )});
    }, 60000);
}

  getExchange(type) {
    this.header=this.addTokenToHeader();
    return this.http.get(this.baseLink+this.exchange+"/"+type, {headers:this.header}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getBalance() {
    this.header=this.addTokenToHeader();
    return this.http.get(this.baseLink+this.account, {headers:this.header}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  
  getHistory() {
    this.header=this.addTokenToHeader();
    return this.http.get(this.baseLink+this.account+this.history, {headers:this.header}).pipe(
      retry(1),
      catchError(this.handleError)
    );     
  }

  postTransaction(type, amount, symbol) {
    this.header=this.addTokenToHeader();
    let transaction = { Amount:amount, Symbol:symbol };
    return this.http.post(this.baseLink+this.account+'/'+type, new Transaction(symbol, amount), {headers:this.header}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addTokenToHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('X-Access-Token', this.token);
    
    return headers;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      errorMessage = error.error.Message;
      if(errorMessage == null || errorMessage == "")
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
