// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askName() {
  console.log("Hello, what is your name?")
}

askName()

// I changed the verb in the name to make it more clear.

// EX 2:
function add(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

add(1, 2, 3);
add(4, 2, 7);
// I change the name to make it easier to type out and change down the road if we wanted to add more or take away numbers
// I also deleted some weird spacing in there, as well as added a semi colon after the second line.

// EX 3:
function makeFreshPesto(ingredients, instructions) {
  console.log(`I first purchase ${ingredients}. I then follow these steps, ${instructions}. Enjoy!`)}
  makeFreshPesto("basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper","pulse basil and pine nuts. Add garlic and cheeses. Slowly pour in oil and season");


// I minimized the amount of console.logs to one, and string interpolated the arguments into the console.log.

//  EX 4:

  function avg(num1, num2) {
    var sum = num1 + num2;
    var avg = sum /2;
    console.log(`The average is: ${avg}`)
  }
  avg(6,10)

      //I changed the name to just avg. I deleted some weird spacing things.
      //I also added a call and arguments, to give value to num1 and num2 and to make the code actually work.