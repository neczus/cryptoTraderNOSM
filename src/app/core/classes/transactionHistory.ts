import { Transaction } from './transaction';

export class TransactionHistory extends Transaction {
    Type;
    Date;

    constructor(Symbol, Amount, Type){
        super(Symbol, Amount);

        this.Type = Type;
        this.Date = new Date().toISOString();
    }
}