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

// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var recognition = new SpeechRecognition();
// recognition.onresult = function(event) {
//   if (event.results.length > 0) {
//     var breed = event.results[0][0].transcript;
//     // q.form.submit();
//     document.getElementById('output').innerHTML = breed.value;

//   }
// }

// Initialize the variable breed to hold a string value of "Puggle"
// let breed_init = "puggle";

function dogeFun() {


  // Get the image element from the DOM
  const dogeBtn = document.getElementById("dogeBtn");

  // Maximum width and height for the resized image
  const maxWidth = 400;
  const maxHeight = 400;

  // Add a click event listener to the initial dog image
  dogeBtn.addEventListener("click", function() {

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.onresult = function(event) {
      if (event.results.length > 0) {
        const breed = event.results[0][0].transcript;
        // q.form.submit();
        document.getElementById('output').innerHTML = breed.value;
      }
    }

    recognition.start();

    // Get the value of the breed input element
    const breed = document.getElementById("breed").value;
    

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
          // Display the image element
          dogImage.style.display = "initial";
          // Set the src attribute of the image element to the URL of the new image
          dogImage.src = img.src;
        });
      })
      .catch(error => {
        console.error(error);
      });
  });
}


    // // Make a request to the Dog API with the current value of breed
    // fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Create a new Image object to get the natural width and height of the image
    //     const img = new Image();
    //     img.src = data.message;
    //     img.addEventListener("load", function() {
    //       // Calculate the new width and height of the image
    //       let newWidth, newHeight;
    //       if (img.width > img.height) {
    //         newWidth = Math.min(img.width, maxWidth);
    //         newHeight = img.height * (newWidth / img.width);
    //       } else {
    //         newHeight = Math.min(img.height, maxHeight);
    //         newWidth = img.width * (newHeight / img.height);
    //       }
    //       // Set the width and height of the image element
    //       dogImage.width = newWidth;
    //       dogImage.height = newHeight;
    //       // Display the image element
    //       dogImage.style.display = "initial";
    //       // Set the src attribute of the image element to the URL of the new image
    //       dogImage.src = img.src;
    //     });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

  // Call the click event listener to display the first image
  // dogImage.click();

  // // Create an async function to get a random image from the Dog API based on the breed passed in
  // async function getRandomImageByBreed(breed) {
  //   // Make a request to the Dog API with the current value of breed
  //   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  //   // Convert the response into a JSON object
  //   const data = await response.json();
  //   // Return the data object
  //   return data;
  // }

  // // Create an async function to get a random image from the Dog API based on the sub-breed passed in
  // async function getRandomImageBySubBreed(breed, subBreed) {
  //   // Make a request to the Dog API with the current value of breed and sub-breed
  //   const response = await fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
  //   // Convert the response into a JSON object
  //   const data = await response.json();
  //   // Return the data object
  //   return data;
  // }

// Make this into a function that runs on page load
// document.addEventListener("DOMContentLoaded", function() {
//   // Get the image element from the DOM
//   const dogImage = document.getElementById("dog-image");

//   // Maximum width and height for the resized image
//   const maxWidth = 400;
//   const maxHeight = 400;

//   // Add a click event listener to the initial dog image
//   dogImage.addEventListener("click", function() {
//     // Get the value of the breed input element
//     const breed = document.getElementById("breed").value;

//     // Make a request to the Dog API with the current value of breed
//     fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//       .then(response => response.json())
//       .then(data => {
//         // Create a new Image object to get the natural width and height of the image
//         const img = new Image();
//         img.src = data.message;
//         img.addEventListener("load", function() {
//           // Calculate the new width and height of the image
//           let newWidth, newHeight;
//           if (img.width > img.height) {
//             newWidth = Math.min(img.width, maxWidth);
//             newHeight = img.height * (newWidth / img.width);
//           } else {
//             newHeight = Math.min(img.height, maxHeight);
//             newWidth = img.width * (newHeight / img.height);
//           }
//           // Set the width and height of the image element
//           dogImage.width = newWidth;
//           dogImage.height = newHeight;
//           // Display the image element
//           dogImage.style.display = "initial";
//           // Set the src attribute of the image element to the URL of the new image
//           dogImage.src = img.src;
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   });
// });
// // Get the image element from the DOM
// const dogImage = document.getElementById("dog-image");

// // Maximum width and height for the resized image
// const maxWidth = 400;
// const maxHeight = 400;

// // Add a click event listener to the initial dog image
// dogImage.addEventListener("click", function() {
//   // Get the value of the breed input element
//   const breed = document.getElementById("breed").



  // Get a list of all the breeds from the Dog API and store them in a JavaScript array
document.addEventListener("DOMContentLoaded", function() { fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
      // Initialize the variable breed_map to hold a map of breed and sub-breed names
      let breed_map = new Map();

      // Get the array of breed names from the data object
      const breeds = Object.keys(data.message);

      // Loop through the array of breed names
      for (let i = 0; i < breeds.length; i++) {
        // Get the sub-breeds for the current breed
        const subBreeds = data.message[breeds[i]];
        
        // Check if the current breed has sub-breeds
        if (subBreeds.length < 1) {
          // Add the breed name to the breed dictionary
          // Check to see if the breed name is already in the map
          if (!breed_map.has(breeds[i])) {
            breed_map.set(breeds[i], new Array());
          }
        } 

        else {
          // Loop through the array of sub-breeds
          for (let j = 0; j < subBreeds.length; j++) {
            // Add the sub-breed name to the breed dictionary
            // Check to see if the breed name is already in the map
            if (breed_map.has(breeds[i])) {
              console.log('has breed');
              // console.log(breed_map.get(breeds[i]));
              // breed_map.get(breeds[i]).push(subBreeds[j]);
            }
            else {
              breed_map.set(breeds[i], new Array().push(subBreeds[j]));   
            }
          }
        }

      
      // Loop through the map of breed names to create data tags and data definitions
      for (let k of breed_map.keys()) {
        // Get the current sub-breeds
//        const subBreeds = breed_map.get(k);
        // Check if the current breed has sub-breeds
        if (subBreeds.length < 1) {
          // Add the breed name to the breed list
          document.getElementById("breed_list").innerHTML += "<dt>" + k + "</dt>";
          document.getElementById("breed_list").innerHTML += "<dd>" + 'None' + "</dd>";
        } 
        else {
          // Loop through the array of sub-breeds
          console.log(k + " " + subBreeds);


          // for (let j = 0; j < subBreeds.length; j++) {

          //   // console.log(k + " " + subBreeds[j]);

          //   // Add the sub-breed name to the breed list
          //   document.getElementById("breed_list").innerHTML += "<dt>" + k  + "</dt>";
          //   document.getElementById("breed_list").innerHTML += "<dd>" + subBreeds[j] + "</dd>";
          // }
        }

      }

      // for (let i = 0; i < breed_map.length; i++) {
      //   document.getElementById("breed_list").innerHTML += "<dt>" + breed_array[i] + "</dt>";      
      //   document.getElementById("breed_list").innerHTML += "<dd>" + breed_array[i] + "</dd>";
      // }
      }
    })
  .catch(error => {
    // console.error(error);
    console.log('error');
  });
});





newFunction();
function newFunction() {
  document.addEventListener("DOMContentLoaded", function () {
    dogeFun();
  });
}

