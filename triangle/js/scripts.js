var a= parseInt(prompt("enter a value:"));
var b= parseInt(prompt("enter another value:"));
var c= parseInt(prompt("enter third value:"));
if (a===b && b===c && c===a) {
    alert("equilateral");
}

else if (a===b || b===c || c===a) {
    alert ("isoscelese");
}


else if (a!==b && b!==c && c!==a) {
    alert ("scalene")

}
else if (a+b<=c || b+C <=a || c+a<=b){
alert("triangle cannot be formed");
}
else
alert("please ckeck your values")
