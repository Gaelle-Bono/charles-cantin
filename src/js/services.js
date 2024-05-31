
const servicesDivs = document.querySelectorAll(".service-container"); 
const servicesTitles = document.querySelectorAll(".service-container h2"); 
const servicesPrices = document.querySelectorAll(".service-price"); 

servicesDivs.forEach((div, index) => {
  if (index % 2 === 0) {
      div.classList.add("blue-container");
  }
});

servicesTitles.forEach((div, index) => {
  if (index % 2 === 0) {
      div.classList.add("blue-text");
  }
});

servicesPrices.forEach((div, index) => {
  if (index % 2 === 0) {
      div.classList.add("blue-text");
  }
});
