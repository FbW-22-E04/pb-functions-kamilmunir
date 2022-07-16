
  let y=0;
  let z=0;
  let h=0;
  let total=0;

 function myfunc(a,b,c)
 {
    
for(i=1;i<=3;i++){
 y=Math.pow(a,3);
 z=Math.pow(b,3)
 h=Math.pow(c,3)
 total=y+z+h;
}

console.log(total);
 }
 myfunc(1,5,9);//
 

 console.log('*****************************');
function myfunc(a,b){

  
  let e=a.length;
  let c=b.substring(0,e);
  if(a===c){
    console.log(true);
    return c;
    
  }
  else{
    return false;
  }
  

  
  

} 
let d=myfunc('bahn','bahnhof strase')
console.log(d);


console.log('*******************');

function myfunc1(a){
  if(a<=0){
   // console.log(true);
    return true;
  }
  else{
   // console.log(false);
    return false;
  }
}

let reval=myfunc1(0);
console.log(reval);

console.log('********************');

function myfunc2(string,let){
  return string.split(let).length-1;
}

var str="a quick brown fox jumps right over the lazy dog ";
var ret=myfunc2(str,'e');
console.log(ret);

console.log('*********************')

function dogfunc(a){
  let age=a*7;
  return console.log('Your dog is '+ "  " +age+" "+'year old')
}

let vage=dogfunc(7);

console.log('*****************');

function waldo(a){

  let b=a.includes("waldo");
   if(b===true){
    return 'waldo found'
   }
   else{
    return 'There is no waldo'
   }

}


var rent=waldo('there is  such word');
console.log(rent);


console.log('slices**************');

function slices(slices,receip,share){

var total=(parseInt(slices)/ parseInt(receip));

if(parseInt(total)===parseInt(share)){
  console.log('slices are equally divisible')
}
else{
  console.log('Slices are not equally divisible');
}

}

slices(12,4,2)

console.log('*****************No of Letters')



function occ_char(string){

   let a=string.toLowerCase();
  
  console.log(string.toLowerCase());
  let eos=a.split('o').length-1;
  let exs=a.split('e').length-1;
    
  console.log(eos+"   "+exs)

  if(eos===0 && exs===0){
    return true;
  }
  else if(eos===exs){
    return true;
  }
  else{
    return false;
  }

}

let os=occ_char('kjlkjgghoghghg ghgEhjg');
console.log(os)

console.log('Prime Number****************')

function myprime(a){
  if(a<2){
    return a+"  "+ 'is not a prime number ';
  }
  for(i=2;i<a;i++){
    if( a % i===0){
      return 'Its not a prime number'
    }
  }
  
  return a+"   "+'is a prime number'
}

let prmreturn=myprime(40)
console.log(prmreturn)

console.log('***************Finding Email Error')

function emailfunction(vemail){
let variemail=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;



if(vemail.match(variemail)){
  
  return true;
}
else{
  return false;

}
}
let e=emailfunction('kamil.munir@gmail.com')
console.log(e);

console.log('To find the Bmi****************');

//weight in lb and height in inches

function bmi(name1,w1,h1,name2,w2,h2){
let total1=(w1/(h1*h1))*703;
let total2=(w2/(h2*h2))*703;

console.log(name1+"   "+ total1+"   "+name2+"   "+total2);
}

bmi('kamil',198,70,'Faiz',205,60);
console.log((70*70));

console.log('Function age*************');

function ages(a){
  if(parseInt(a)>18){
return true;

  }
  else{
  return false;
  }
}

let b=ages(16);
console.log(b);

console.log('min function////////////////');
function mins(a,b,c){
  let vmain=Math.min(a,b,c);
  return vmain;
}

let vtemp=mins(5,2,-10);
console.log(vtemp);

console.log('pow function****************');

function pows(v,p){
  let c=Math.pow(v,p);
  console.log(c);
}
pows(3,4);