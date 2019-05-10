import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { TransactionHistory } from 'src/app/core/classes/transactionHistory';
import { CryptoService } from '../crypto-service/crypto-service';

@Injectable()
export class RobotService {
    private transactionHistorys:number[] = [];
    private transactionIndexes:number[] = [];
    private different = 0.15;

    updateTransactionHistory(response){
        console.log(this.calculate(response));
        return of(this.calculate(response));
    }

    calculate(response){
        var i = 0;
        response.forEach(element => {
            var val = 0;
            var el;
            var first;
            var large = 0;

            Object.keys(element.history).forEach(e => {
                if(!el){
                    el = element.history[e];
                    first = element.history[e];
                }
                val = element.history[e] - el;
                if (val > large) {
                    large = val;
                }
                el = element.history[e];
            });
            this.transactionIndexes[i]=val;
            this.transactionHistorys[i]=first;
            i++;
        });
        
        var maxDiff = Math.max(...this.transactionIndexes);
        var minDiff = Math.min(...this.transactionIndexes);

        let transactions=[];
        this.transactionIndexes.forEach(i=>{
            while (Math.abs(i)>1) {
                i = i / 10;
            }
            
            transactions.push(i);
        })
        
        var max = Math.max(...transactions);
        var min = Math.min(...transactions);

        if(max>this.different){
            max = transactions.findIndex(ma=>ma==max);
        } else {
            max = -1;
        }
        if(min<this.different*-1){
            min = transactions.findIndex(mi=>mi==min);
        } else {
            min = -1;
        }

        let maxType=this.getType(max);
        let minType=this.getType(min);

        let sellValue;
        let buyValue;

        if(maxType != "" && max >= 0) {
            sellValue = this.sell(max, maxType);
        }

        if(minType != "" && min >= 0) {
            buyValue = this.buy(min, minType);
        }

        return [sellValue, buyValue];
    }

    buy(max, symbol){
        let amount = 1/this.transactionHistorys[max]*5;
        if(amount < 0.01) amount = 0.01;
        return { Amount:amount, Symbol:symbol,                                                                    Type:"purchase" };
    }

    sell(min, symbol){
        let amount = 1/this.transactionHistorys[min]*5;
        if(amount < 0.01) amount = 0.01;
        return { Amount:amount, Symbol:symbol, Type:"sell" };
    }

    getType(ind){
        let type = "";

        switch (ind) {
            case 0:
                type = "BTC";
                break;
            case 1:
                type = "XRP";
                break;
            case 2:
                type = "ETH";
                break;
            default:
                break;
        }

        return type;
    }
}
