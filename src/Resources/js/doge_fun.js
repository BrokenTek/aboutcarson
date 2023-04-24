// Called by HTML file by event. Upon call, a random image from the Dog API is chosen based on 
//   a selected breed by the user. The image is then displayed on the page.
// AUTHOR: Carson
// DATE: 2023-24-04
// PATH: src\doge_fun.js

// Simple Dog Image Generator For Fun
// DOG CEO API: https://dog.ceo/dog-api/
// DOG CEO API DOCS: https://dog.ceo/dog-api/documentation/
// DOG CEO API BREEDS: https://dog.ceo/dog-api/breeds-list
// DOG CEO API RANDOM IMAGE: https://dog.ceo/api/breeds/image/random
// DOG CEO API RANDOM IMAGE BY BREED: https://dog.ceo/api/breed/hound/images/random
// DOG CEO API RANDOM IMAGE BY SUB-BREED: https://dog.ceo/api/breed/hound/afghan/images/random


// Initialize the variable breed to hold a string value of "Puggle"
let breed = "puggle";

// Get the image element from the DOM
const dogImage = document.getElementById("dog-image");

// Maximum width and height for the resized image
const maxWidth = 400;
const maxHeight = 400;

// Add a click event listener to the initial dog image
dogImage.addEventListener("click", function() {
  // Make a request to the Dog API with the current value of breed
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(data => {
      // Create a new Image object to get the natural width and height of the image
      const img = new Image();
      img.src = data.message;
      img.addEventListener("load", function() {
        // Calculate the new width and height of the image
        let newWidth, newHeight;
        if (img.width > img.height) {
          newWidth = Math.min(img.width, maxWidth);
          newHeight = img.height * (newWidth / img.width);
        } else {
          newHeight = Math.min(img.height, maxHeight);
          newWidth = img.width * (newHeight / img.height);
        }
        // Set the width and height of the image element
        dogImage.width = newWidth;
        dogImage.height = newHeight;
        // Set the src attribute of the image element to the URL of the new image
        dogImage.src = img.src;
      });
    })
    .catch(error => {
      console.error(error);
    });
});

// Call the click event listener to display the first image
dogImage.click();


// Get a list of all the breeds from the Dog API and store them in a JavaScript array
fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    // Get the select element from the DOM
    const breed_array = new Array();
    // Get the array of breed names from the data object
    const breeds = Object.keys(data.message);
    // Loop through the array of breed names
    for (let i = 0; i < breeds.length; i++) {
      breed_array.push(breeds[i]);
    }
    for (let i = 0; i < breed_array.length; i++) {
      document.getElementById("breed_list").innerHTML += "<dt>" + breed_array[i] + "</dt>";      
      document.getElementById("breed_list").innerHTML += "<dd>" + breed_array[i] + "</dd>";
    }
  
  })
  .catch(error => {
    console.error(error);
  });


// End of doge_fun.js







