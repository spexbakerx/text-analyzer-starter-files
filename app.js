

count + return number of words


count + return unique words


should produce average word length = get length of all words / by number of words





function stripText(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function numWords(text) {
	stripText(text);
       $("#btnCount").click(function() {
            var strText = jQuery.trim($('#txtArea').val());
            alert('Total No of Words are: ' + strText.split(/\s+/).length);
            });
        });  


function allTheThings(text) {
	numWords(text);
	uniqueWords(text);
	wordLength(text);
	 
}



$(function() {
  allthethings();
});

