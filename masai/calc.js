var num1="";
var num2="";
var operator="";
var current_num = 1;
var total = "";
var dis= document.getElementById("display");

function add() {
    operator = "+";
    current_num = 2;
    dis.innerHTML= num1 + operator + num2;
}

function sub() {
    operator = "-";
    current_num = 2;
}

function multiply() {
    operator = "*";
    current_num=  2;
}

function divide(){
    operator = "/";
    current_num=2;
}

function keypad(n){
    console.log(n);
    if(current_num == 1){
        num1=num1+n;
    }
    else{
        num2=num2+n;
    }
    console.log(num1);
    console.log(num2);
    dis.innerHTML = num1 + operator + num2;
}

function final_call(){
    if(operator == "+") {
        total = Number(num1) + Number(num2);
    }
    if(operator == "-") {
        total = Number(num1) - Number(num2);
    }
    if(operator == "*") {
        total = Number(num1) * Number(num2);
    }
    if(operator == "/") {
        total = Number(num1) / Number(num2);
    }
}
function clear(){
    num1="";
    num2="";
    operator="";
    current_num=1;
    total="";
    console.log(num1);
    console.log(num2);
    console.log(operator);
    console.log(current_num);
    console.log(total);
    dis.innerHTML = "#";
}