// if we use "use strict" we have to follow all the rules strictly else you can bypass let or var 

// "use strict" 
// _=7;
// let a=13
// let b=97/7
// let bc="hi"
// let bd=[1,2,34]
// let be={
//     name:'aadi',
//     rno:1
// }
// f=true
// function display()
// {
//     console.log(_);
//     console.log(typeof(a))
//     console.log(typeof(b))
//     console.log(typeof(c))
//     console.log(typeof(d))
//     console.log(typeof(e))
//     console.log(typeof(f))
//     console.log(a)
// }

// type conversion --------------

// let x="12"/"6"
// console.log(x)
// let bol=true;
// let str=String(bol);
// console.log(str.charAt(1));

// // let str1="10";
// // let num=Number(str1);
// 
// console.log(typeof(num))

// Boolean me anything except 0 gives true 

// let str2="true";
// let num=Boolean(0);
// console.log(num);


// confirm --------------

// function display()
// {
//     let x=confirm("Are you sure you wanna submit ");
//     alert("users choice : "+x)  // ok ==> true will prompt and cancel ==> false will prompt
// }


//  prompt -------------

// function display()
// {
//     let x=prompt("your name: ","Aadya");
//     alert(x) 
// }

function verify()
{
    let uname=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    let p1 = document.getElementById("msg");
    if(uname==="" || pass==="             ")
    {
        p1.innerHTML=" ";
    }
    else if (uname==="admin" && pass==="admin")
    {
        p1.innerHTML="Login successful";
    }
    else 
    {
       p1.innerHTML="Login unsuccessful";
    }


}