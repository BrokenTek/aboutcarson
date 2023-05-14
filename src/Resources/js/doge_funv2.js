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

      // create dict/map of all breeds with their respective api expected values
      // const breedNames = require('txt/breed_names.txt');
      // const breedValues = require('txt/breed_values.txt');

      // const fs1 = require('fs');
      // const fs2 = require('fs');

      // fs1.readFile('./txt/breed_names.txt', 'utf-8', (err, data) => {
      //     if (err) throw err;
      //     console.log(data);
      // });

      // fs2.readFile('./txt/breed_values.txt', 'utf-8', (err, data) => {
      //     if (err) throw err;
      //     console.log(data);
      // });

      const breedNames = [
        "Affenpinscher",
        "African",
        "Airedale",
        "Akita",
        "Appenzeller",
        "Australian Shepard",
        "Basenji",
        "Beagle",
        "Bluetick",
        "Borzoi",
        "Bouvier",
        "Boxer",
        "Brabancon",
        "Briard",
        "Norwegian Buhund",
        "Boston Bulldog",
        "English Bulldog",
        "French Bulldog",
        "Staffordshire Bullterrier",
        "Cairn",
        "Australian Cattledog",
        "Chihuahua",
        "Chow",
        "Clumber",
        "Cockapoo",
        "Border Collie",
        "Coonhound",
        "Cardigan Corgi",
        "Coton de Tulear",
        "Dachshund",
        "Dalmatian",
        "Great Dane",
        "Scottish Deerhound",
        "Dhole",
        "Dingo",
        "Doberman",
        "Norwegian Elkhound",
        "Entlebucher",
        "Eskimo",
        "Finnish Lapphund",
        "Bichon Frise",
        "German Shepherd",
        "Italian Ireyhound",
        "Groenendael",
        "Havanese",
        "Afghan Hound",
        "Basset Hound",
        "Blood Hound",
        "English Hound",
        "Ibizan Hound",
        "Plott Hound",
        "Walker Hound",
        "Husky",
        "Keeshond",
        "Kelpie",
        "Komondor",
        "Kuvasz",
        "Labrador",
        "Leonberg",
        "Lhasa",
        "Malamute",
        "Malinois",
        "Maltese",
        "Bull Mastiff",
        "English Mastiff",
        "Tibetan Mastiff",
        "Mexican Hairless",
        "Mix",
        "Bernese Mountain",
        "Swiss Mountain",
        "Newfoundland",
        "Otterhound",
        "Caucasian Ovcharka",
        "Papillon",
        "Pekinese",
        "Pembroke",
        "Miniature Pinscher",
        "Pitbull",
        "German Pointer",
        "German Longhair Pointer",
        "Pomeranian",
        "Miniature Poodle",
        "Standard Poodle",
        "Toy Poodle",
        "Pug",
        "Puggle",
        "Pyrenees",
        "Redbone",
        "Chesapeake Retriever",
        "Curly Retriever",
        "Flatcoated Retriever",
        "Golden Retriever",
        "Rhodesian Ridgeback",
        "Rottweiler",
        "Saluki",
        "Samoyed",
        "Schipperke",
        "Giant Schnauzer",
        "Miniature Schnauzer",
        "Italian Segugio",
        "English Setter",
        "Gordon Setter",
        "Irish Setter",
        "English Sheepdog",
        "Shetland Sheepdog",
        "Shiba",
        "Shihtzu",
        "Blenheim Spaniel",
        "Brittany Spaniel",
        "Cocker Spaniel",
        "Irish Spaniel",
        "Japanese Spaniel",
        "Sussex Spaniel",
        "Welsh Spaniel",
        "English Springer",
        "Japanese Spitz",
        "StBernard",
        "American Terrier",
        "Australian Terrier",
        "Bedlington Terrier",
        "Border Terrier",
        "Cairn Terrier",
        "Dandie Terrier",
        "Fox Terrier",
        "Irish Terrier",
        "Kerryblue Terrier",
        "Lakeland Terrier",
        "Norfolk Terrier",
        "Norwich Terrier",
        "Patterdale Terrier",
        "Russell Terrier",
        "Scottish Terrier",
        "Sealyham Terrier",
        "Silky Terrier",
        "Tibetan Terrier",
        "Toy Terrier",
        "Westhighland Terrier",
        "Wheaten Terrier",
        "Yorkshire Terrier",
        "Vizsla",
        "Spanish Waterdog",
        "Weimaraner",
        "Whippet",
        "Irish Wolfhound"
      ]; 

      const breedValues = [
        "affenpinscher",
        "african",
        "airedale",
        "akita",
        "appenzeller",
        "australian-shepherd",
        "basenji",
        "beagle",
        "bluetick",
        "borzoi",
        "bouvier",
        "boxer",
        "brabancon",
        "briard",
        "buhund-norwegian",
        "bulldog-boston",
        "bulldog-english",
        "bulldog-french",
        "bullterrier-staffordshire",
        "cairn",
        "cattledog-australian",
        "chihuahua",
        "chow",
        "clumber",
        "cockapoo",
        "collie-border",
        "coonhound",
        "corgi-cardigan",
        "cotondetulear",
        "dachshund",
        "dalmatian",
        "dane-great",
        "deerhound-scottish",
        "dhole",
        "dingo",
        "doberman",
        "elkhound-norwegian",
        "entlebucher",
        "eskimo",
        "finnish-lapphund",
        "frise-bichon",
        "germanshepherd",
        "greyhound-italian",
        "groenendael",
        "havanese",
        "hound-afghan",
        "hound-basset",
        "hound-blood",
        "hound-english",
        "hound-ibizan",
        "hound-plott",
        "hound-walker",
        "husky",
        "keeshond",
        "kelpie",
        "komondor",
        "kuvasz",
        "labrador",
        "leonberg",
        "lhasa",
        "malamute",
        "malinois",
        "maltese",
        "mastiff-bull",
        "mastiff-english",
        "mastiff-tibetan",
        "mexicanhairless",
        "mix",
        "mountain-bernese",
        "mountain-swiss",
        "newfoundland",
        "otterhound",
        "ovcharka-caucasian",
        "papillon",
        "pekinese",
        "pembroke",
        "pinscher-miniature",
        "pitbull",
        "pointer-german",
        "pointer-germanlonghair",
        "pomeranian",
        "poodle-miniature",
        "poodle-standard",
        "poodle-toy",
        "pug",
        "puggle",
        "pyrenees",
        "redbone",
        "retriever-chesapeake",
        "retriever-curly",
        "retriever-flatcoated",
        "retriever-golden",
        "ridgeback-rhodesian",
        "rottweiler",
        "saluki",
        "samoyed",
        "schipperke",
        "schnauzer-giant",
        "schnauzer-miniature",
        "segugio-italian",
        "setter-english",
        "setter-gordon",
        "setter-irish",
        "sheepdog-english",
        "sheepdog-shetland",
        "shiba",
        "shihtzu",
        "spaniel-blenheim",
        "spaniel-brittany",
        "spaniel-cocker",
        "spaniel-irish",
        "spaniel", 
        "spaniel-japanese",
        "spaniel-sussex",
        "spaniel-welsh",
        "springer-english",
        "spitz-japanese",
        "stbernard",
        "terrier-american",
        "terrier-australian",
        "terrier-bedlington",
        "terrier-border",
        "terrier-cairn",
        "terrier-dandie",
        "terrier-fox",
        "terrier-irish",
        "terrier-kerryblue",
        "terrier-lakeland",
        "terrier-norfolk",
        "terrier-norwich",
        "terrier-patterdale",
        "terrier-russell",
        "terrier-scottish",
        "terrier-sealyham",
        "terrier-silky",
        "terrier-tibetan",
        "terrier-toy",
        "terrier-westhighland",
        "terrier-wheaten",
        "terrier-yorkshire",
        "vizsla",
        "waterdog-spanish",
        "weimaraner",
        "whippet",
        "wolfhound-irish"
      ];

      const keywords = new Map();
      for (let i = 0; i < breedNames.length; i++) {
        const key = breedNames[i].toLowerCase().trim();
        const value = breedValues[i].toLowerCase().trim();
        keywords.set(key, value);
      }

      // check to see if the transcript contains one of the words in the array
      var transcript_str = transcript.trim().toLowerCase();
      
      alert("debug: " + transcript);

      if (transcript in breedNames || true) {
        // getRandomImageByBreed(keywords[transcript_str]);

        // get the index of the keyword
        var index = breedNames.indexOf(transcript);
        alert("Index: " + index + " Breed Value: " + breedValues[index]);
        // if the transcript contains one of the words in the array then get the image
        if (index > -1) {
          getRandomImageByBreed(breedValues[index]);
        }

      }
      // else if (!transcript) {
      //   alert("Unable to recognize speech");
      // }
      // else {
      //   alert("That is not a valid value");
      // }


      // get the index of the keyword
      var index = breedNames.indexOf(transcript_str);
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
  const response = fetch("https://dog.ceo/api/breeds/"+breed+"/images/random")
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



