var myText = "Accelerate success with hands-on learning";
var myArray = myText.split("");
var loopTimer;
function frameLooper() {
if(myArray.length > 0) {
document.getElementById("typeText").innerHTML += myArray.shift();
} else {
clearTimeout(loopTimer);
return false;
}
loopTimer = setTimeout('frameLooper()',80);
}
frameLooper();