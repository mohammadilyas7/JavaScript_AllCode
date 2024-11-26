let heroes = ["thor","robert dony","hulk","loki","lowa"];

// console.log(heroes);
// console.log(heroes[2]);

// for(let i=0; i<=heroes.length; i++){
//     console.log(heroes[i]);
// }

// length of heroes array 
console.log(heroes.length);
for(let hero of heroes){
    console.log(hero.toUpperCase());
}

let marks = [85,90,55,74,80,66];
let sum = 0;

for(let mark of marks){
    sum = sum + mark;
}
console.log("sum of all marks",sum);
console.log("average marks of subject is : ",sum/marks.length);