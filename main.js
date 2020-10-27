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
      let mazda = new Car("1234", 31, 13);
      assert.equal(mazda.id, "1234");
      assert.equal(mazda.mpg, 31);
      assert.equal(mazda.tankSize, 13);
      assert.equal(mazda.currentFuel, 0);
      assert.equal(mazda.odometer, 0);
    })
  })

  describe("adding fuel", function(){
    it("partially fill the tank", function(){
      let mazda = new Car("1234", 31, 13);
      mazda.fillUp(1);
      assert.equal(mazda.currentFuel, 1);
      mazda.fillUp(4);
      assert.equal(mazda.currentFuel, 5);
    })

    it("should not overfill", function(){
      let mazda = new Car("1234", 31, 13);
      mazda.fillUp(15);
      assert.equal(mazda.currentFuel, 0);
    })
    
    it("should not allow negative fuel", function(){
      let mazda = new Car("1234", 31, 13);
      mazda.fillUp(10);
      mazda.fillUp(-3);
      assert.equal(mazda.currentFuel, 10);
    })
  })

  describe("distance to empty", function(){
    it("return total miles you can travel", function(){
      let mazda = new Car("1234", 31, 13);
      mazda.fillUp(10);
      assert.equal(mazda.distanceToEmpty(), 310);
    })
  })

  describe("driving a certain distance", function(){
    it("should return total distance traveled", function(){
      let mazda = new Car("1234", 31, 13);
      mazda.fillUp(10);
      assert.equal(mazda.drive(50), true);
    })
    it("should not allow driving farther than possible", function(){
      let mazda = new Car("1234", 31, 13);
      mazda.fillUp(1);
      assert.equal(mazda.drive(50), false);
    })
    it("should not allow driving backwards", function(){
      let mazda = new Car("1234", 31, 13);
      mazda.fillUp(10);
      assert.equal(mazda.drive(-20), false);
    })
  })
}
