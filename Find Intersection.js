//Find Intersection

/*Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/

function FindIntersection(strArr) { 

    // code goes here  

    //1. Create 2 variables: firstString takes first element in array & secondString takes the second element in array. 
    //2. use split(', ') method to separate the strings at the coma and turn them into arrays
    //Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] => firstString output: ['1, 3, 4, 7, 13'] and secondString output: ['1, 2, 4, 13, 15']
  
    let firstString = strArr[0].split(', ');  
    let secondString = strArr[1].split(', ');

    //3.Create variable called intersection to take firstString array and use the filter() method to return numbers that exist in both arrays
    let intersection = firstString.filter(element => secondString.find(firstString => firstString === element));
   
    //4. Return array if matches found.
    // or return 'False'.
    return intersection.length > 0 ? intersection.join(',') : 'false'
    
}
     
  // keep this function call here 
  console.log(FindIntersection(readline()))