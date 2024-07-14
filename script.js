// add constants 
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// holds a list of the highligted words
let current_words = [];

// create a list that includes the words from the highlight function
let words_in_sentence = []; 

//list holds the start and end index of each word in a sentence
let words_in_sentence_indexes = []; 

// Persistent variables
let increment = 0;
let incrementMinus1 = 0;


// where in the word the user is currently typing 
let current_index = 0 ;
let quoteElement = document.getElementById('quote');
let messageElement = document.getElementById('message');
let typedValueElement = document.getElementById('typed-value');

document.getElementById("start").addEventListener("click", function () {
  
  // reset increments
  increment = 0;
  incrementMinus1 = 0;
  
  // clear previous values
  words_in_sentence = [];
  words_in_sentence_indexes = [];
  
    //display current sentence
   displaySentence();
   calcTime();
   //console.log(typedValueElement.value);

})

document.getElementById("typed-value").addEventListener("input", updateValue);

function updateValue(e) {
    typedValueElement.textContent = e.target.value;
    //let word1 = words_in_sentence[0];
    //console.log(words_in_sentence[0]);

    
    //console.log(words_in_sentence_indexes[2]);
    
    
    console.log(typedValueElement.textContent);
    console.log(words_in_sentence[incrementMinus1+1]);

    if(typedValueElement.textContent === words_in_sentence[incrementMinus1]){
        
        if(words_in_sentence[incrementMinus1])

        
        console.log("Success");
        typedValueElement.value = "";
        
        const originalText = quoteElement.innerText;
        const before = originalText.slice(0,words_in_sentence_indexes[0+increment]);
        const highlight = originalText.slice(words_in_sentence_indexes[0+increment], words_in_sentence_indexes[1+increment]);
        const after = originalText.slice(words_in_sentence_indexes[1+increment],words_in_sentence_indexes[words_in_sentence_indexes.length]);
        increment+=2;
        incrementMinus1+=1;
        console.log(words_in_sentence[incrementMinus1]);
        //var innerHTML = quoteElement.innerHTML.replaceAll(/\<span class\=\"highlight\"\>(.*?)\<\/span\>/gi, "$1").replaceAll(word1, '<span class="highlight">' + word1 + "</span>");
        quoteElement.innerHTML = before + '<span class="highlight">' + highlight + '</span>' + after ;


}
    }



function displaySentence(color,index ) {
    quoteElement.style.fontSize = 'x-large';
    quoteElement.style.fontWeight = 'bold';
    quoteElement.append(quotes[current_index]);

    current_sentence =  quotes[current_index]; 
    highlight()
    /* if (color = 'green'){
        //mmake it green from index 0 to current index

        //quotes[current_index(letter_index)];
    }
    if (color = 'red'){
        
    } */
}

// displays time when the game is finished
function calcTime(){
    var start = Date.now();
    setInterval(function() {
        var delta = Date.now() - start; // milliseconds elapsed since start
        
        output(Math.floor(delta / 1000)); // in seconds
        // alternatively just show wall clock time:
        output(new Date().toUTCString());
    }, 1000); // update about every second
}

//highlights the current letter either green or red depending on if tbe user types it correctly or nor
function highlight(){
    current_sentence =  quotes[current_index]; 
    
    
    
    
    //starting point for a word
    let previous_start = 0 ;
    
    for (let i =0; i<current_sentence.length; i++) {
        if(current_sentence.charAt(i)===' '){
            words_in_sentence.push(current_sentence.substring(previous_start,i));

            //push 2 values to hold indexes 
            words_in_sentence_indexes.push(previous_start);
            words_in_sentence_indexes.push(i);

            previous_start = i + 1;
            
        }
    }
    //console.log(words_in_sentence[0])

    //whats typed is correct
    /*
    if(Text(current_index) === quotes[current_index(letter_index)]){
        //make it green
        displaySentence('green');
    }
    */ 
}