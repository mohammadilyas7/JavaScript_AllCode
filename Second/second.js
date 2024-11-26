let a = 5;
let b = 2;

//Arithmatic Operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);

console.log(a**b);  // a ka squere
console.log(++b); 


//Unary Opretaors
console.log(" a = ",a,"b = ",b);
console.log("a++ =",a++);
console.log(a);

//Assigment Operators
console.log("Assigment Operators");
console.log(a+b);

a += 4;
console.log(a);

a -= 4;
console.log(a);

a %= 4;
console.log(a);

a /= 4;
console.log(a);

//Practice one 
let num  = prompt("Enter a number");
console.log(num,"print");
if(num % 5 === 0){
    console.log(num,"is a multiple of 5");
}else {
    console.log("assalam aliakum");
    console.log(num,"is a Not multiple of 5");
}

/*Write a code which can give grades to students 
according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/

let score = 75;
let grade;

if(score >= 90 && score<= 100){
    grade = "A";
}else if(score >=70 && score<=890){
    grade = "B";
}else if(score >=60 && score<=69){
    grade ="C";
}else if(score >= 50 && score <= 59){
    grade = "D";
}else{
    grade = "F";
}

console.log("according to your score your grade was :",grade);