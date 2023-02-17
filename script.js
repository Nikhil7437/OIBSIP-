let eight = document.getElementById("eight").innerText;
let nine = document.getElementById("nine").innerText;
let four = document.getElementById("four").innerText;
let five = document.getElementById("five").innerText;
let six = document.getElementById("six").innerText;
let one = document.getElementById("one").innerText;
let two = document.getElementById("two").innerText;
let three = document.getElementById("three").innerText;
let zero = document.getElementById("zero").innerText;
let equal = document.getElementById("equal").innerText;
let sub = document.getElementById("sub").innerText;
let plus = document.getElementById("plus").innerText;
let divide = document.getElementById("divide").innerText;
let multi = document.getElementById("multi").innerText;
let point = document.getElementById("point").innerText;
let cancle = document.getElementById("cancle").innerText;
let clear = document.getElementById("clear").innerText;
let perc = document.getElementById("perc").innerText;
let str = ""
let seven = document.getElementById("seven").innerText;

console.log(document.getElementById("seven"))
let scr = document.getElementById('scr')

document.getElementById("nine").addEventListener("click", function () {

   str += nine

   // console.log(list)
   scr.innerText = str
   console.log(str)
});
document.getElementById("eight").addEventListener("click", function () {

   str += eight

   scr.innerText = str
   console.log(str)
});
document.getElementById("seven").addEventListener("click", function () {

   str += seven

   scr.innerText = str
   console.log(str)
});
document.getElementById("six").addEventListener("click", function () {

   str += six

   scr.innerText = str
   console.log(str)
});
document.getElementById("five").addEventListener("click", function () {

   str += five

   scr.innerText = str
   console.log(str)

});
document.getElementById("four").addEventListener("click", function () {

   str += four

   scr.innerText = str
   console.log(str)
});
document.getElementById("three").addEventListener("click", function () {

   str += three

   scr.innerText = str
   console.log(str)
});
document.getElementById("two").addEventListener("click", function () {

   str += two

   scr.innerText = str
   console.log(str)

});
document.getElementById("one").addEventListener("click", function () {

   str += one

   scr.innerText = str
   console.log(str)
});
document.getElementById("zero").addEventListener("click", function () {

   str += zero

   scr.innerText = str
   console.log(str)
});
document.getElementById("equal").addEventListener("click", function () {

   if (Error) {
      scr.innerText = "INVALID INPUT"
   }
   scr.innerText = eval(str)
   const rr = eval(str)
   str = rr

   let yyy = document.getElementById("equal").innerHTML
   console.log(yyy.charAt(0))

});
document.getElementById("divide").addEventListener("click", function () {

   str += divide

   scr.innerText = str
   console.log(str)
});
document.getElementById("sub").addEventListener("click", function () {

   str += sub

   scr.innerText = str
   console.log(str)
});
document.getElementById("plus").addEventListener("click", function () {

   str += plus

   scr.innerText = str
   console.log(str)
});
document.getElementById("multi").addEventListener("click", function () {

   str += multi

   scr.innerText = str
   console.log(str)
});
document.getElementById("point").addEventListener("click", function () {

   str += point

   scr.innerText = str
   console.log(str)
});
document.getElementById("perc").addEventListener("click", function () {

   str += perc
   scr.innerText = str
   console.log(str)
});
document.getElementById("clear").addEventListener("click", function () {

   str = ""
   scr.innerText = ""

});
document.getElementById("cancle").addEventListener("click", function () {

   let fin = str.substring(0, str.length - 1)
   str = fin
   scr.innerText = fin;
   console.log(str.length)


});





