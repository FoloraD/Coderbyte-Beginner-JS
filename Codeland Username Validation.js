/*
Codeland Username Validation

Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.

Examples
Input: "aa_"
Output: false

Input: "u__hello_world123"
Output: true

*/

// My solution



function CodelandUsernameValidation(str) { 

    // code goes here  

    const validLength = (str) => str.length >= 4 && str.length <= 25;   // check username is between 4 and 25 characters.
    const validAlphanumeric = /^[A-Za-z]\w+[A-Za-z0-9]$/;              
                                                                    //  - `^`        Start from the beginning of the string.
                                                                    //  - `[]`       Allow any character specified, including...
                                                                    //  - `a-z`      anything from a to z,
                                                                    //  - `A-Z`      anything from A to Z,
                                                                    //  - `0-9`      anything from 0 to 9,
                                                                    //   - `+`        one or more times (change to * to allow empty string)
                                                                    //  - `\w`       and any alphanumeric character from the basic Latin alphabet, including the underscore.
                                                                    //   - `$`       End of string 
                                                                        

    return validAlphanumeric.test(str) && validLength(str); 
  
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));