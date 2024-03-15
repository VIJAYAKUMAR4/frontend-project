// console.log("this is my external ")


// let str ='this is my phone'
// let str2="this is my phone's"
// let str3=`this is "vijay's" phone`



//let str ="smith";
//let str2 ="phone";

//console.log(str +"\n"+ str2);


//console.log(`$`{str}`$`{str2});

// let num = 1
// console.log(typeof num);

// let num2 =5.25
// console.log(typeof num2);

// let num3 =-5
// console.log(typeof num3);

// let num4 =10/2;
// console.log(typeof num4);

// let findnumberMax =Number.MAX_SAFE_INTEGER;

// let findNNumberMin =Number.MIN_SAFE_INTEGER;

// console.log(findnumberMax);

// console.log(findNNumberMin);

// let num1 = 2** 53 -1;

// let num2 = -(2 ** 53 - 1);

// console.log(num1+" "+ num2);

// console.log(9007556857397996n + 2);

//console.log(typeof 9n)

//BOOLEAN

//let bool1 = true;
//let bool2 = false;

//console.log(typeof bool1);
//console.log(typeof bool2);

//NULL

//let vijay =100;
//let kiruba =null;

//console.log(typeof vijay);
//console.log(typeof kiruba);

//UNDEFIND
//-->IT IS A KEYWORD-->IT HAS VALUE IN JS.
//when a variable declared in js ,js engine implicitly assign a 
// value called undefind.  

// var a;
// console.log(a);
// a=10;
// console.log(a);

// var b;
// console.log(b);
// b=20;
// console.log(b);

// let person={
//     ename : "smith",
//     color : "red"
// }

// console.log(window)
// console.log(person)

// console.log(typeof person)

//VARIABLES
//-->Named block of memory-->1)var 2)Let 3)const
//-->To store data's
//-->JS dynamically typed language

//variables
//CONST-->ONLY decelaration and initialiation can  be done once.
//     -->NO re-decleration and re-initilation
// const love ="marriage"
// console.log(love)

//LET-->re-decleration and re-initilation is not possible,

// let love;
// love = "priya";
// love = "robin";
// console.log(love); 

// let love2="marriage"



// console.log("start")
// var a =10;
// var a =20;
// console.log(a)
//      a = 60;
//      var b =20;
//      console.log(c)
//      console.log(a)
//      console.log("end")

// var a = 1;
// var b = "1";
// var c = a+b;
// console.log(c)// (+)STRING convert to NUMBER
// console.log(typeof c)

// var a = 6;
// var b = "1";
// var c = a-b;
// console.log(c)
//  console.log(typeof c)


// var a = 6;
// var b = "1a";
// var c = a*b;
//  console.log(c)
// console.log(typeof c)


// var a = alert("this is my alert arumugam")
// console.log(a)

// var a = confrim("this is my alert arumugam")
// console.log(a)

// var a = prompt("enter user name")
// console.log(typeof a)

// var b =Number(prompt ("enter the age"));
// console.log(b)
// console.log(typeof b)

// var a = Number("a")
// cosole.log(a)]

// var a1 = Number(true)
// console.log(a1)
// console.log(typeof a1)

// var a1 = string(99)
// console.log(a1)
// console.log(typeof a1)

// var a1 = Boolean(undefind)
// console.log(a1)
// console.log(typeof a1)


//LEXICAL BLOCK-->ability of js engine search for variable in block
// var a= 10;
// {
//     let a = 20
//     console.log(a)

// }
//     console.log(a)

// HOISTING --> calling A  variable before a declaration is hoisting.
//TEMPORAL DEAD ZONE-->TIME GAP B/W DECLARATION AND INISTILATION
// variable which are belong to tdz we can not make hoisting.
// console.log(a)
// var a ;
//     a= 10;
// console.log(a)

// //LET AND CONST WILL NOT SUPPORT HOISTING.
// console.log(a)
// let a ;
//     a= 10;
// console.log(a)

// let gparent ="d&I";
// {
//     var child="d&I";
//     {
//         gparent="re -init";
//         {
//             child="re -init";
//             {,
//                 console.log(gparent);
//                 console.log(child);
//                 console.log(window.gparent);
//                 console.log(window.child);
//             }
//         }
//     }
// }

// var a1 = 50;
// {
//     let a = 45;
//     var a1 = 95;
//     {
//         let a= 55;
//         var a1 = 105;
//         console.log(a);
//         console.log(window.a1);
//     }
//     a="parent";
//     console.log(a);
//     console.log(a1);
// }
//  console.log(a1);/


  // Way to create string  --> string literal & string object (new keyword)
    
  //string literal
//     let a = "smith"
//     console.log(a instanceof string)
// // new keyword
//     let a1 =

// call by value(primitive data type)
    // let a = "java"

    // let vijay = a

    // a = "web"

    // console.log(a)

    // console.log(vijay)

// CALL BY REFERENCE(non primitive data type)-->it can not b
      //  let home = {
      //   value:20
      //  }
      //  let vijay = home;
      //  console.log(home)

      //  vijay.value=50;

      //  console.log(home.value)
      //  console.log(vijay.value)

      // let a = 20
      // let b = 40
      // console.log(a+b)
      // console.log(1-b)
      // console.log(a/b)
      // console.log(a%b)
      // console.log(a++)
      // console.log(a**b)
      // console.log()
      //   var a1 = prompt("enter user name")
      //  console.log(typeof a)
       

      //compound assignment
    
      // var a
      // a=10
      // var c= a + 5
      // console.log(c)
      
      // let a =100
      // let b =200
      // console.log(a<b)
      // console.log(a>b)
      // var str1 = "string"
      // var str =  "string"
      // console.log(str1 == str )
      //  var str1 = new String('smith')
      //  var str2= new String('smith1')
      // console.log(str1 == str2)
      // console.log( null == null) 
      // console.log(Number(null))

      // var str1 = new String("smith")
      // var str2 = new string ("smith")
      // console.log(str1.valueof() == str2)

      //STRITLY EQUALS

      // var a = "smith"
      // var b = "smith"
      // console.log(a === b)
     
      // var a = "smith"
      // var str1 = new String("smith")
      // console.log(a === str1.valueOf())
      // //valueof --> is used to change data type(primitive to non-primitive data type)
      // var str = new String ("smith");
      // var str2 = new String("smith");
      // console.log(str.valueof() === str2.valueof());

     // THIS KEYWORD-->IS USED IN 3 WAYS IN JAVA SCRIPT-->1)variable 2)function 3)object


      // let a = 10
      // { 
      //   let a = 20 
      //   console.log(a)
      //   console.log (this.a)
      // }
      // console.log(a)
      
      // FUNCTION

      // console.log("start")
      //  function sum(a1,a2)
      //  {
      //   console.log(a1+a2)
      //  }
      //  sum(2920,374)
      //  sum(49,58)
      //  console.log("end")

      // console.log("stsrt")
      // function fire( )
      // {
      //   console.log("am fire")
      //   water()
      // }
      // function  water( )
      // {
      //   console.log("am water")
      //   console.log("am done my work")
      // }
      // fire()
      // console.log("end")
// function expression
    // console.log("start")
    // var num1 = 10;
    // var num2 = 5;
    // sum (num1,num2)
    // let sum = function add(a,b)
    // {
    //   console.log(a1+b1)
    // }
    // console.log("end")
    // console.log("start")
    // function sum()
    // {
    //   console.log("am sum")
    // }
    // sum()
    // console.log(sum)
    // console.log("end")
    // // function sum()
    // // {
    // //   console.log("hey am sum")
    // // }
    // // sum()
    // // console.log(sum)
    // // console.log("end")
    //USING RETURN

    // console.log("start")
    // function sum()
    // {
    //   for(i = 0;i<2;i++)
    //   {
    //     for(j=0;j<2;j++)
    //     {
    //       if(i==j)
    //       {
    //         console.log("if block executed")
    //         return i;
    //       }
    //       console.log("inner")
    //     }
    //     console.log("outer")
    //   }
    // }
    // console.log(sum())
    // console.log("end")

    //Arrow function-->not support function hoisting
    //               -->because short hand property of function experssion
     //               --> introduse in es6
                     --> we can have return keyword in 2 ways implicit return explicit return
                     --> implicit return:when function body contain only one line 

    let add = (a1) => a1+10;
    let sub =(a1,a2) =>{
      return a1 -a2;
    }
    console.log(sub(10,5))
    console.log(add(10));