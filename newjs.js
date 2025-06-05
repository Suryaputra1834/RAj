function A(x,abc,pqr){
    let ans=0;
ans=x*x;
console.log(ans)
abc(pqr);
return ans;
}
function B(bcd){
    console.log("Function B running successfully")
    bcd();
}
function C (){
    console.log("Function C running successfully")
    
}
A(2,B,C);