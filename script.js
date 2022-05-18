const phrase = "The man we saw saw a saw"
//the, man, we, saw, a

// truncate
// return shortend version of the passed phrase
// phrase is limit by the numbers of cahracters
// limit is max number of characters
// don't end in the middle in the word
// Add ... at the end the returned string
function truncate (phrase, limit){
    //indexof to return the index of the next space after limit
    //use offset, to search beyond first occurance
    //use limit as offset
    const end = phrase.indexOf(' ', limit)

    //get part of a string with substring
    return phrase.substring(0, end) + '...'
}

console.log(truncate(phrase, 13))

//uniqueWords
//Return an array of unique words in a phrase
function uniqueWords (phrase) {
    // create an array to hold unique words
    const uniqueWords = []

    // use split method to break string into words (array)

    const words = phrase.split(' ')

    // use a loop to check each word

    for (const word of words) {

         /* use includes method on uniqueWords array to 
    check if the array contains words */
    // if contains the word, not a new word
    // if does not contains, new word add to uniqueWords
    // includes method return ture or false
    if (!uniqueWords.includes(word)){
        uniqueWords.push(word)
    }
    }

    return uniqueWords
}

console.log(uniqueWords(phrase))