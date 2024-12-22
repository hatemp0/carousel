const timeBetweenText = 3000;
const imageDuration = 5000; 
let currentImageIndex = 0;
let autoplayInterval;
const imageTexts = ["This one is very iconic! I dare say our first photo together. Still remember it vividly, it was a very sweet moment, it was cold and was very unsure how to act but was very happy to be there :)"
, "This one is on the station in KC. We just look very quirky, it's very cute and it was very fun taking them <3"
, "I am a very big fan of this picture. Everything just kind of fits. You look stunning (as usual) but i can't explain what i like about it so much. The outfits, your hair, me not making a werid face (that's also fun sometimes!!), everyting just fits in place"
, "An image before i get pumelled with kisses <3 What's not to love? A very fond memmory and a very joyous experience. Feelt very loved? Embraced?  Hope to repeat it sometime (soon after you get this perhaps ;) )"
, "What do i say? I mean look at it! We're so cute and fun!"]
const images = document.querySelectorAll('.image-container img');
const rightArrow = document.querySelector('.right-arrow');
const continueButton = document.querySelector('.continue-button')

const h1 = document.querySelector(".main-text");
h1.classList.add("visible");

function changeText(newText) {
  h1.classList.remove("visible");
  setTimeout(() => {
    h1.textContent = newText;
    h1.classList.add('visible'); 
  }, 1000);
}

continueButton.addEventListener('click', () => {
  const container = document.querySelector('.container'); 
  while (container.firstChild) {
    if (container.firstChild !== h1) {
      container.removeChild(container.firstChild); 
    }
  }
  clearTimeout(autoplayInterval); 
  autoplayInterval = null; 
  currentImageIndex = 0; 
});

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
  })
  images[index].classList.add('active');
  changeText(imageTexts[index])
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; 
  showImage(currentImageIndex);
}

function startAutoplay() {
  autoplayInterval = setTimeout(nextImage, imageDuration); 
}

rightArrow.addEventListener('click', nextImage);

setTimeout(() => {
  changeText("Hope you're having a lovely day so far!!");
}, timeBetweenText);

setTimeout(() => {
  changeText("I haven't made something like this in a while so I was hoping to show you something fun!!");
}, 2.6 * timeBetweenText);

setTimeout(() => {
  changeText("In retrospect this took longer than I thought so hope you like it!");
}, 3.8 * timeBetweenText);

setTimeout(() => {
  changeText("First wanted to share some of my favourite photos of us"); 
  document.querySelector('.image-container').style.display = 'block'; 
  showImage(0); 
  document.querySelector('.continue-button').classList.add('visibleBtn');
  startAutoplay(); 
}, 5 * timeBetweenText);
