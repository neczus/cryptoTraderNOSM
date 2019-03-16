import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TransactionHistoryComponent } from './transactions/transaction-history/transaction-history.component';
import { GraphComponent } from './graph/graph.component';
import { UserComponent } from './user/user.component';
import { TransactionComponent } from './transactions/transaction/transaction.component';

import { CryptoService } from './crypto-service/crypto-service.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransactionHistoryComponent,
    GraphComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
