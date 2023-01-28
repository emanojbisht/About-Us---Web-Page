"use strict";
const divVison = document.querySelector(".main-vision");
const divGoals = document.querySelector(".main-goals");
const btnHistory = document.querySelector(".history");
const btnVison = document.querySelector(".vision");
const btnGoals = document.querySelector(".goals");
let clickedElement = btnHistory;
let tempDisplay = [];
let removeDisplay = [];
let count = 0;

if (count === 0) {
  showClicked(btnHistory);
}

const btnclicked = document.querySelector(".right-buttonDiv");
for (let i = 0; i < btnclicked.childElementCount; i++) {
  btnclicked.children[i].addEventListener("click", (click) => {
    const element = click.target;
    if (count === 0) {
      removeContent([
        "historydiv",
        "div-History",
        "imageHistory",
        "main-history",
      ]);
      clickedElement = element;
      removeDisplay = showClicked(element);
      removeClicked(btnHistory);
      count++;
    }
    if (clickedElement.textContent !== element.textContent) {
      removeClicked(clickedElement);
      removeContent(removeDisplay);
    }
    removeDisplay = showClicked(element);
  });
}

//module to show which button got clicked
function showClicked(element) {
  clickedElement = element;
  element.classList.add("clickedButton");
  const tempRemove = showContent(element);
  return tempRemove;
}

//module to remove the button highlight when someother button got selected
function removeClicked(element) {
  element.classList.remove("clickedButton");
}

//module to show the hidden image and content
function showContent(element) {
  if (element.textContent === "History") {
    //showing history picture and content
    tempDisplay = ["historydiv", "div-History", "imageHistory", "main-history"];
    document
      .querySelector("." + tempDisplay[0])
      .classList.remove("" + tempDisplay[1]);
    document
      .querySelector("." + tempDisplay[2])
      .classList.remove(tempDisplay[3]);

    return tempDisplay;
  } else if (element.textContent === "Vision") {
    //showing vision picture and summary
    tempDisplay = ["visiondiv", "div-Vision", "imageVision", "main-vision"];
    document
      .querySelector("." + tempDisplay[0])
      .classList.remove("" + tempDisplay[1]);
    document
      .querySelector("." + tempDisplay[2])
      .classList.remove(tempDisplay[3]);

    return tempDisplay;
  } else if (element.textContent === "Goals") {
    //showing goals summary and picture
    tempDisplay = ["goalsdiv", "div-Goals", "imageGoals", "main-goals"];
    document
      .querySelector("." + tempDisplay[0])
      .classList.remove("" + tempDisplay[1]);
    document
      .querySelector("." + tempDisplay[2])
      .classList.remove(tempDisplay[3]);

    return tempDisplay;
  }
}

//module to hide image and content
function removeContent(element) {
  document.querySelector("." + element[0]).classList.add("" + element[1]);
  document.querySelector("." + element[2]).classList.add(element[3]);
}
