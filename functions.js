// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting(name) {
    console.log(`Howdy ${name}.`);
  }
  printGreeting("Y'all")
  printGreeting("Devynne")
  printGreeting("Frank")

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function add(num1, num2, num3, num4) {
    var sum = (num1 + num2 + num3 + num4);
    console.log(`When we add all the numbers together, we get ${sum}!`)
  }
  add(2, 4, 6, 8)

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function payRange(name, min, max) {
    var salaryRange = (max - min);
    console.log(`${name} has positions with a salary range of ${salaryRange}.`);
    }
    
    payRange("Banana Stand", 120000, 80000)

// 4: Write a function that satifies the following interaction pattern:

checkStock(4, "Coffee");
// => "Coffee is stocked"

 

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"



checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"



checkStock(1, "Salsa");
// => "Salsa - running LOW"



    function checkStock(num, groceryItem) {
        if (num === 4) 
            console.log(`${groceryItem} is stocked!`);
       else if (num === 3) 
         console.log(`${groceryItem} are running low.`)
       else if (num === 0) 
       console.log(`${groceryItem} is OUT of stock!`)
      else if (num === 1) 
        console.log(`${groceryItem} is running low.`)
      }
        checkStock(4, "Coffee");
        checkStock(3, "Tortillas");
        checkStock(0, "Cheese");
        checkStock(1, "Salsa");