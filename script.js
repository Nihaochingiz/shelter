
let sliderCards = document.getElementById("slider-cards");
let sliderLeft = document.getElementById("slider-left");
let sliderRight = document.getElementById("slider-right");

let firstElement = document.getElementById("pets-jennifer");
let firstElementText = document.getElementById("pets-card__title");

let image1 = {
    imgPet: 'assets/img/pets-katrine.png',
    text: "Katrine"
};
let image2 = {
    imgPet: 'assets/img/pets-jennifer.png',
    text: "Jennifer",
};
let image3 = {
    imgPet: 'assets/img/pets-woody.png',
    text: "Woody",
};

let image4 = {
    imgPet: 'assets/img/pets-freddie.png',
    text: "Freddie"
};
let image5 = {
    imgPet: 'assets/img/pets-sophia.png',
    text: "Sophia",
};
let image6 = {
    imgPet: 'assets/img/pets-scarlet.png',
    text: "Scarlet",
};


let arrayPets = [image1, image2, image3, image4, image5, image6 ];


let slideIndex = 1;


  console.log(firstElement)


window.onload = render;

function render() {
  
  firstElementText.innerHTML = arrayPets[1].text;
  firstElement.src =  arrayPets[1].imgPet;//Object.values(image2)[0];

}
function nextSlide() {
    render(slideIndex += 1);
}

function previousSlide() {
    render(slideIndex -= 1);  
}




/*


showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  
  
  if (n > sliderCards.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = sliderCards.length
  }
  for (i = 1; i < sliderCards.length; i++) {
    sliderCards[i].style.display = "none";
}
 
sliderCards[slideIndex-1].style.display = "block";
 
}

*/