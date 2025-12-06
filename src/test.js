

// Use sort() to place even numbers before odd numbers.

let numbers = [3,5,4,1,2,7,11,10,6,9,8];

numbers.sort ((a,b) => {
    if (a%2 === 0 && b%2 !== 0 )
        return -1;
    else if (a%2 !== 0 && b%2 === 0)
        return 1;
    else 
        return 0;

});
console.log(numbers); 

// Use splice() to insert "orange" at index 1.

let fruits =["apple", "bannana", "grape"];

fruits.splice (1,1,"orange");

console.log(fruits);


// 1. Write a function that sorts an array of objects by a key value (e.g., sort employees by salary).

const employees = [
    {name:"nick", pay:"29000"},
    {name:"john", pay:"32000"},
    {name:"jane", pay:"28000"},
    {name:"doe", pay:"35000"},
    {name:"smith", pay:"14000"},
]

const high = employees.sort ((a,b) => {
    return a.pay - b.pay;
});
console.log(high);

const low = employees.sort ((a,b) => {
    return b.pay - a.pay;
});
console.log(low);




