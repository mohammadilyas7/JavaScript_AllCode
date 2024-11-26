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
    // sum = sum + mark;
    sum += mark;
}
console.log("sum of all marks",sum);
console.log("average marks of subject is : ",sum/marks.length);


let items = [250,645,300,900,50];
console.log(items);
// let i = 0;
// for(let item of items){
//     // console.log('index value ${i}= ',items[i]);
//     let offer = item / 10;           //after 10 d
//     items[i] = items[i] - offer;
//     console.log('after offer ${i} = ',items[i]);
//     i++;
// }

for(let i=0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log('After discout Array ')
console.log(items);

let number = [250,645,300,900,50];
// method of this pop() ,push() and toString()

number.push(22,55,77);
console.log(number);    
number.pop();
console.log(number);  
console.log(number.toString());

