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

// public void deposit()
const deposit = () => {
    while (true) {
        const depositAmout = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmout);  // parseFlot is build in function to change String to number

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) { //isNan() is build in function
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



/**
Scanner scanner = new Scanner(System.in);
System.out.print("Enter a deposit amount: ");
String depositAmount = scanner.nextLine();
 */
const depositAmount = deposit();
const numberofLines = getNumberOfLines();

