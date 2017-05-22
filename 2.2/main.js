"use strict";


//1
function imgClick(event) {
    var X = event.clientX - this.getBoundingClientRect().left;
    var Y = event.clientY - this.getBoundingClientRect().top;

    console.log("X: " + X + "    Y: " + Y);
    console.log(event.target.src);
}

var imgs = document.getElementsByTagName("img");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = imgClick;
}

// ---------------------------


//2

function numkey(event) {
    console.log(String.fromCharCode(event.keyCode));
}

function keyInfo(event) {
    var divInfo = document.createElement('div');
    var key     = document.createElement('h5');
    var keyNum  = document.createElement('p');
    var shift   = document.createElement('p');

    keyNum.innerHTML  = "key code : " + event.keyCode;
    key.innerHTML     = "key : " + String.fromCharCode(event.keyCode);
    shift.innerHTML   = "shift key : " + event.Shiftkey;

    keyDownEventsInfoContainer.appendChild(divInfo);

    divInfo.appendChild(key);
    divInfo.appendChild(keyNum);
    divInfo.appendChild(shift);
}




window.addEventListener("keydown", numkey);
window.addEventListener("keydown", keyInfo);

//window.removeEventListener("keydown", numkey);
//window.removeEventListener("keydown", keyInfo);

// ---------------------------
