//Longest Word
//Have the function LongestWord(sen) take the sen parameter being passed and return the longest word
// in the string. If there are two or more words that are the same length, return the first word from 
//the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain 
//numbers, for example "Hello world123 567"

//Examples

//Input: "fun&!! time"
//Output: time

//Input: "I love dogs"
//Output: love

//My solution

function LongestWord(sen) { 
  
 //1. Use the regex function .replace(/[^a-zA-Z0-9 ]/g, "") which returns words with
 // only the characters a through z and 0 through 9, stripping away punctuation
 // e.g. "fun&!! time" becomes [fun, time]
 //split the string into array of strings
 //eg "I love dogs" becomes ['I', 'love', 'dogs']

  let splArray = sen.replace(/[^a-zA-Z0-9 ]/g, "").split(' '); 
     
  //2. initiate a a variable that will hold the longest word.
  let longestLen = 0;
  let longestWordIn;
  
 //3. Create the FOR loop with IF statement
 
 for ( let i = 0; i < splArray.length; i++) {
   if (splArray[i].length > longestLen) { //If splArray[i].length is greater than the word it is been compared with ...
     longestWordIn = splArray[i];           //then the longest words takes the new value
     longestLen = splArray[i].length;

   }
 }



  return longestWordIn; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
