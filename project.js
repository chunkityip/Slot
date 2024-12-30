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


// public void deposit()
/**
 * Create a function call deposit
 * 1 . Loop over in this function
 * 2. Create a user input call depositAmount and display "Enter a deposit amount: "
 * 3. Convert depositAmount as String to number call numberDepositAmount
 * 4. If numberDepositAmount not a number or numberDepositAmount smaller or equal to 0
 * 5. display "Invalid deposit amount, try again."
 * 6. else , return numberDepositAmount
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

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet: ");
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
let balance = deposit();
const numberofLines = getNumberOfLines();
const get = getBet(balance, numberofLines);

