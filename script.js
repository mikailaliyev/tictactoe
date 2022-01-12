let count = 0;
const divs = document.querySelectorAll("div");
document.querySelector(".restartButton").addEventListener("click", () => {
  history.go(0);
});
function clicked(event) {
  if (count % 2 === 0) {
    event.target.innerText = "X";
    count++;
  } else {
    event.target.innerText = "0";
    count++;
  }
  const oneTwoThere = divs[1].innerText + divs[2].innerText + divs[3].innerText;
  const fourFiveSix = divs[4].innerText + divs[5].innerText + divs[6].innerText;
  const sevenEightNine =
    divs[7].innerText + divs[8].innerText + divs[9].innerText;
  const oneFourSeven =
    divs[1].innerText + divs[4].innerText + divs[7].innerText;
  const twoFiveEight =
    divs[2].innerText + divs[5].innerText + divs[8].innerText;
  const threeSixNine =
    divs[3].innerText + divs[6].innerText + divs[9].innerText;
  const oneFiveNine = divs[1].innerText + divs[5].innerText + divs[9].innerText;
  const threeFiveSeven =
    divs[3].innerText + divs[5].innerText + divs[7].innerText;
  if (
    oneTwoThere === "XXX" ||
    fourFiveSix === "XXX" ||
    sevenEightNine === "XXX" ||
    oneFourSeven === "XXX" ||
    twoFiveEight === "XXX" ||
    threeSixNine === "XXX" ||
    oneFiveNine === "XXX" ||
    threeFiveSeven === "XXX"
  ) {
    document.querySelector(".winner").textContent = "The winner is: X!";
    document.querySelector(".main").style.visibility = "hidden";
    document.querySelector(".winner").style.visibility = "visible";
    document.querySelector(".restartButton").style.visibility = "visible";
  } else if (
    oneTwoThere === "000" ||
    fourFiveSix === "000" ||
    sevenEightNine === "000" ||
    oneFourSeven === "000" ||
    twoFiveEight === "000" ||
    threeSixNine === "000" ||
    oneFiveNine === "000" ||
    threeFiveSeven === "000"
  ) {
    document.querySelector(".winner").textContent = "The winner is: 0!";
    document.querySelector(".main").style.visibility = "hidden";
    document.querySelector(".winner").style.visibility = "visible";
    document.querySelector(".restartButton").style.visibility = "visible";
  } else if (count === 9) {
    document.querySelector(".winner").textContent = "DRAW!";
    document.querySelector(".main").style.visibility = "hidden";
    document.querySelector(".winner").style.visibility = "visible";
    document.querySelector(".restartButton").style.visibility = "visible";
  }
}
