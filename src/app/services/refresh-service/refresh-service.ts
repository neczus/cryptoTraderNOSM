import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TransactionHistory } from 'src/app/core/classes/transactionHistory';

@Injectable()
export class RefreshService {
    private refresh = new Subject<TransactionHistory>();
    
    refreshObservable = this.refresh.asObservable();

    updateTransactionHistory(transactionHistory){
        console.log(transactionHistory);
        this.refresh.next(transactionHistory);
    }
}
