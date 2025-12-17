a=121;
rem=0;
rev=0;
b=a;
while(b>0){
    rem=b%10;
    rev=rev*10+rem;
    b=parseInt(b/10);
}

if(a==rev){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}