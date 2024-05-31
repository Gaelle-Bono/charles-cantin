
const categoriesDivs = document.querySelectorAll(".category");

function dropdownitemSelection() {
  let dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach(element => {

    //show the photos of the category selected with the dropdown menu 
    element.addEventListener('click', e => {
      switch (e.target.innerHTML) {
        case 'Toutes les catégories':
          showAllPhotos()
          break;
        case 'Portrait':
          showSelectedCategoryPhotos("portrait");
          break;
        case 'Couple':
          showSelectedCategoryPhotos("couple");
          break;
        case 'Mariage':
          showSelectedCategoryPhotos("marriage");
          break;
        case 'Grossesse':
          showSelectedCategoryPhotos("pregnancy");

          break;
        case 'Bébé':
          showSelectedCategoryPhotos("baby");
          break;
        case 'Baptême':
          showSelectedCategoryPhotos("baptism");
          break;
        case 'Famille':
          showSelectedCategoryPhotos("family");
          break;
      }
    });
  })
}

function showSelectedCategoryPhotos(category){
  //initialisation
  categoriesDivs.forEach(categoryDiv => {
    if (categoryDiv.classList.contains("visible")){
      categoryDiv.classList.remove("visible");
    }
    if (!categoryDiv.classList.contains("hidden")){
      categoryDiv.classList.add("hidden");
    }
  });
  const selectedCategoryDiv = document.querySelector("div[data-category=" + category + "]");
  selectedCategoryDiv.classList.remove("hidden");
  selectedCategoryDiv.classList.add("visible");

  removingBlueColourifExists(category);
}

function showAllPhotos(){
  categoriesDivs.forEach(categoryDiv => {
    if (categoryDiv.classList.contains("hidden")){
      categoryDiv.classList.remove("hidden");
    }
    if (!categoryDiv.classList.contains("visible")){
      categoryDiv.classList.add("visible");
    }
  }); 
  //colorizing divs
  colorizingInBlue(); 
}

function colorizingInBlue(){
  const categoriesTitles = document.querySelectorAll(".category h2"); 

  categoriesDivs.forEach((div, index) => {
    if (index % 2 != 0) {
        div.classList.add("blue-container");
    }
  });
  
  categoriesTitles.forEach((title, index) => {
    if (index % 2 != 0) {
      title.classList.add("blue-text");
    }
  });
}

function removingBlueColourifExists(category){
  //removing blue colour if exists
  const selectedCategoryDiv = document.querySelector("div[data-category=" + category + "]");
  if (selectedCategoryDiv.classList.contains("blue-container")){
    selectedCategoryDiv.classList.remove("blue-container");
    const selectedCategoryTitle = document.querySelector("div[data-category=" + category + "] h2");
    selectedCategoryTitle.classList.remove("blue-text");
  }
} 

function initialisation(){
  colorizingInBlue();
} 

//initialisation
initialisation();

dropdownitemSelection();

