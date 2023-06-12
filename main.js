/* START CODE UNDER THIS LINE */
// qustion 1 
console.log(9 + 1 * 5);
console.log(9 % 2);
console.log((9 / 3) * (10 - 7));
console.log(21 / 3 + 3 * 9 * 9 + 5);
console.log(36 / 9 + 48 - 10 / 2);
// qustion 2 
const name = 'John';
console.log(name)
const age = 10;    
console.log(age)
const const1 = "Constant";
console.log(const1);
const variable1 = "value";
console.log( variable1)
// qustion 3 
/*
Define a variable color containing your favorite color.

Define a variable positiveNumber containing any positive number.

Define a variable food containing your favorite food.

Define a variable PhoneNumber containing a phone number.
*/
const color = "blue" ;
console.log( color);
const positiveNumber = 10 ;
console.log(positiveNumber);
const food = "shawarma"
console.log(food);
const phoneNumber = 0791469872
console.log(phoneNumber);
// qustion 4 
/*
10 + "10"; // ?
"10" + "10"; // ?
10 + 10 + "5"; // ?
"Hello" + 1; // ?
"10" + 5 + 5; // ?
"20" - 10; // ?
"9" - "5"; // ?
"19" - "13" + 17; // ?
5 + 6 + "4" + 9 - 4 - 2; // ?
*/
console.log(10+"10")
console.log("10" + "10")
console.log(10 + 10 + "5")
console.log("Hello" + 1)
console.log("10" + 5 + 5)
console.log("20" - 10)
console.log("9" - "5")
//console,log("19" - "13"-17)
console.log(5 + 6 + "4" + 9 - 4 - 2)
// qustion 5  Using string concatenation write an expression that represents your first name, last name, gender, and nationality.
const Firstname = "Hussein"
const Lastname = "Abushariha"
const gender = "male "
const nationality = "jordanian"
console.log("my name is " + Firstname +  Lastname +" iam " + gender + " years old and my nationality is " +nationality)
// qustion 6 Write an expression that represents the number of seconds in 30 days.
const second = 1 ;
const minutes = second *60 ;
const hour = minutes *60 ;
const day = hour *24
console.log("in day we have " +  day + " seconds " + " if we multiplay this number with 30 days we get " +  day*30 )

// qustion 7 Reassign the value of a to make the following expression equal to nine.

let a = 29
let b = 3;
let c = 10;

c - b * c + a;
console.log(c - b * c + a);
// qustion 8 Using the variables below write an expression that calculates the total amount for buying two coffee cups.

//tip and tax amounts are a percentage of the total billed amount
const tip = 0.1;
const taxRate = 0.08;
const coffeeCupPrice = 6;
const totalprice = tip + (taxRate * coffeeCupPrice + coffeeCupPrice)
console.log( 'the price for 2 coffee cups is ' + totalprice * 2 );


function calc(num1, num2){
    let z = num1 * 2 + num2 * 2;
    return z;
}

let x = calc(3,4);

x = x + 2;

console.log("the value of x is " + x);

