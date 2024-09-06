const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age 
ages.sort()
console.log(ages);

//- Find the median age(one middle item or two middle items divided by two)
const n=ages.length;
if(n%2!=0){
    let index1=Math.floor(n/2);
    console.log("Median age is :",ages[index1]);
}
else{
    let index1=n/2;
    console.log("Median is ",(ages[index1]+ages[index1+1])/2);
}
// - Find the average age(all items divided by number of items) 
let average=0;
for(let age of ages){
    average+=age/n;
}
console.log("average age is;",average);


//- Find the range of the ages(max minus min) 
console.log("range of ages is :",ages[n-1]-ages[0]);

//- Compare the value of (min - average) and (max - average), use abs() method
Math.abs((ages[0]-average))>Math.abs(ages[n-1]-average)?console.log("there are many students whos are younger than average people"):console.log("many on right side");

