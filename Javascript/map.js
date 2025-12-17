var arr=[1,2,3,4,5];
var double= arr.map(num=>num*2);
console.log(double)


//Filter
var even = arr.filter(num=>num%2===0);
console.log(even)

//reducer
var total = arr.reduce((sum,num)=>(sum+1),0);
console.log(total);

var evenCount = arr.map(num=>num**3).filter(num=>num%2===0).reduce((sum,num)=>(sum+1),0);
console.log(evenCount)
