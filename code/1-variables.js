/*
A const is a variable which cannot be re-assigned. Below you have a `const`
variable called `fruit` which is assigned the value "Apple".

Your task is to re-assign the `fruit` variable to "Orange" by re-assigning
the fruit variable a new value (so first it should be set to "Apple", and
then on another line, it should be assigned "Orange").
*/

// om man får ändra const till let
let fruit = "Apple";
fruit = "Orange";

/* om man måste behålla const
tagit hjälp av https://www.freecodecamp.org/news/understanding-let-const-and-var-keywords/
const fruit = {
    "fruit": "Apple"
}
fruit.fruit = "Orange";
*/


// To complete this task, you should see "The fruit is Orange" in the console.
console.log("The fruit is", fruit);