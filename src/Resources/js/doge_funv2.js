function startSpeechRecognition(){

  // function initSpeech() {      
  var output=document.getElementById("output");
  var action=document.getElementById("action");
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  recognition.onstart = function(){
      action.innerHTML="<small>listening, please speak...</small>";
  };

  recognition.onspeechend = function(){
      action.innerHTML="<small>stopped listening, hope you are done...</small>";
      recognition.stop();
  }

  recognition.onresult = function(event){
      var transcript=event.results[0][0].transcript;
      var confidence=event.results[0][0].confidence;
      output.innerHTML="<b>Your Output:</b> " + transcript + "<br/> <b>Confidence:</b> " + (confidence  * 100).toFixed(2) + "%";
      output.classList.remove("hide");

      // check to see if the transcript contains one of the words in the array
      var transcript_str = transcript.toLowerCase();
      var keywords = ["puggle"];

      // get the index of the keyword
      var index = transcript_str.indexOf(transcript_str);
      alert(index);
      // if the transcript contains one of the words in the array then get the image
      if (index > -1) {
        getRandomImageByBreed(keywords[index]);
      }
    
  };

  recognition.onstart = function(){
      action.innerHTML="<small>listening, please speak...</small>";
  };
  
  recognition.start();

  }

function getRandomImageByBreed(breed) {

  // get the breed from the user
  // var breed = document.getElementById("breed_holder").value;

  // Make a request to the Dog API with the current value of breed
  const response = fetch(`https://dog.ceo/api/breed/${breed}/images/random`) 
  // {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json' 
  // }}

  .then(response => response.json())
  .then(data => {
  
  
  // get the image from the data object
  var image = data.message;

  // get the image element
  var dog_image = document.getElementById("dog-image");

  // set the image element's source to the image
  dog_image.src = image;

  return data;

  })
  .catch(err => {
    console.log(err);
  });
}


// Create an async function to get a random image from the Dog API based on the breed passed in
// async function getRandomImageByBreed(breed) {
//   breed = 'Puggle';
//   // get the breed from the user
//   var breed = document.getElementById("breed_holder").value;

//   // Make a request to the Dog API with the current value of breed
//   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
//   // Convert the response into a JSON object
//   const data = await response.json();
//   // Return the data object

//   // get the image from the data object
//   var image = data.message;

//   // get the image element
//   var dog_image = document.getElementById("dog_image");

//   // set the image element's source to the image
//   dog_image.src = image;

//   return data;
// }

// // Create an async function to get a random image from the Dog API based on the sub-breed passed in
// async function getRandomImageByBreed_SubBreed(breed, subBreed) {
//   // Make a request to the Dog API with the current value of breed and sub-breed
//   const response = await fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
//   // Convert the response into a JSON object
//   const data = await response.json();
//   // Return the data object
//   return data;
// }

// // Get a list of all the breeds from the Dog API and store them in a JavaScript array
// document.addEventListener("DOMContentLoaded", function() { fetch("https://dog.ceo/api/breeds/list/all")
//   .then(response => response.json())
//   .then(data => {
//     // Initialize the variable breed_map to hold a map of breed and sub-breed names
//     let breed_map = new Map();

//     // Get the array of breed names from the data object
//     const breeds = Object.keys(data.message);

//     // Loop through the array of breed names
//     for (let i = 0; i < breeds.length; i++) {
//       // Get the sub-breeds for the current breed
//       const subBreeds = data.message[breeds[i]];
      
//       // Check if the current breed has sub-breeds
//       if (subBreeds.length < 1) {
//         // Add the breed name to the breed dictionary
//         // Check to see if the breed name is already in the map
//         if (!breed_map.has(breeds[i])) {
//           breed_map.set(breeds[i], new Array());
//         }
//       } 

//       else {
//         // Loop through the array of sub-breeds
//         for (let j = 0; j < subBreeds.length; j++) {
//           // Add the sub-breed name to the breed dictionary
//           // Check to see if the breed name is already in the map
//           if (breed_map.has(breeds[i])) {
//             // console.log(breed_map.get(breeds[i]));
//             // breed_map.get(breeds[i]).push(subBreeds[j]);
//           }
//           else {
//             breed_map.set(breeds[i], new Array().push(subBreeds[j]));   
//           }
//         }
//       }

    
//     // Loop through the map of breed names to create data tags and data definitions
//     for (let k of breed_map.keys()) {
//       // Get the current sub-breeds
// //        const subBreeds = breed_map.get(k);
//       // Check if the current breed has sub-breeds
//       // if (subBreeds.length < 1) {
//         // Add the breed name to the breed list
//       document.getElementById("breed_list").innerHTML += "<dt>"  + k + "</dt>";
//       document.getElementById("breed_list").innerHTML += "<dd>" + 'None' + "</dd>";
//       // } 
//       // else {
//       //   // Loop through the array of sub-breeds
//       //   // console.log(k + " " + subBreeds);


//       //   // for (let j = 0; j < subBreeds.length; j++) {

//       //   //   // console.log(k + " " + subBreeds[j]);

//       //   //   // Add the sub-breed name to the breed list
//       //   //   document.getElementById("breed_list").innerHTML += "<dt>" + k  + "</dt>";
//       //   //   document.getElementById("breed_list").innerHTML += "<dd>" + subBreeds[j] + "</dd>";
//       //   // }
//       // }

//     }

//     // for (let i = 0; i < breed_map.length; i++) {
//     //   document.getElementById("breed_list").innerHTML += "<dt>" + breed_array[i] + "</dt>";      
//     //   document.getElementById("breed_list").innerHTML += "<dd>" + breed_array[i] + "</dd>";
//     // }
//     }
//   })
// .catch(error => {
//   // console.error(error);
//   console.log('error');
// });
// });



