// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. give the user their winnings
// 7. Play gain

// function deposit() {
//     return 1
// }

// Don't use var
// const is immutable
// let is mutable

const prompt = require("prompt-sync")(); // Import thrid part library call prompt-sunc

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8
}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
      for (let i = 0; i < count; i++) {
        symbols.push(symbol);
      }
    }
  
    const reels = [];
    for (let i = 0; i < COLS; i++) {
      reels.push([]);
      const reelSymbols = [...symbols];
      for (let j = 0; j < ROWS; j++) {
        const randomIndex = Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex, 1);
      }
    }
  
    return reels;
  };

  const transpose = (reels) => {
    const rows = [];
  
    for (let i = 0; i < ROWS; i++) {
      rows.push([]);
      for (let j = 0; j < COLS; j++) {
        rows[i].push(reels[j][i]);
      }
    }
  
    return rows;
  };
  
  const printRows = (rows) => {
    for (const row of rows) {
      let rowString = "";
      for (const [i, symbol] of row.entries()) {
        rowString += symbol;
        if (i != row.length - 1) {
          rowString += " | ";
        }
      }
      console.log(rowString);
    }
  };

  const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
  
    for (let row = 0; row < lines; row++) {
      const symbols = rows[row];
      let allSame = true;
  
      for (const symbol of symbols) {
        if (symbol != symbols[0]) {
          allSame = false;
          break;
        }
      }
  
      if (allSame) {
        winnings += bet * SYMBOL_VALUES[symbols[0]];
      }
    }
  
    return winnings;
  };

spin();
// public void deposit()
/**
 * Create a function call deposit
 * 1. Loop over in this function
 * 2. Create a user input call depositAmount and display "Enter a deposit amount: "
 * 3. Convert depositAmount as String to number call numberDepositAmount
 * 4. If numberDepositAmount not a number or numberDepositAmount smaller or equal to 0
 * 5. display "Invalid deposit amount, try again."
 * 6. else , return numberDepositAmount
 * 
 */

/**
 * Create a function call getNumberOfLines
 * 1. Loop over in this function
 * 2. Create a user input call lines and display "Enter the number of lines to bet on (1 - 3): "
 * 3. Convert lines as String to number call numberofLines
 * 4. If numberofLines not a number or numberofLines smaller or equal to 0 or numberofLines bigger then 3
 * 5. display "Invalid numver of lines, try again."
 * 6. else , return numberofLines
 * 
 */

const deposit= () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.")
        } else {
            return numberDepositAmount;
        }
    }
};

/**
 * Create a function call getNumberOfLines
 * 1. Loop over in this function
 * 2. Create a user input call lines and display "Enter the number of lines to bet on (1 - 3): "
 * 3. Convert lines as String to number call numberofLines
 * 4. If numberofLines not a number or numberofLines smaller or equal to 0 or numberofLines bigger then 3
 * 5. display "Invalid numver of lines, try again."
 * 6. else , return numberofLines
 * 
 */

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1 - 3): ");
        const numberofLines = parseFloat(lines);  // parseFlot is build in function to change String to number

        if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines > 3) { //isNan() is build in function
            console.log("Invalid numver of lines, try again.")
        } else {
            return numberofLines;
        }
    }
};

/**
 * Create a function call getBet with two promoter : balance and lines
 * 1. Loop over in this function
 * 2. Create a user input call bet and display "Enter the total bet: "
 * 3. Convert numberBet as String to number call numberBet
 * 4. if numberBet not a number or numberBet smaller or equal to 0 or numberBet bigger than balance / lines
 * 5. display "Invalid bet, try again."
 * 6. else , return numberBet
 * 
 */

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet;
        }
    }
};

/**
Scanner scanner = new Scanner(System.in);
System.out.print("Enter a deposit amount: ");
String depositAmount = scanner.nextLine();
 */

const game = () => {
    let balance = deposit();
  
    while (true) {
      console.log("You have a balance of $" + balance);
      const numberOfLines = getNumberOfLines();
      const bet = getBet(balance, numberOfLines);
      balance -= bet * numberOfLines;
      const reels = spin();
      const rows = transpose(reels);
      printRows(rows);
      const winnings = getWinnings(rows, bet, numberOfLines);
      balance += winnings;
      console.log("You won, $" + winnings.toString());
  
      if (balance <= 0) {
        console.log("You ran out of money!");
        break;
      }
  
      const playAgain = prompt("Do you want to play again (y/n)? ");
  
      if (playAgain != "y") break;
    }
  };
  
  game();


