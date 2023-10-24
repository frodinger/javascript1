// Functions are a way to store a re-usable snippet of code in a block which can
// be run later. For example, this function would print the current time when invoked:
const printCurrentTime = () => {
    const currentTime = new Date()
    return currentTime.toLocaleTimeString()
}

// Task 1: Invoke the printCurrentTime function inside a console.log():


// Task 2: Write a function which, when invoked, prints your name. Then invoke it twice.


// Task 3: Write a function called `printGreeting`. When invoked using the examples
// below, it should print "Hello Bob" or "Hello Sue":
//
// printGreeting("Bob") // This should print "Hello Bob"
// printGreeting("Sue") // This should print "Hello Sue"


// Task 4: Write a function called `multiply` which multiplies two numbers together and returns the value
// so that it can be stored in a variable. See the example below to see how it should work.
//
// const first = multiply(2, 2)
// console.log(first) // this should print "4"
//
// const second = multiply(100, 4)
// console.log(second) // this should print "400"


// Task 5: Write a function called `warmEnough` which takes the current temperature as an argument and returns
// `true` if it is greater than 10 and false otherwise. Comment out the code below to invoke the
// function. It should print "Go for a run!"
//
// if (warmEnough(15)) {
//   console.log("Go for a run!")
// }