import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TransactionHistoryComponent } from './components/transactions/transaction-history/transaction-history.component';
import { GraphComponent } from './components/graph/graph.component';
import { UserComponent } from './components/user/user.component';
import { TransactionComponent } from './components/transactions/transaction/transaction.component';

import { CryptoService } from './services/crypto-service/crypto-service';

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
