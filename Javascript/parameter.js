//without paramenter
function add(){
    console.log(10+20)
}
add();

//with parameter
function add(a,b){
    console.log(a+b)
}
add(10,30);

console.log(typeof add)
//Arrow function
var addd=(a,b)=>{
    console.log(a+b);
}

addd(10,40)

console.log(typeof (addd));