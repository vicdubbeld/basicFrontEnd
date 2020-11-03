//Lengthens box

document.getElementById("button1").addEventListener("click", function () {
  document.getElementById("box").style.height = "300px";
});

// Changes color of box from orange to blue
document.getElementById("button2").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "blue";
});

//Makes box appear more transparent
document.getElementById("button3").addEventListener("click", function () {
  document.getElementById("box").style.opacity = "0.1";
});

// Makes box skinny
document.getElementById("button4").addEventListener("click", function () {
  document.getElementById("box").style.width = "25px";
});

//Resets box to original state
document.getElementById("button5").addEventListener("click", function () {
  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.backgroundColor = "orange";
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.width = "150px";
});

// Creates a Function called "adder" that takes three arguments (x, y, z).
function adder(x, y, z) {
  // The function should add the arguments together, and log the result to the console.
  console.log(x + y + z);
}

// We can also create a version of "adder" that returns its result.
function adderReturn(x, y, z) {
  return x + y + z;
}

// Creates a Function called "multiplier" that takes three arguments (x, y, z).
function multiplier(x, y, z) {
  // The function should multiply the arguments, and log the result to the console.
  console.log(x * y * z);
}

// We can also create a version of "multiplier" that returns its result.
function multiplierReturn(x, y, z) {
  return x * y * z;
}

// Creates a Function called "isString" that takes three arguments (x, y, z).
function isString(x, y, z) {
  // isString checks if each argument is a string using typeof.

  // If each argument is a string it will note that.
  if (typeof x === "string" && typeof y === "string" && typeof z === "string") {
    console.log("Yep. They are all strings");
  }

  // If anyone of them is NOT a string... it will note that.
  else {
    console.log("No... I don't believe these are strings.");
  }
}

// Creates a Function called "vowelChecker" that takes in a single argument (x).
function vowelChecker(x) {
  // vowelChecker will grab the first letter (character)...
  var firstChar = x.toLowerCase().charAt(0);

  // Then check if that first letter is a vowel.
  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    // If so... it will log that.
    console.log("The first letter is a vowel!");
  } else {
    // If not... it will log that.
    console.log("First letter is NOT a vowel. *sadface*");
  }
}

// FUNCTION EXECUTION
// ================================================================================

// Each of the below lines of code is what actually "calls" or "runs" the functions.
// Without the below code, the functions above are like workers just waiting to be called into action.

// Calling our adder function.
adder(1, 2, 3);

console.log("-------------------");

// If we use the version that returns its result:
var result = adderReturn(1, 2, 3);
console.log(result);

console.log("-------------------");

// Calling our multiplier function.
multiplier(2, 3, 4);

console.log("-------------------");

// If we use the version that returns its result:
result = multiplierReturn(2, 3, 4);
console.log(result);

console.log("-------------------");

// Calling our isString function.
isString("Ahmed", "Bad", "Monkey");
isString(2, "Way", "Street");

console.log("-------------------");

// Calling our vowelChecker function.
vowelChecker("Eek");
vowelChecker("Nah");
