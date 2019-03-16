export class Transaction {
    Symbol;
    Amount;

    constructor(Symbol:string="BTC", Amount:number=0){
        this.Amount = Amount;
        this.Symbol = Symbol;
    }
}