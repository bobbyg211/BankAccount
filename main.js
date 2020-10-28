const { appendFileSync } = require('fs');

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
    if (amt < 0) {
      return false;
    } else {
      let newDeposit = new Transaction(amt, "Deposit");
      this.transactions.push(newDeposit);
    }
  }

  charge(amt, payee) {
    if (this.balance() >= amt) {
      let newCharge = new Transaction(-Math.abs(amt), payee);
      this.transactions.push(newCharge);
    } else {
      return false;
    }
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

// Unit Tests

if( typeof describe == 'function'){
  const assert = require('assert');

  describe("return account balance", function(){
    it("add up transactions", function(){
      const myAccount = new BankAccount("12345", "Robert");
      myAccount.deposit(35);
      myAccount.charge(15, "Internet");    
      assert.equal(myAccount.balance(), 20);
    })
  })

  describe("deposit money to account", function(){
    it("balance increases after deposit", function(){
      const myAccount = new BankAccount("12345", "Robert");
      myAccount.deposit(50);
      assert.equal(myAccount.balance(), 50);
    })
    it("dont allow for negative number", function(){
      const myAccount = new BankAccount("12345", "Robert");
      assert.equal(myAccount.deposit(-50), false);
    })
  })

  describe("charge money to account", function(){
    it("cannot overcharge", function(){
      const myAccount = new BankAccount("12345", "Robert");
      myAccount.deposit(30);
      assert.equal(myAccount.charge(60), false);
      assert.equal(myAccount.balance(), 30);
    })
    it("allow for positive or negative numbers", function(){
      const myAccount = new BankAccount("12345", "Robert");
      myAccount.deposit(50);
      myAccount.charge(15);
      assert.equal(myAccount.balance(), 35);
      myAccount.charge(-15);
      assert.equal(myAccount.balance(), 20);
    })
  })
}
