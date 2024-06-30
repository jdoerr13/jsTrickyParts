function createAccount(pin, initialDeposit) {

    //KEEP STATE PRIVATE- encapsulate
    let currentPin = pin;
    let balance = initialDeposit;


//In ES6, when defining methods inside an object, you can omit the function keyword.
    return {
        //same as:
        //checkBalance: function(){      }
        checkBalance(inputPin){
            if (inputPin !== currentPin){
                return "Invalid PIN";
            }
            return `Current balance: $${balance}.`;
        },
        deposit(inputPin, amount){
            if (inputPin !== currentPin){
                return "Invalid PIN";
            }
            balance += amount;
            return `Successfully deposited $${amount}. Current balance: $${balance}.`;
        },
        withdraw(inputPin, amount) {
            if (inputPin !== currentPin) {
              return "Invalid PIN.";
            }
            if (amount > balance) {
              return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            balance -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        },
        changePin(oldPin, newPin) {
            if (oldPin !== currentPin) {
              return "Invalid PIN.";
            }
            currentPin = newPin;
            return "PIN successfully changed!";
          }
        };
    }


//MUST RETURN OBJECT WITH METHODS instead of the variables abofe

// module.exports = { createAccount };
