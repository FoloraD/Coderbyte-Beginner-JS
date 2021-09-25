/*
First Factorial

Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
Factorial = you are multiplying that number by each consecutive number minus one. eg The patterns would be

0 = 1
1 = 1
2 = 2 * 1
3 = 3 * 2 * 1
4 = 4 * 3 * 2 * 1
5 = 5 * 4 * 3 * 2 * 1

Examples

Input: 4
Output: 24

Input: 8
Output: 40320
*/

//My Solution

function FirstFactorial(num) { 

// If the number is 0, its factorial is 1.
   if (num == 0) {
        return 1;

 //otherwise call the recursive case    
    } else {
        return (num * FirstFactorial(num - 1));
    }



  
  }
     
  // keep this function call here 
  console.log(FirstFactorial(readline()));        