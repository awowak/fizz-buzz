// 1. Create a "cheat sheet" JavaScript file that contains working examples with comments of:
// Variables: container for a value (i.e., x = 4;)
// Debugging (alerts, comments, the console): debug in chrome, console.log, breakpoints
// Different data types: string ('this is a string'), Boolean (true/false, yes/no), number [3], undetermined, arrays, objects 
// Arrays: holds collection of data [ 4, 3242, 'gwenyth paltrow']
// Testing: test in console log, repl.it
// Logic: if, else
// Functions: arguments, returns value

// 2. Write 3 different functions that take input and return something via the console or an alert.

function halfOf(y) {
  var halvsies = y / 2;
  console.log('Half of ' + y + ' is ' +  halvsies);
}
halfOf(17);

function squareIt(g) {
  var square = g * g;
  console.log(g + ' squared is ' + square)
}
squareIt(96);

var secretNumber = Math.ceil(Math.random()*100);
var userNumber;
function guessNumber(userNumber){
  var userNumber = parseInt(document.getElementById('userNumber').value);
  if(userNumber == secretNumber) {
      alert('that number is just right, queen.');
    } else if(userNumber < secretNumber) {
      alert('that number is too low, kitten.');
    } else if(userNumber > secretNumber) {
      alert('that number is too high, doll.');
    } 
}

// **Complete four of the following problems**

// 3. Create a script with two variables assigned to two numbers. Add them together and output the result to the console. Now do the same with two strings.
var q = 4;
var r = 2;
console.log(q + r);

var s = "hello";
var t = " world!";
console.log(s + t);

// 4. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

// 5. Write a script that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, using the console, let the user know that what the variable was and that it was greater than 10.
function checkVal(num) {
    if(num < 10) {
        alert('your num is less or is ten!');
    } else {
        if(num > 10) {
            alert('your num is too big! much larger than ten!');
        }
    }
}

// 6. Try running the script and then changing the variable's value to see how this affects the program's output.

// 7. Write a similar program to check if a string stored in a variable is the same as another string.

// 8. Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
function yourName(name) {
  alert('you have entered the name ' + name);
}

// 9. Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
function takeNoArguments(){
  console.log('print something');
}
takeNoArguments();

// ### Additional Problem

// 10. Declare a function that, depending upon which virtual 'door' was entered, tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options.

// ## Grading Criteria

// 1. The "cheat sheet" is for the student's own use, so while it is required to be submitted, it doesn't need to be completely syntactically correct.

// 2. The syntax is correct and the code is indented properly.

// 3. All scripts should output the expected result.

// 4. At least 4 of problems 3 through 9 need to be completed.


