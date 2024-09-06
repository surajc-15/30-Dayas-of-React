
//1,2 empry array with more than 5 ele
let arr=new Array(6);
arr=[1,2,3,4,5,6]


//3.length of the array
console.log("Length of the Array is ",arr.length);

//4.
let mixedDataTypes=[1,2,'chara',{num1:1},5,7,'9']
let itcompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itcompanies)
//8
console.log("no of comapnies in the list is:",itcompanies.length);

//9.companies start middle etc
console.log("First company ;",itcompanies[0]);
console.log("Middle company :",itcompanies[Math.floor(itcompanies.length/2)]);
console.log("last company :",itcompanies[itcompanies.length-1]);

//10.printout each company
console.log("list of all companies");

for(let i=0;i<itcompanies.length;i++){
    console.log(itcompanies[i]);
}

console.log("other method");
for(let item of itcompanies){
    console.log(item);
    
}   //0 1 2 3 4 5 6 it results index insteadof name

//11.Change each company name to uppercase one by one and print them out
console.log("upper case ")
for(let i=0;i<itcompanies.length;i++){
    itcompanies[i]=itcompanies[i].toUpperCase();
    console.log(itcompanies[i]);
}

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence="Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies";
console.log(sentence);

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let checkCompany="Apple";
itcompanies.includes(checkCompany)?console.log("company exist"):console.log("company does not exist");

//14.ilter out companies which have more than one 'o' without the filter method
let collection={};

function getcount(word,tchar){
    let count=0;
    for(let char of word){
        if(char==tchar){
            count++;
        }
    }
    return count;
}

for(let company of itcompanies){
    if(!collection[company]){
        collection[company]=getcount(company,'O');
    }
}

//now print company list
console.log(Object.keys(collection));

//15.Sort the array using sort() method
console.log(itcompanies.sort());

//16.Reverse the array using reverse() method
console.log("reversed arrays is;",itcompanies.reverse());

//17.Slice out the first 3 companies from the array
console.log(itcompanies.slice(0,3));

//18.Slice out the last 3 companies from the array
console.log(itcompanies.slice(itcompanies.length-3,itcompanies.length));

//19.Remove the first IT company from the array
console.log(itcompanies.splice(0,1));
console.log(itcompanies);


//20.Remove the last IT company from the array
console.log(itcompanies.pop());

//23.Remove all IT companies
console.log(itcompanies.splice(0,itcompanies.length));
console.log(itcompanies);


