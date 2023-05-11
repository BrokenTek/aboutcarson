// // new speech recognition object
// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var recognition = new SpeechRecognition();

// // This runs when the speech recognition service starts
// recognition.onstart = function() {
//     console.log("We are listening. Try speaking into the microphone.");
// };

// recognition.onspeechend = function() {
//     // when user is done speaking
//     recognition.stop();
// }

// // This runs when the speech recognition service returns result
// recognition.onresult = function(event) {
//     var transcript = event.results[0][0].transcript;
//     var confidence = event.results[0][0].confidence;
//     return transcript, confidence;
// };

// // start recognition
// recognition.start();

// // Shows the output by appending the transcript to the output
// function showOutput(message) {
//     var output = document.getElementById("output");
//     output.innerHTML = message;
// }

// btn1 = document.getElementById("start_button");

// btn1.onmouseover = showOutput(transcript);

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.onresult = function(event) {
  if (event.results.length > 0) {
    q.value = event.results[0][0].transcript;
    // q.form.submit();
    document.getElementById('output').innerHTML = q.value;
  }
}
