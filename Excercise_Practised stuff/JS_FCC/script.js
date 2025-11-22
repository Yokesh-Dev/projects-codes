// To add fumctionlaity and store the increment nos
let countEl= document.getElementById("count-el")
console.log(countEl);

var count = 0
function increment() {
  count += 1
  countEl.innerText =count
}
 
// To add fumctionlaity and save the number on save btn
function save(){
var savedData =count;
console.log(savedData)
}
//Welcome Message
var welcomeEl =document.getElementById("welcome-el")
var namee = " yok "
var greeting =" Welcome Back"
var  namee = namee + '🏋🏻‍♀️';
greeting += " ad "  //shortcut to add strings
welcomeEl.textContent = greeting  + namee

//Saving  element
let saveEl = document.getElementById("save-el")
console.log(saveEl)
function save() {
  let countStr =count + "-" 
saveEl.textContent += countStr;
console.log(count);
}






/*   
TODO: Challenges 
*Challenge 1 
let myAge= 23;
console.log (myAge);  
* Challenge 2 
 1 human year == 7 dog year 
let myAge =23;
let HumanDogRatio =7; 
console.log(myAge * HumanDogRatio);
* Challenge 3 
var bonusPoints =50;
 var bonusPoints=100;
 var bonusPoints= bonusPoints-75;
 var bonusPoints=bonusPoints+45;
console.log(bonusPoints)
* Discount calculator
var TotalTariff = 10000;
let FixedDiscount = 10;
var DiscountCalculation = TotalTariff/100 *FixedDiscount;
Payment =TotalTariff- DiscountCalculation;
console.log(Payment)
* Increment functions
var lap = 1;
function lapsCompleted (){
  lap = lap + 1
}
lapsCompleted();
lapsCompleted();
lapsCompleted();
console.log(lap);


TODO: Learnings 
let count =5 ;
let BatchOne=count;  // ! asssigning a variable to other variable 
let BatchTwo=7;
console.log(BatchOne + BatchTwo); //! Adding two variable  

var myPackageIn2024 = 4;  // ! Reasigning the value of Variable but not possible in let and const
var myPackageIn2024 =8;
console.log(myPackageIn2024);


var myPackageIn2024 = 4; // ! Incrementing  
var myPackageIn2054 =myPackageIn2024 + 5;
console.log(myPackageIn2054);

console.log(1);  // ! Race  1 start  
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log(1);  // ! Race  1 ends and Race 2 starts  
console.log(2);
console.log(3);
console.log(4);
console.log(5); // ! Instead of console loging several times you create a function and run it as much as you can 

function countDown() // ! Create a function 
{
console.log(1);  // ! command what needs to be excecuted when () called
console.log(2);
console.log(3);
console.log(4);
console.log(5);
}
countDown(); // ! Calling the function


function laps() {  // ! If the variables are let or const can access as out of scobe global variables  and ther is no variable to store value
    console.log (lap1+lap2+lap3);
}
function lapStoring() {  // stores values
    let TotalLap =lap1+lap2+lap3;
    console.log (TotalLap);
}


*/

