let num=[1,2,3,4,5,6,7]

// map
let newnum =num.map(x=>x*2);
console.log(newnum);

// filter 

let evennum= num.filter(x=> x%2==0);
console.log(evennum);

// reduce (x is accumulator and y is current value)

let sum=num.reduce((x,y)=>x+y,0);
console.log(sum)

let prod=num.reduce((x,y)=>x*y,1);
console.log("product= "+prod)

const student= [
    {name:"Aadya", score:70},
    {name:"Shree", score:30},
    {name:"shri", score:85},
    {name:"Amaya", score:50},
    {name:"dhanu", score:50},
];
// 1. display all scores of the students

// let score=student.map((x)=>{
//     return x.score
// })
// 2. add marks 
// console.log(score)
// console.log(score.reduce((x,y)=>x+y,0))

//  map and reduce together
// let score=student.map(x=>x.score).reduce((x,y)=>x+y,0)

// console.log(score)


// 3. sum if > 60

// let scores=student.filter(x=> x.score>60).reduce((x,y)=>x+y.score,0);
// console.log(scores);

// foreach

// let n=[12,3,3,4,4,4,4,98];
// n.forEach((x)=>{
//     if (x%3==0){
//     console.log(x)}
// });

// function 

// sayhello=()=>{
//     console.log("I am hello")
// }
// console.log("start");
// setTimeout(sayhello,3000)
// console.log("end");

// callback hell  solution is async await 
// difficult to read
//  maintain and 
console.log("start");
setTimeout(()=>{
    console.log("first task");
    setTimeout(()=>{
        console.log("second task");
        setTimeout(()=>{
            console.log("third task");   
            setTimeout(()=>{
                console.log("fourth task");    
            },200) 
        },1000)
    },2000)
},3000)
console.log("end");