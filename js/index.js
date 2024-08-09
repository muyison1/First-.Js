let x, y, z, a; 
x = prompt("Please insert your card by typing Yes:");
y = prompt("please enter your pin");
y = Number(y);
z = prompt("type 1 to withdraw");
z = Number (z);
a = prompt("please enter receiver account number");
a = Number(a)
let yb =prompt(['please select receiver bank', '1. uba', '2.unity', '3.acess']);
for(let i=0;i<yb.length;i++){  
    console.log(yb[i]+"<br>");
}
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(a, typeof a);
console.log(yb[2]);
 