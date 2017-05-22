"use strict";

// 1
var heads;

for (var i = 1; i < 7; i++) {
    heads = document.getElementsByTagName('h' + i);

    for (var g = 0; g < heads.length; g++) {
        console.log(heads[g]);
    }
}
// ---------------------------

// 2
var enterSandman = [
    "Now I lay me down to sleep",
    "I pray the Lord my soul to keep",
    "If I die before I wake",
    "I pray the lord my soul to take"
];

var stringNumber = 0;

for (var i = 1; i < 7; i++) {

  heads = document.getElementsByTagName('h' + i);

  for (var g = 0; g < heads.length; g++) {
    heads[g].innerHTML = enterSandman[stringNumber];
    stringNumber       = ++stringNumber % 4;
  }

}

// ---------------------------

//3
var paragraphs = document.getElementsByTagName("p");

for (var i = 0; i < paragraphs.length; i += 3) {
    paragraphs[i].style.backgroundColor = "green";
}

// ---------------------------

//4
for (var i = 0; i < paragraphs.length; i += 4) {
    paragraphs[i].style.display = "none";
}

// ---------------------------

//5
var imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        console.log(imgs[i].src);
    }

// ---------------------------

//6
const METALLICA = [
    "Say your prayers little one",
    "Don't forget, my son",
    "To include everyone",

    "Tuck you in, warm within",
    "Keep you free from sin",
    "Till the sandman he comes",

    "Sleep with one eye open",
    "Gripping your pillow tight",

    "Exit, light",
    "Enter, night",
    "Take my hand",
    "We're off to never-never land",

    "Somethings wrong, shut the light",
    "Heavy thoughts tonight",
    "And they aren't of Snow White",
    "Dreams of war, dreams of liars",
    "Dreams of dragon's fire",
    "And of things that will bite",

    "Sleep with one eye open",
    "Gripping your pillow tight",

    "Exit, light",
    "Enter, night",
    "Take my hand",
    "We're off to never-never land",

    "Now I lay me down to sleep",
    "'Now I lay me down to sleep'",
    "I pray the Lord my soul to keep",
    "'I pray the Lord my soul to keep'",
    "If I die before I wake",
    "'If I die before I wake'",
    "I pray the lord my soul to take",
    "'I pray the lord my soul to take'",

    "Hush little baby, don't say a word",
    "And never mind that noise you heard",
    "It's just the beasts under your bed",
    "In your closet, in your head",

    "Exit, light",
    "Enter, night",
    "Grain of sand",

    "Exit, light",
    "Enter, night",
    "Take my hand",
    "We're off to never-never land",

    "We're off to never-never land",
    "Take my hand",
    "We're off to never-never land",
    "Take my hand."]

var enterSandmanText        = document.createElement('ul');
enterSandmanText.className  = "METALLICAES";
document.body.appendChild(enterSandmanText);

var addLi = document.getElementsByClassName("METALLICAES")[0];

for (var i = 0; i < METALLICA.length; i++) {
  var li = document.createElement('li');

  li.innerHTML = METALLICA[i];

  if (i % 5 == 0) {
      li.style.marginTop = "50px";
  }

  addLi.appendChild(li);
}

// ---------------------------
