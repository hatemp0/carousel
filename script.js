const timeBetweenText = 3000;
const imageDuration = 6300; 
let currentImageIndex = 0;
let autoplayInterval;
const imageTexts = ["This one is very iconic! I dare say our first photo together. Still remember it vividly, it was a very sweet moment, it was cold and was very unsure how to act but was very happy to be there :)"
, "This one is on the station in KC. We just look very quirky, it's very cute and it was very fun taking them <3"
, "I am a very big fan of this picture. Everything just kind of fits. You look stunning (as usual) but i can't explain what i like about it so much. The outfits, your hair, me not making a werid face (that's also fun sometimes!!), everyting just fits in place"
, "One of our rare 'serious' ones. *peek* *blush*."
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
  const h1 = document.querySelector('h1');

  Array.from(container.children).forEach(child => {
    if (child !== h1) {
      container.removeChild(child);
    }
  continueButton.remove()
  });

  clearInterval(autoplayInterval); // Use clearInterval for setInterval
  autoplayInterval = null;
  currentImageIndex = 0;
  const mainText = document.querySelector(".main-text")
  mainText.classList.remove("visible");
  mainText.textContent = "";
  second_scene();
});

function second_scene() {
  setTimeout(() => {
        changeText("That was lovely wasn't it!")
    }, 200)
  setTimeout(() => {
        changeText("On a serious note")
    }, timeBetweenText)
  setTimeout(() => {
        changeText("Volim te")
    }, 2*timeBetweenText)
  setTimeout(() => {
        changeText("Znacis mi vise nego sto mozes da zamislis")
    }, 3*timeBetweenText)
  setTimeout(() => {
        changeText("Ako postoji neki problem")
    }, 4*timeBetweenText)
  setTimeout(() => {
        changeText("Reci mi")
    }, 5*timeBetweenText)
  setTimeout(() => {
        changeText("Zelim samo da budemo srecni zajedno")
    }, 6*timeBetweenText)
  setTimeout(() => {
        changeText("<3")
    }, 7*timeBetweenText)
  setTimeout(() => {
        changeText("")
        setTimeout(() => {
            window.open("gifs.html", "_self");
        }, 2000)
    }, 8.3*timeBetweenText)
    
}
let gifDisplay;

function createGifDisplay(gifLinks) {
  const container = document.createElement('div');
  container.className = 'gif-container'; // Add class for styling

  // Check if gifLinks are valid
  if (!gifLinks || gifLinks.length === 0) {
    console.warn("No GIF links provided. Creating empty GIF display.");
    return container;
  }

  // Apply grid layout for the container (default to 2x2 grid)
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Two columns for larger screens
  container.style.gridGap = '10px'; // Space between GIFs
  container.style.maxWidth = '80vw'; // Limit container width
  container.style.margin = '0 auto'; // Center the container
  container.style.padding = '20px 0'; // Add padding around GIFs

  // Add mobile styles using media query
  const mobileStyle = document.createElement('style');
  mobileStyle.innerHTML = `
    @media (max-width: 600px) {
      .gif-container {
        grid-template-columns: 1fr; /* One column for mobile */
        max-width: 90vw;
      }
      .gif-wrapper {
        margin-bottom: 15px;
      }
    }
  `;
  document.head.appendChild(mobileStyle);

  gifLinks.slice(0, 4).forEach((link, i) => { // Limit to 4 GIFs
    const gifWrapper = document.createElement('div');
    gifWrapper.className = 'gif-wrapper';

    const gif = document.createElement('img');
    gif.className = 'gif';
    gif.alt = `GIF ${i + 1}`;

    if (link) {
      gif.src = link;
      gif.onerror = () => {
        console.error(`Error loading GIF: ${link}`);
        gif.src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"; // Placeholder
      };
    } else {
      console.warn(`No GIF link provided for GIF ${i + 1}. Using placeholder.`);
      gif.src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"; // Placeholder
    }

    gifWrapper.appendChild(gif);
    container.appendChild(gifWrapper);
  });

  document.body.appendChild(container); // Ensure the GIF container is appended to the document
  return container;
}
/*
function applyMobileStyles() {
  const gifContainer = document.querySelector('.gif-container');
  if (!gifContainer) return;

  gifContainer.style.display = 'grid';
  gifContainer.style.gridTemplateColumns = '1fr 1fr';
  gifContainer.style.gap = '10px';
  gifContainer.style.padding = '10px';
  gifContainer.style.maxWidth = '90vw';
  gifContainer.style.margin = '0 auto';

  const gifWrappers = document.querySelectorAll('.gif-wrapper');
  gifWrappers.forEach((wrapper) => {
    wrapper.style.overflow = 'hidden';
    wrapper.style.position = 'relative'; // Keep this for absolute positioning of GIFs
    wrapper.style.width = '100%'; // Crucial: Set the width of the wrapper
    wrapper.style.paddingBottom = '100%'; // Maintain 1:1 aspect ratio (adjust if needed)
    wrapper.style.height = 0; // Set height to 0
  });

  const gifs = document.querySelectorAll('.gif');
  gifs.forEach(gif => {
    gif.style.maxWidth = "100%";
    gif.style.maxHeight = "100%";
    gif.style.position = "absolute";
    gif.style.top = "0";
    gif.style.left = "0";
    gif.style.objectFit = "contain";
  });
}
*/
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
  resetAutoplay(); // Reset autoplay after manual change
}

function startAutoplay() {
  autoplayInterval = setInterval(nextImage, imageDuration);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}
rightArrow.addEventListener('click', nextImage);

setTimeout(() => {
  changeText("Hope you're having a lovely day so far!!");
}, timeBetweenText);

setTimeout(() => {
  changeText("I haven't made something like this in a while");
}, 2.6 * timeBetweenText);

setTimeout(() => {
  changeText("In retrospect this took longer than I thought so hope you like it!");
}, 3.8 * timeBetweenText);

setTimeout(() => {
  changeText("Here's a little display of sorts"); 
  setTimeout(() => {
    document.querySelector('.image-container').style.display = 'block'; 
    showImage(0); 
    document.querySelector('.continue-button').classList.add('visibleBtn');
    startAutoplay(); 
  }, 1500);
  
}, 5 * timeBetweenText);
