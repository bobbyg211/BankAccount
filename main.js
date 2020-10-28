// Bank Account Class
class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }

  balance () {
    const total = this.transactions.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);

    return total;
  }

  deposit(amt) {
    let newDeposit = new Transaction(amt, "Deposit");
    this.transactions.push(newDeposit);
  }

  charge(amt, payee) {
    let newCharge = new Transaction(-Math.abs(amt), payee);
    this.transactions.push(newCharge);
  }
}

// Transaction Class
class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}

const myAccount = new BankAccount("12345", "Robert");
myAccount.deposit(35);
myAccount.charge(15, "Internet");
console.log(myAccount);                    


console.log("My account balance is:", myAccount.balance());

// Unit Tests

if( typeof describe == 'function'){
  const assert = require('assert');

  describe("constructor test", function(){
    it("should handle simple constructor", function(){

    })
  })

  describe("return account balance", function(){
    it("partially fill the tank", function(){

    })
  })

  describe("deposit money to account", function(){
    it("balance increases after deposit", function(){

    })
    it("dont allow for negative number", function(){

    })
  })

  describe("charge money to account", function(){
    it("cannot overcharge", function(){

    })
    it("allow for positive or negative numbers", function(){

    })
  })
}
