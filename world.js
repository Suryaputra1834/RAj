function abc(num , xyz,pqr){
    console.log("abc function called with num:", num);
    xyz(pqr);
   
}
function fun2( prq) {
    console.log("fun2 function called");
   prq();
}
function fun3() {
    console.log("fun3 function called");
}

abc(10, fun2,fun3);
// fun2(fun3);