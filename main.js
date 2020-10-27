// Bank Account Class
class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }

  balance () {

  }

  deposit(amt) {
    let newDeposit = new Transaction(amt, "Deposit");
    this.transactions.push(newDeposit);
  }

  charge(amt, payee) {
    console.log(amt);
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
      let mazda = new Car("1234", 31, 13);
      mazda.fillUp(10);
      assert.equal(mazda.drive(50), true);
    })
    it("allow for positive or negative numbers", function(){
      let mazda = new Car("1234", 31, 13);
      mazda.fillUp(1);
      assert.equal(mazda.drive(50), false);
    })
  })
}
