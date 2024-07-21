// question 1?
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
      
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    
    return arr;
}

let arraySmall = [1, 2, 3, 4, 5];
console.log("Original array:", arraySmall);
let reversedArrSmall = reverseArray(arraySmall);
console.log("Reversed array:", reversedArrSmall);


let arrayLarge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Original array:", arrayLarge);
let reversedArrLarge = reverseArray(arrayLarge);
console.log("Reversed array:", reversedArrLarge);



// question 2
function filterNegativeNumbers(arr){
    let result = [];
    for (let i = 0; i <arr.length; i++){
        if (arr[i] >=0){
            result.push(arr[i]);
        }
    }
    return result

}



// Question 5
function checkRange(num1,num2){
    if ((num1 >= 50 && num1 <= 99)||(num2 >=50 && num2 <=99)){
        return true;
    }else {
        return false;

    }}
    console.log(checkRange(40,60));
    console.log(checkRange(30,90));
    console.log(checkRange(20,30));
    console.log(checkRange(80,100));
    console.log(checkRange(100,120));



    // Question 3
    function countVowels(str) {
    
        const vowels = "aeiouAEIOU";
        let count = 0;
    
        
        for (let i = 0; i < str.length; i++) {
        
            if (vowels.includes(str[i])) {
                count++;
            }
        }
    
        return count;
    }
    
    let str = "Hello World";
    console.log(`Number of vowels in "${str}": ${countVowels(str)}`);



// question 6
function minMappedValue(arr, mapFn) {
    
    const mappedValues = arr.map(mapFn);

    
    const minValue = Math.min(...mappedValues);

    return minValue;
}

let numbers = [1, 2, 3, 4, 5];
let squareFn = x => x * x;
let minValue = minMappedValue(numbers, squareFn);
console.log(`Minimum value of squares: ${minValue}`);

let words = ["apple", "banana", "orange"];
let lengthFn = word => word.length;
minValue = minMappedValue(words, lengthFn);
console.log(`Minimum length of words: ${minValue}`);



// question 7
function createUpdatedString(str) {

    if (str.length >= 3) {
    
        let lastThree = str.slice(-3);

    
        let updatedString = lastThree.repeat(4);

        return updatedString;
    } else {

        return '';
    }
}

let originalString = "Googleclassroom";
let updatedString = createUpdatedString(originalString);
console.log(updatedString);


// question 4
function isPalindrome(str) {
    
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');

    
    const reversedStr = cleanStr.split('').reverse().join('');

  
    return cleanStr === reversedStr;
}

console.log(isPalindrome("kayak"));  
console.log(isPalindrome("mom"));  
console.log(isPalindrome("radar")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("race car"));


// question 8
function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute Angle";
    } else if (angle === 90) {
        return "Right Angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse Angle";
    } else if (angle === 180) {
        return "Straight Angle";
    } else {
        return "Invalid angle. Angle should be between 0 and 180 degrees.";
    }
}
console.log(angleType(45)); 
console.log(angleType(90));   
console.log(angleType(120)); 
console.log(angleType(180)); 
console.log(angleType(-30)); 
console.log(angleType(200)); 



// question 9
function smallestRoundNumber(n) {
    if (n % 10 === 0) {
      return n;
    }
  
    let roundNumber = Math.ceil(n / 10) * 10;
    
    return roundNumber;
  }
  
  let testValue = 592;
  console.log("The smallest round number not less than " + testValue + " is " + smallestRoundNumber(testValue));




//   question 10
function findIndex(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  }
  

  let array = [10, 20, 30, 40, 50];
  let itemToFind = 30;
  let index = findIndex(array, itemToFind);
  console.log("The index of " + itemToFind + " is " + index);