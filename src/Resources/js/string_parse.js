function parseResult(transcript_str){

    // get the transcript result as a string to parse
    var transcript_str = document.getElementById("output").innerHTML.trim();

    // get the keyword
    var keyword = "hello";

    // get the index of the keyword
    var index = transcript_str.indexOf(keyword);

    // get the length of the transcript_str
    var length = transcript_str.length;

    // get the substring of the transcript_str from the beginning of the transcript_str to the index of the keyword
    var first = transcript_str.substring(0, index);

    // get the substring of the transcript_str from the index of the keyword to the end of the transcript_str
    var last = transcript_str.substring(index + keyword.length, length);

    // get the substring of the transcript_str from the beginning of the transcript_str to the index of the keyword
    var first = transcript_str.substring(0, index);

    // get the substring of the transcript_str from the index of the keyword to the index of the keyword plus the length of the keyword
    var middle = transcript_str.substring(index, index + keyword.length);

    // get the substring of the transcript_str from the index of the keyword plus the length of the keyword to the end of the transcript_str
    var last = transcript_str.substring(index + keyword.length, length);

    // get the substring of the transcript_str from the beginning of the transcript_str to the index of the keyword
    var first = transcript_str.substring(0, index);

    alert("First - Middle - Last: " + first + " - " + middle + " - " + last);
    return "Found an instance of the keyword: " + middle + " at index: " + index + " in the transcript_str: " + transcript_str;

}