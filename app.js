// TASK 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  //////////////////////////

  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  /////////////////////////

  // let revString = '';
  // for(let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  ////////////////////////

  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  ///////////////////////

  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

  //////////////////////

  //let arr = [...str];
  //let newArr = arr.map((_, i, arr) => {
  //     return arr[arr.length - 1 - i];
  //   });
  //return newArr.join("");

  return str.split('').reduce((revString, char) => char + revString, '');
}

// TASK 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');

  return revString === str;

  ///////////////////////

  //     let isPali = true;
  //     let caseStr = str.toLowerCase()
  //     let arr = caseStr.split('')
  //     for(let i = 0; i < arr.length; i++){
  //         if(arr[i] !== arr[arr.length -1 -i]){
  //             isPali = false;
  //             break;
  //         }
  //     }
  //     return isPali

}

//  shortest one
//  function isPal(s) {
//    return s.split('').reverse().join('') === s;
//  }



// TASK 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);
}



// TASK 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');

  // for(let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }

  // return strArr.join(' ');

  /////////////////////////////

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');

  /////////////////////////////

  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();
  });
}



// TASK 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    // debugger;
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}



// TASK 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  //   for(let i = 1; i <= 100; i++) {
  //     if(i % 15 === 0) {
  //       console.log('FizzBuzz');
  //     } else if(i % 3 === 0) {
  //       console.log('Fizz');
  //     } else if(i % 5 === 0) {
  //       console.log('Buzz');
  //     } else {
  //       console.log(i);
  //     }
  //   }

  // for(let i = 1; i <= 100; i++) {
  //   let printNum=true;
  //    if(i % 3 === 0)
  //      console.log('Fizz');
  //    if(i % 5 === 0)
  //      console.log('Buzz');
  //   // if divisable by 3 then i%3 is zero,
  //   // if divisable by 5 then i%5 is zero,
  //   // if divisable by 3 or 5 then i%3*i%5 is zero then don't print
  //    printNum=((i%3*i%5)!==0);
  //   if(printNum) {
  //      console.log(i);
  //   }
  // }
  for (var i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
      output += 'fizz';
    }
    if (i % 5 === 0) {
      output += 'buzz';
    }
    console.log(output || i);
  }
}

// Call Function
const output = fizzBuzz();

console.log(output);

// TASK 7 : ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // SOLUTION 1

  // // Init chunked arr
  // const chunkedArr = [];
  // // Set index
  // let i = 0;

  // // Loop while index is less than the array length
  // while (i < arr.length) {
  //   // Slice out from the index to the index + the chunk length nd push on to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }

  // return chunkedArr;

  // SOLUTION 2

  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

// TASK 8 : Write a JavaScript program to combine the numbers of a given array into an array containing all combinations??

const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));

// TASK 9: Write a JavaScript program to converts a specified number to an array of digits

const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));


