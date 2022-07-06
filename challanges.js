// Very easy challenge
//Write a function named min that takes two arguments and returns their minimum

function min(p1, p2) {
    return Math.min(p1, p2);
}

// Easy challenge
// Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."
//unfinished

const students = ["Derek", "John","Jill"];
lastname = {"Derek" : "Munoz", "John" : "Smith", "Jill":"Grace"};
age = {"Derek" : 21, "John" : 45 , "Jill" : 34};

console.log(`Hello, my name is ${students[1]} ${lastname["John"]} and I'm ${age["John"]} years old`);

//Medium challenge
//Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = prompt("Enter a number between 1 and 12");
parseInt(date);

if (date > 0 && date < 13) {
    console.log(`${date}: ${months[date - "1"]}`);
}
else{
    console.log("Enter a number between 1 and 12");
}

/*Hard Challenge
  Given the information below for Tom and Jerry. 
                    Tom - 	height:  9in   	mass: 8 g
                    Jerry - height: 10in 	mass: 45 g
  Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
             BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).*/

var tomHeight = 9;
var tomMass = 8;
var jerryHeight = 10;
var jerryMass = 45;

var tomBMI = tomMass/(tomHeight * tomHeight);
var jerryBMI = jerryMass/(jerryHeight * jerryHeight);

let facts = new Boolean(tomBMI < jerryBMI);
console.log(`Is Jerry's BMI higher than Tom's? ${facts}`);

