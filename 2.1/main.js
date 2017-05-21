"use strict";

// 1
var Heads;

for (var i = 1; i < 7; i++) {
  Heads = document.getElementsByTagName('h' + i);

  for (var g = 0; g < Heads.length; g++) {
    console.log(Heads[g]);
  }
}
// ---------------------------

// 2
var EnterSandman = [
  "Now I lay me down to sleep",
  "I pray the Lord my soul to keep",
  "If I die before I wake",
  "I pray the lord my soul to take"];

var StringNumber = 0;

for (var i = 1; i < 7; i++) {

  Heads = document.getElementsByTagName('h' + i);

  for (var g = 0; g < Heads.length; g++) {
    Heads[g].innerHTML = EnterSandman[StringNumber];
    StringNumber       = ++StringNumber % 4;
  }

}

// ---------------------------

//3
var Paragraphs = document.getElementsByTagName("p");

for (var i = 0; i < Paragraphs.length; i += 3) {
    Paragraphs[i].style.backgroundColor = "green";
}

// ---------------------------

//4
for (var i = 0; i < Paragraphs.length; i += 4) {
    Paragraphs[i].style.display = "none";
}

// ---------------------------

//5
var Imgs = document.getElementsByTagName("img");

    for (var i = 0; i < Imgs.length; i++) {
        console.log(Imgs[i].src);
    }

// ---------------------------

//6
var Metallica = [
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

var EnterSandmanText        = document.createElement('ul');
EnterSandmanText.className  = "MetallicaES";
document.body.appendChild(EnterSandmanText);

var AddLi = document.getElementsByClassName("MetallicaES")[0];

for (var i = 0; i < Metallica.length; i++) {
  var li = document.createElement('li');

  li.innerHTML = Metallica[i];

  if (i % 5 == 0) {
      li.className = "BigMargin";
  }

  AddLi.appendChild(li);
}

var AddMargin = document.getElementsByClassName("BigMargin");

for (var i = 0; i < AddMargin.length; i++) {
    AddMargin[i].style.marginTop = "50px";
}

// ---------------------------
