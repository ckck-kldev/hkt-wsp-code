// define a class BankAccount
//
// properties/fields:
//  -- id
//
// methods:
//  -- transfer(amount, receiverAccount)
//  -- getBalance()


export class BankAccount {
    id: number;
    private balance: number;

    constructor(id: number, balance: number) {
        this.id = id;
        this.balance = balance;
    }

    report() {
        return `ID: ${this.id}, Balance: $${this.balance}`
    }
    getBalance() {
        return `Balance: $${this.balance}`
    }
    transfer(amount: number, receiverAccount: BankAccount) {
        if (amount > this.balance) {
            throw new Error('No enough balance to transfer')
        } else {
        receiverAccount.balance += amount;
        this.balance -= amount;
    }
    }

}

const abc = new BankAccount(852, 100)
const def = new BankAccount(999, 200)
console.log(abc.report())
console.log(def.report())

try{
    abc.transfer(100, def)
    console.log(abc.report())
    console.log(def.report())
} catch (error) {
    console.log('transfer rejected', String(error))
}


