"use strict";


//1
function ImgClick(event) {
  console.log("X: " + event.clientX + "    Y: " + event.clientY);
  console.log(event.target.src);
}

var Imgs = document.getElementsByTagName("img");

for (var i = 0; i < Imgs.length; i++) {
    Imgs[i].onclick = ImgClick;
}

// ---------------------------


//2

function NumKey(event) {
    console.log(String.fromCharCode(event.keyCode));
}

function KeyInfo(event) {
  var DivInfo = document.createElement('div');
  var Key     = document.createElement('h5');
  var KeyNum  = document.createElement('p');
  var Shift   = document.createElement('p');

  KeyNum.innerHTML  = "Key code : " + event.keyCode;
  Key.innerHTML     = "Key : " + String.fromCharCode(event.keyCode);
  Shift.innerHTML   = "shift key : " + event.shiftKey;

  keyDownEventsInfoContainer.appendChild(DivInfo);

  DivInfo.appendChild(Key);
  DivInfo.appendChild(KeyNum);
  DivInfo.appendChild(Shift);
}




window.addEventListener("keydown", NumKey);
window.addEventListener("keydown", KeyInfo);

//window.removeEventListener("keydown", NumKey);
//window.removeEventListener("keydown", KeyInfo);

// ---------------------------
