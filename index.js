/*Write an if...else statement that:
prints "even" if the number is an even number
prints "odd" if the number is an odd number
Hint: Use the % (modulo) operator to determine if a number is even or odd. The modulo operater takes two numbers and returns the remainder when the first number is divided by the second one: 
 */
let number = 42   
    if( number % 2 === 0){
        console.log("This number is Even")

    }
    else{
        console.log("This number is Odd")
    }


/* Musical groups have special names based on the number of people in the group. For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.
 */

function testMusicials(musicians){
    if ( musicians <= 0) {
        console.log("not a group");
    } 
    else if (musicians === 1){
        console.log("solo");
    }
    else if (musicians === 2){
        console.log("duet");
    }
    else if (musicians === 3){
        console.log("trio");
    }
    else if (musicians === 4){
        console.log("quartet");
    }
    else if (musicians > 4){
        console.log("this is a large group");
    }
    else {
         console.log("group does not exist");
    }
}

/**
 * 
 *For this quiz, you're going to help solve a fictitious murder mystery that happened at Stutern! A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.
Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:
four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.

 */

let weapon = " knife";
let room = "dinning";
let suspect = "Mr Parkes";
let solved = false

if (room =="ballroom" && suspect == "Mr. Kalehoff"){
    weapon == "poison"; solved = true

} else if (room =="ballroom" && suspect == "Ms. Van Cleve"){
    weapon == "Gallery"; solved == true
}
 else if (room =="billiards" && suspect == "Mrs Sparr"){
    weapon == "pool stick"; solved == true

} else if (room =="dinning " && suspect == "Mr Parkes"){
    weapon == "knife"; solved == true
}
else{ suspect == ""

}

console.log( suspect + " did it in the " + room + " with the" + weapon + " !" )

/**
 Using the flowchart below, write the code to represent checking your balance at the ATM. The yellow diamonds represent conditional statements and the blue rectangles with rounded corners represent what should be printed to the console. 
 */

 let statement = "";
 let isActive = true;
 let checkBalance = true;
 let balance ;
 
 if (checkBalance == false){
     statement = "Thank you. Have a nice day!";
 } else if (isActive == true && balance > 0){
     statement = "Your account balance is $" + balance.toFixed(2) + ".";
 } else if (isActive == false) {
     statement = "Your account is no longer active.";
 } else if (balance == 0){
     statement = "Your account is empty.";
 } else {
     statement = "Your account is negative."; 
 }



 /**
 * Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true
 */


let flavour;
let vessel;
let toppings;
let statement = "I'd like two scoops of flavour ice cream in a vessel with toppings.";

if ((flavour == "vanilla" || flavour == "chocolate") && (vessel == "cone" || vessel == "bowl") && (toppings == "sprinkles" || toppings == "peanuts")){
        statement = statement.replace("flavour", flavour);
        statement = statement.replace("vessel", vessel);
        statement = statement.replace("toppings", toppings);
    } else {
        statement = "";
    }
/**
 * If you're like me, finding the right size t-shirt can sometimes be a challenge. What size am I? What's the difference between S (small), M (medium), and L (large)? I usually wear L, but what if I need an XL (extra large)?
Thankfully, our friends at Teespring have got us covered because they've created a sizing chart to make things a lot easier.
 */
 var shirtWidth;
 var shirtLength;
 var shirtSleeve;

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength< 29 ) && ( shirtSleeve >= 8.13 && shirtSleeve < 8.38)){
    console.log("Small");
    
} else if((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength< 30 ) && ( shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("Medium");

} else if((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength< 31 ) && ( shirtSleeve >= 8.63 && shirtSleeve < 8.88)){
    console.log("Large");

} else if((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength< 33 ) && ( shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
    console.log("XLarge")

} else if((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength< 34 ) && ( shirtSleeve >= 9.63 && shirtSleeve < 10.13)){
    console.log("XXLarge");

} else if((shirtWidth >= 28 && shirtWidth < 36) && (shirtLength >= 34 && shirtLength< 40) && ( shirtSleeve >= 10.13 && shirtSleeve < 13.13)){
    console.log("XXXLarge");
} else {
    console.log("Not Available");
}

/**
 * From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.

 */

var eatsAnimals = true;
var eatsPlants = true;

let foodChain = eatsAnimals && eatsPlants ? "omnivores" : eatsAnimals ? "carnivores" : eatsPlants ? "herbivores" : undefined

console.log(foodChain);

/*
* Programming Quiz: Back to School
*
* Write a switch statement to set the average salary of a person based on their type of completed education.
*
*/


var education = "no high school diploma";
let salary = 0;

switch (education) {
    case "no high school diploma": salary = 25636;
        
        break;

    case "a high school diploma": salary = 35256;
        break; 
    case "an Associate's degree": salary = 41496;
        break;
    case "a Bachelor's degree": salary = 59124;
        break;
    case "a Master's degree": salary = 69732;
        break;
    case "a Professional degree": salary = 89060;
        break;
    case "a Doctoral degree": salary = 84596;
        break;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year");