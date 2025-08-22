'use strict';
let haruna = 'money money';
//if(haruna == "money money") alert("thats true")
console.log('melvins scripting');
//console.log(0,1,3,1,0)
/*
damon ="human"
 damon ="changed back to vampire"
document.getElementById('good').innerHTML = damon;

for (let damon = 0; damon <= 100; damon++) {
    let damon = "vampire";
    console.log(damon);
}
 var plugHue = document.getElementsByClassName('hue')
    console.log(plugHue);
 for(let i = 0; i < plugHue.length; i++){
    let kai = plugHue[i];
    kai.addEventListener('click', function(event){
    console.log(kai);
    })
}
var folder = "indicating folder";
if (folder == "indicating folder") window.alert("this folder is actively possible")
function newRedmi(abc98){
 return (2,3,5) /(abc98)
} 
console.log(newRedmi("not implemented"))
*/
let javaScript = true;
console.log(true);
let manh;
console.log(manh);
console.log(typeof manh);
manh = 'men';
console.log(manh);
// this code below is suppose to return null but instead it returned object, this is a bug in javascript tha is not yet fixed//
console.log(typeof null);
//the below code is a terrible idea because this doesnt create a vvariable in the so called scope
let favourite = 'noodles';
console.log(favourite);
//operator allows us to transform values
const agePraise = 2040 - 2006;
const ageZoba = 2040 - 2003;
console.log(agePraise);
//greater which is false
console.log(agePraise > ageZoba);
//less which is true
console.log(agePraise < ageZoba);

console.log(agePraise & ageZoba);
console.log(agePraise | ageZoba);
console.log(agePraise || ageZoba);
console.log(agePraise >> ageZoba);
console.log(agePraise << ageZoba);
console.log(agePraise && ageZoba);
// the code below throws an error to the console if the condition is noty met.
/*
if(agePraise !== ageZoba){
    throw new TypeError("Invalid age comparison") || console.log(agePraise);
}
let night = 23;
if(night == 23) {
    throw new RangeError("request properly");
}
    */
const first = 90;

if (first <= 100) {
  // window.alert("grade A")
  console.log(first);
}
//    if(first >= 89) throw new TypeError('input a valid value');{
//      console.log(first);
//    }

//some math operations in javascript are executed right to left and the rest left to right//
let c, d;
c = d = 25 - 10 - 5; //ans = 10 and 10 because d = 10 and c is = d
console.log(c, d);
const averageAge = (agePraise + ageZoba) / 2;
console.log(averageAge);

const casualName = 'mazi';
const job = 'programmer';
const birthYear = 1991;
const presentYear = 2025;

const mazi =
  "i'm" +
  casualName +
  ',a ' +
  (presentYear - birthYear) +
  'old' +
  'and ' +
  "I'm" +
  'a' +
  job;
console.log(mazi);
// the  above is a regular string that will not be evenly spaced //

//the code below is a string that uses string templates literals syntax, it is evenly spaced//
const templateTest = `I'm ${casualName}, a ${
  presentYear - birthYear
} year old man, i'm a ${job}`;
console.log(templateTest);
console.log(`i am an awesome guy 
learning javascript`);
/*
const x = 50
const see = x % 50
console.log(see)
*/
// decision taking in javascript for the below code will involve if and else statements//
const age = 10;
const isOldEnough = age >= 18;
const yearsLeft = 18 - age;
// we use boolean value to take descision staments that involes if or else in javascript//
//note that condional statements are always noolean values//
if (isOldEnough) {
  console.log('she is old enough to drive!');
} else {
  console.log(`wait ${yearsLeft} more years...`);
}
// descision taking in javascript is one of the mosst important operations that is required, cause we take descision all the time in javascript //

// any variable defined inside a control structure block or any other block at all is automatically consolidated to that block, hence it can not be accssible outsie the block//
let century;
const birth = 1999;
const birthShit = birth <= 2000;
if (birthShit) {
  console.log('20th century');
} else {
  console.log('21th century');
}
// recaep we use the if and else control structure statements to take descisions in javascript//
// else executes only when the outcome is false and if executes if the outcome is true//
let IfGrade = 56;
let grading = IfGrade <= 50;
let house = IfGrade <= 60;
let room = IfGrade <= 80;

if (grading) {
  console.log('grade passed');
} else if (house) {
  console.log('grade B');
} else if (room) {
  console.log('grade A');
} else {
  console.log(' student failed ');
}

// The section below deals with type conversion and coersion
// in javascript there's type conversion and type coersion... they are two different things
// a type conversion is when we manually convert from on type to another
// while type coersion is when javascript automatically converts the data type for us behind the scene
// to convert a string to a number we use the function (Number(the string variable name))
// this is the example//

const inputYear = '2009';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

// if the string that yo are trying to convert doesnt contain any number javascript returns NaN (whivh means not a number)
console.log(Number('melvin'));
// you can also convert numbers to string with this function (String(the number or number variable name ))
const convNum = 23;
console.log(String(convNum));

// N/B that coercion happens when javascript is dealing with two variable that has  different data types
// the below code block shows the examples of type coercion//

console.log('i am ' + 23 + ' years old'); //when you concactinate a string and a number with the plus operator the JS type coercion converts the number to string in order to match the string
// howevr if the strings contains numbers and you use the minus operator it converts the strings to numbers//
console.log('2' - '0' - 12);
// this also apply to division and multiplication operators even comparism operators
console.log('3' > '5');
// Truety and  falsy values
// there are five falsesy values which are: 0, '' , undefined, null, and NaN.
// the values listed above would be false when converted to boolean
// everything else that follows is a truthy value
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean('image'));
console.log(Boolean({}));
//The only two scenerios when JS uses coersion on booleans is:during logical operations and during the use of if else statements(control structures)
const money = 0;
if (money) {
  console.log(`dont spend it all`);
} else {
  console.log(`you should get a job`);
}
// the else block is normally executed if the condition results in false//
let height;
if (height) {
  console.log(`YAY! heiht is defined`);
} else {
  console.log(`not actually`);
}
for (let i = 0; i <= 200; i++) {
  document.getElementById(
    'i'
  ).innerHTML = `${i}so this is how this things happen right?`;
  console.log(i);
  document.getElementById('i').style.color = 'blue';
  document.getElementById('i').style.fontSize = '5rem';
  document.getElementById('i').style.border = 'solid';
}
//Equality operators..............................................................//
const checkingAge = 19;
if (checkingAge === 19) {
  console.log(`He is a fucking adult!!`);
} else {
  console.log(`get the fuck out`);
}
const few = {
  Name: 'Melvin',
  Age: 21,
  University: 'Harvard',
};
console.log(few.University);
//.....................................................................................//
// TRIPLE equals like this (===) are called strict equality sign cause they involve in type coersions hence it only returns true when both sides are the same
//Double equals like this (==) are called loose equality sign they perform typer coersion unlike triple
if (checkingAge == 19) {
  console.log(`He is a fucking adult!!`);
} else {
  console.log(`get the fuck out`);
}

// But here is the problem with loose equality: it can introduce so many hard to find bugs.....so its advisible to use strict equality
//In javascript we use the {prompt()} function to get input from users and could manipulate it by storing it as a variable

/*
const getInput = prompt("what is our age");
console.log(`your new age in here is: ${getInput**2} years `);
console.log(typeof getInput)


if (getInput == 19){
    console.log(`you are now an adult`)
}else {
    console.log(`clumsy smurfet`)
}

// the below code would use strict equality
const geInput =Number( prompt("what is our age"));

if(getInput === 12){
    console.log(`your new age in here is: ${geInput**2} years `);
}
    */

/** 
const input = prompt(`i know you but still remind me of who you are`)
......................................................................
the above code block is used to collect and store input values from users and can be maniputed,
using the variale name 
*/

//....Basic boolean logic AND, OR, & NOT...............
const heIsGood = true;
const heIsAGuy = false;
console.log(heIsGood && heIsAGuy);
console.log(heIsGood || heIsAGuy);
console.log(!heIsGood);

const shouldMarry = heIsAGuy || heIsGood;
if (shouldMarry) {
  console.log(`proceed with marriage `);
} else {
  console.log(`don't marry`);
}

//NB curly brace is used to define a block of code

//........switch case statements.......
// switch case is an alternative way of writing complicated if else statements hence it compares one to multiple alternatives
/*switch case uses strict equality to compare variables and excutes that which is true...... the example would be in the code below
 */

const days = 'monday'; //prompt(`input anyday of the week`);
switch (days) {
  case 'monday': // stict comparism e.g : day === monday.
    console.log(`you gotta study`);
    console.log(`you gotta eat`);
    break;
  case 'tuesday':
    console.log(`the week has began`);
    break;
  case 'wednesday':
    console.log(`this the mid week i suppose`);
    break;
  case 'thursday':
    console.log(`approaching the weekend`);
    break;
  case 'friday':
    console.log(`thank God is friday`);
    break;
  case 'saturday':
    console.log(`its already weekend`);
    break;
  default:
    console.log(`its not the day of the week`);
}
/* importance of break; is that it tells the compiler to stop executing onces its done with that particular case, 
if there is no break then it would keep executing to the last one*/

//.......Statements amd expressions...........
/* An expression is a peice of that produces a value e.g:(2+4).
 Just like a declearation is more like a sentence thus expression is just like the words that make up the sentence
 While statements are sequence of actions, which is how we write our codes in order to take the discision true or false.
 in JavaScript whenever something ends with a semi-colon (;) its then a statement complete just like fullstop in a sentence
  */
// NB:  template literals (`` and ${}) to output values without stress

//.........The conditional or tinary operator........
/* A tinary operator allows us to write something similar to an if else statement but in a single line. 
 The difference is shown in the below code
 NB: it is called a tinary operator cause is has three parts, which are the condition, if and else part
 Also, an operator is an expression.... because it produces value*/
const a2 = 28;
a2 >= 18 ? console.log(`good`) : console.log(`bad`);
//OR//
if (a2 >= 18) {
  console.log(`good`);
} else {
  console.log(`bad`);
}
// the first code sample is tinary and the second is a regular if else statement//
//we could also write the tinary like an expression inside a variable, the e.g is below//
const tinary = a2 >= 23 ? `boy` : `girl`;
console.log(tinary);
// one advantage of tinary operator is that you can use it inside of a tamplate literal unlike if else statements and this is so because it is and expression and if else is a statement
//Note: tinary operator doesnt replace if else statement, it is just used to take a quick discision, it most like wouldnt work is there are multiple discion that exceeds three

//.........JavaScript releases and ecma script........
/*
    this info is my study note
    */
// ..............how to create strict mode in javascript.....//
// to activate strict mode all you need to do is write the string 'use strict';as the very firsrt line of the code and thats all
// strict mode helps to dictate errors in a more specific way

//............Functions........//
// functions are the fundamental building block of real world javascript applications
//furthermore a function is a piece of code that you can reuse over amd over again its almost like a variable
// but a fuction can hold multiple blocks of code unlike a variable that just holds value

function logger() {
  console.log(`my name is melvin`);
}
logger();
// when ever you call or summon or invoke a function it executes the block inside of its curly brace
// also note that a function recieve and return data
// parameters are variables that are specific to a function and they would get defined once the function is called

function fruitProcessor(apples, orange) {
  console.log(apples, orange);
  const juice = `orange juice with ${orange} orange and apple juice with ${apples} apples`;
  return juice;
}
const toBeExecuted = fruitProcessor(10, 2);
console.log(toBeExecuted);
const lessFruits = fruitProcessor(5, 1);
console.log(lessFruits);
const letsTest = fruitProcessor(3, 3);
console.log(letsTest);
//note a fuction can only return something when theres an argument and a parameter

//functon declaration
// function numberTest(number){
//     console.log(`number inputed ${number}`)
//     const double = `The doubled nuber is ${number * 2}`;
//     return double
// }
// const toBe = numberTest(prompt(`enter number`))
// console.log(toBe)
//the benefits of functions are that they allow you write more organized codes
//DRY means dont repeat yourself

//.......Function declarations vs expressoions.......
// a function without a name is called an anonymous fuction, it is use during function expression

// function expression
const calAge1 = function (birthYear) {
  const tyu = 2025 - birthYear;
  return tyu;
};
const print = calAge1(1988);
console.log(print);

//.................Arrow Function............//
//arrow function is a special type of function that is shprter and faster to write//
const Arrow = (ArrowFunc) => 2034 - ArrowFunc;
const deu = Arrow(2006);
console.log(deu);

// function retry(pass){
//     const testA = 2034-pass;
//    return testA
// }
//  const toPrint = retry(2006)
// console.log(toPrint)

// function aboutRetirement(currentAge,name,car ){
//     const age = 2025 - currentAge;
//     const retirement = 70 - age;
//     return `${name} would retire ${retirement} from now with a ${car}`
// }
// console.log(aboutRetirement(prompt(`input your birth year`),   prompt(`your name`), prompt(`your car type`)))

//.....Functions call other functions.......
function akaza(subject) {
  return subject * 6;
}
function muzan(rengoku, goku) {
  const hashira = akaza(rengoku);
  const suicide = akaza(goku);
  return `${hashira} didnt make it but ${suicide} actually did`;
}
console.log(muzan(12, 14));
// in javascript if two parameter names are the same
//  they are different if they are not inside the same function,
//  because each parameter is like a local variable to each function
//ctrl D, ALT ARROW KEY

function calAge(birthYear) {
  return 2025 - birthYear;
}
function whenToRetire(birthYear) {
  const retirement = 70 - calAge(birthYear);
  if (retirement > 0) {
    return `Still has ${retirement} to retire`;
  } else {
    return -1;
  }
}
console.log(whenToRetire(1999));

// THREE TYPES OF FUNCTIONS ARE FUNCTION DECLARATION, FUCTION EXPRESSON, ARROW FUNCTION
/* 
...function declaration:.....
function declaration(declear){
    const evox = 90 -declaration(declare)
    return evox
}
...function expression:.....
const declaration = function(declare){
      const evox = 90 -declaration(declare)
      return evox
}
.....Arrow function:....
const declaration = declare => 2037 - declaration;     
*/

//..........intro to Arrays......//
//An Array is a data structure is like a container where you can store multiple variables and then reference them later
const fr1 = 'chidubem';
const fr2 = 'favor';
const fr3 = 'felix';
//the above is a sample of declaring variables without an array//

const friends = ['chidubem', 'favour', 'felix'];
console.log(friends);
//hence the above is a sample of storing variable in a array...instead of having to use const all the time//

const years = new Array(199, 1956, 5677, 1345);
//the above is another way of creating arrays//
console.log(friends[0]);
//the above syntax is used to print a value in a specific position in the array
console.log(friends.length);
//the above is a syntax to print the number of variable to in the array
console.log(friends[friends.length - 3]);
friends[1] = 'praise';
console.log(friends);
//the only reason why the const we used to declare the variable didnt stop the changing of the variable was because only
//premitive values are immutable but an array is not a premitive value hence its mutable//
//NB you can have an array inside an array//

const Melvin = ['Melvin', 'IC', 'Techbro', 2025 - 2006, friends];
console.log(Melvin);

//NB you can invoke an array inside another array/
console.log(Melvin.length);

function calAge(birthYear) {
  return 2025 - birthYear;
}
const ArYear = [1945, 2000, 1899, 2003];

const y1 = calAge(ArYear[1]);
const y2 = calAge(ArYear[3]);

console.log(y1, y2);
//we can also place function calls into an array //
const functionCall = [calAge(ArYear[1]), calAge(ArYear[3])];
console.log(functionCall);

//....Basic array operations (methods).....//
//ADDS ELEMENTS
const friendss = ['chidubem', 'favour', 'felix'];
//methods are like functions that are attached to a variable//
const pushReturnFunctionLength = friendss.push('michael');
//This push() method above essentially adds an element to the end of an existing array//
console.log(friendss);
// the push() method is also a function, and functions return something afterwards, hence the push function returns the length of the array//
console.log(pushReturnFunctionLength);

// there is another method called the unshift()method which adds elements to the beginig of an existing array//
const unshiftprintAndReturnLength = friendss.unshift('smurfet');
console.log(friendss);
console.log(unshiftprintAndReturnLength);

//REMOVES ELEMRENT
//The pop() method is like the opposite of the push() method, this method remove removes the last element of the array
friendss.pop(); //in this method you need not pass any argument
const pop = friendss.pop();
console.log(friendss);
//in the case of pop() when its stored and logged it prints the value of the last element
console.log(pop);
//So the opposite of unshift() method which should remove the first element in an array is the shift() method
friendss.shift(); //this should print the first element in the array if store and logged
console.log(friendss);

//This method indexOf() returns the posistion of the element passed as a parameter
const index = friendss.indexOf('favour');
console.log(index);
//There is another method that is similar to indexOf() but this one returns true if the element is present and false otherwise
const included = friendss.includes('chidubem'); //NB the includes() method works with strict equality and doesnt allow type coersion
console.log(included);

//......Introduction to Objects......//
//objects are data structure in javascript thst gives values or elements a name, in object you use curly brace instead of square brackets
/*.......................................................................
const aboutMe = {
    FirstName:'IC',
    LastName: 'Melvin',
    Age: 2025-2006,
    friends: ['Praise','Kingsley','Smurfet'],
    Race: 'African'
};
console.log(aboutMe)
..............................................................................*/
//......Dot vs Bracket notation.....(ways of retrieving and changing data in objects)..//

const aboutMe = {
  FirstName: 'IC',
  LastName: 'Melvin',
  Age: 2025 - 2006,
  friends: ['Praise', 'Kingsley', 'Smurfet'],
  Race: 'African',
};
console.log(aboutMe);
//Do note that properties in object are ordered alphabetically when logged//
//DOT NOTATION//
const dotStuff = aboutMe.Race;
console.log(dotStuff);
//BRACKET NOTAYION//
console.log(aboutMe['FirstName']);
const nameKey = 'Name';
console.log(aboutMe['First' + nameKey]);
console.log(aboutMe['Last' + nameKey]);
//The example below is the scenerio were you need to use the bracket notation //
//lets take a look at how to add properties to the object using both the dot and brackrt notation//

aboutMe.location = 'EBONYI STATE'; // this and the line below adds properties to the existing object
aboutMe['height'] = '5ft 10';

/*const interestedIn = prompt(`what do you wonna know about the Emperor; FirstName, LastName, Age, Friends?`)
if(aboutMe[interestedIn]){
    console.log(aboutMe[interestedIn]);
    
}else{
    console.log(`We dont know all about him yet`)
}
    */

// A little pre-chanllenge

const pp = aboutMe.friends;
const Bf = aboutMe.friends[0];
console.log(`${Bf} is his best friend and ( ${pp})  are his group of friends`);

//.........Object Methods..........//
const aboutMee = {
  FirstName: 'IC',
  LastName: 'Melvin',
  friends: ['Praise', 'Kingsley', 'Smurfet'],
  Race: 'African',
  birthYearr: 2006,
  isHeMale: false,
  /*
    calage : function(birthYearr){ // i like to use function declaratinn but in order to make the fuction an objectKey, expression functtion had to be used 
        return 2037 - birthYearr;
    }
        */
  //duely  note that any that any function attacched inside an object is the objects method and a hence a property of the object

  // there is a javascript variable called (this) that allows you to access an already existing variable
  /*
    calage : function(){
        return 2037 -this.birthYearr;
    }
*/
  //there is also another way to use (this variable ) without having to invoke it all the time
  calage: function () {
    this.age = 2037 - this.birthYearr;
    return this.age; //whether you return this or not it doesnt matter as long as the (this keyword or variable is there)
  },

  //...mini challenge....

  //using control structures
  getSummary: function () {
    const mini = `${this.FirstName} ${
      this.LastName
    } is a ${this.calage()} years old guy and he is male`;
    const mini2 = `${this.FirstName} ${
      this.LastName
    } is a ${this.calage()} years old guy and he is not male`;
    if (this.isHeMale) {
      console.log(mini);
    } else {
      console.log(mini2);
    }
  },

  //using tinary operator
  getsum: function () {
    return `${this.FirstName} ${
      this.LastName
    } is a ${this.calage()} years old guy and he ${
      this.isHeMale ? `is` : `is not`
    } male `;
  },
};
console.log(aboutMee.calage());
console.log(aboutMee.getSummary());
console.log(aboutMee.getsum());
//console.log(aboutMee['calage'](2025))
//a function declaration doesnt work inside an object

//ctl d is for editing multiple or add next occurance

//just trying stuff out
document.getElementById('1').style.color = 'white';
let Name;
document.getElementById('button').onclick = function () {
  Name = document.getElementById('text').value;
  console.log(Name);
};
