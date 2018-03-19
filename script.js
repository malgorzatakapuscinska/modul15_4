/*jshint esversion: 6 */ 

// TASK 1 - CREATE TWO VARIABLES CONTAINING STRINGS AND ADD THEM. USING CONCAT OR JOIN METHODS IS NOT ALLOWED

// a) 

const string1 = 'Hello';
const string2 = 'world';
const addedStrings = (`${string1} ${string2}`);

console.log(addedStrings);

//or shorter :-)

const addedStrings2 = (string1='Hello', string2='world') => console.log(`${string1} ${string2}`);
addedStrings2();

//TASK 2 - CREATE FUNCTION MULTIPLY MUTLIPLYING TWO VARIABLES. CONTIDTION IS IF USER DOESN'T PUT ONE OR TWO VERIABLES THEY SHOULD BE EQUAL 1 BY DEFAULT.

const number1=0, number2=0;
const multiply = (number1 = 1, number2 = 1) => number1 + number2;
console.log(multiply(2));
console.log(multiply(6,5));

//TASK 3 CREATE AVERAGE FUNCTION THAT CALCULATES AVERRAGE OF ALL GIVEN PARAMENTERS. ASSUMPTION: ALL PAARAMETERS OF THE FUNCTION ARE NUMBERS.

// a) in es5

	//using for loop
	
/*console.log('using es5');

function average1() {
var sum = 0;
var average=0;
    for (var i=0; i < arguments.length; i++) {
        sum = sum +arguments[i];
        average = sum/arguments.length;
    }
    console.log(average);
}

average1(1, 2, 3);*/

//b) in es6
console.log('using es6 :-)');

	//using forEach() method

const average = (...args) => {
	let sum1=0;
	args.forEach(arg  => {
		sum1 += arg;
	});
	console.log(`Średnia podanych liczb wynosi: ${sum1/args.length}`);
};
average(1,2,4);

	//using reduce() method

const average5 = (...args) => {

	const sum = args.reduce((suma, arg)=>{
	return suma + arg;
	});

return console.log(`Średnia podanych liczb wynosi: ${sum/args.length}`);
};

average5(1,2,3,4);

//TASK 4 CREATE AN ARRAY AND PUT THIS ARRAY AS PARAMETER OF AVERAGE FUNCTION. USE SPREAD OPERATOR.

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);

// TASK 5

const array1 = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, ,lastName]=array1;

console.log(`The frist name is: ${firstName}`);
console.log(`The last name is: ${lastName}`);