var fn=prompt("Please enter your First Name?");
var ln=prompt("Please enter your Last Name?");
var age=prompt("How old are you?");
var height=prompt("How old are you in centimeters?");
var pn=prompt("What is the name of your pet?");
alert("Thank you so much for your information");

//four conditions
var namecond = null;
var agecond = null;
var heightcond = null;
var petcond = null;

// if //
//if (fn[0] ===ln[0]){
//  namecond = true;
//}else {
//  namecond = false;
//}

//if (age>=20 && age<=30){
//  agecond = true;
//}else {
//  agecond = false;
//}

//if (height>=170){
//  heightcond = true;
//}else {
//  heightcond = false;
//}

//if (pn[pn.length-1] === "y"){
//  petcond = true;
//} else{
//  petcond = false;
//}

for (fn[0] === ln[0] ){
  namecond = true;
}else {
  namecond = false;
}

for (age>=20 && age<=30){
  agecond = true;
}else {
  agecond = false;
}

for (height>=170){
  heightcond = true;
}else {
  heightcond = false;
}

for (pn[pn.length-1] === "y"){
  petcond = true;
}else {
  petcond = false;
}


if (namecond && agecond && heightcond && petcond){
  console.log("Welcome SPY!");
}else {
  console.log("Nothing to see here");
}
