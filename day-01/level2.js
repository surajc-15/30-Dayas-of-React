//Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
// import { countries } from './countries.js';
// import { web_techs} from './web_techs.js';

// console.log(countries);
// console.log(web_techs);


//3.First remove all the punctuations and change the string to array and count the number of words in the array
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

//remove the punctuation
text=text.replace('.','');
console.log(text);
let words=text.split(' ');
console.log(words)
console.log(words.length)

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart[0]!='Meat'?shoppingCart.unshift('Meat'):{};
console.log(shoppingCart);

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart[shoppingCart.length-1]!='Sugar'?shoppingCart.push('Sugar'):{};
console.log(shoppingCart);

//remove 'Honey' if you are allergic to honey
let allergic=true
allergic?shoppingCart.splice(shoppingCart.indexOf('Honey'),1):{}
console.log(shoppingCart);

//modify Tea to 'Green Tea*/
shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea'
console.log(shoppingCart);



//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
// const fullStack=[frontEnd,backEnd];
const fullStack=frontEnd.concat(backEnd);
console.log(fullStack);
console.log(frontEnd);



