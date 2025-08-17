// const a = "Hello There";
// console.log(a);

// let arr = [7, 5, 6, 7, 8, [2, 4]];
// arr.map((item)=>(
//     console.log(item)
// ));

// let obj = {
//     name: "Tanvir",
//     age: 20,
//     gender: "Male",
// };

// console.log(obj.name + " " + obj.age + " " + obj.gender);
//console.log(arr[5][0]);

// Functions

// function printHelloWorld(){
//     console.log("Hello World");
// }

// printHelloWorld();

// function greet(name){
//     console.log("Namaste" + " " + name);
// }

// greet("Nihal");

// function sum(num1, num2){
//     const sum = (num1 + num2);
//     console.log(sum);
// }

// sum(5, 10);

// multiplication function

// function multiplication(num1, num2){
//     const result = (num1 * num2);
//     console.log(result);
// }
// multiplication(5, 6);

// square of a number

// function square(number){
//     return (number * number);
// }
// const result = square(9);
// console.log(result);

// Create a function which accepts the age and tells whether a person is eligible to vot or not

// function eligibleToVote(age){
//     if(age >= 18){
//         return true;
//     }else{
//         return false;
//     }
// }

// const age = 8;

// const result = eligibleToVote(age);

// if(result){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }

// Create a function to cheek if a number is Even or Odd

// function isEvenOdd(number){
//     if(number % 2 == 0){
//         console.log(number + " " + "The number is Even");
//     }else{
//         console.log(number + " " + "The number is Odd");
//     }
// }

// isEvenOdd(4);
// If- Else =>^

// Loop
// - for
// - while

// for loop
//   for(let i = 0; i < 20; i++){
//     console.log(i);
//   }

// for(let i = 0; i <= 4; i++){
//     console.log(i+1);
// }

// for(let i = 5; i > 0; i--){
//     console.log(i);
// }

// for(let i = 1; i > 0; i++){
//     console.log(i);
// }

// function greet(number){
//     console.log("Namaste " + number);
// }
// for(let i = 0; i < 100; i++){
//     greet(i);
// }

// let arr = [10, 5, 2, 0, 8, 3];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// Print all the even numbers in the array
// let arr = [10, 5, 2, 0, 8, 3];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i] + " is a Even number");
//     }
// }
// Some Program

// Write a function that searches for an element in an array and return the index, if the element is not present then just return -1

// Approach 1
// function searchElement(arr, value){
//     let isFound = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == value) {
//         isFound = i;
//         return isFound;
//       } else {
//         isFound = -1;
//       }
//     }
//     console.log(isFound);
// }

// Approach 2
// function searchElement(arr, value){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == value){
//             return i;
//         }
//     }
//     return -1;
// }
// let arr = [3, 6, 8, 9, 4, 5, 7, 2];
// const searchValue = 4;

// const result = searchElement(arr, searchValue);

// console.log(result);

// Write a function that returns the number of negative numbers in an array

// function findNegativeNumber(arr){
//     let negativeNumCounter = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             negativeNumCounter++;
//         }
//     }
//     return negativeNumCounter;
// }

// let arr = [3, 5, 8, -1, 4, -6, 0, -3, 4, 6, 1];

// let result = findNegativeNumber(arr);

// console.log(result);

// Write a function that shows the number of negative numbers in an array

// function findNegativeValue(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             console.log(arr[i]);
//         }
//     }
// }

// let arr = [3, 5, 8, -1, 4, -6, 0, -3, 4, 6, 1];
// findNegativeValue(arr);

// Write a function that returns the largest number in an array

// Second Approach
// function findTheLargest(arr){
//     let largestNumber = arr[0];

//     for(let i = 0; i < (arr.length); i++){
//         if(arr[i+1] > arr[i]){
//             largestNumber = arr[i+1];
//         }
//     }
//     return largestNumber;
// }

// First approach
// function findTheLargest(arr){
//     let largestNumber = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largestNumber){
//             largestNumber = arr[i];
//         }
//     }
//     return largestNumber;
// }
// let arr = [-3, -1, -3, -50, -3, -40, -80, -70, -40, -100 , 0];

// let result = findTheLargest(arr);
// console.log(result);

// Write a function that returns the minimum number in an array

// function findTheMinimum(arr){
//     let minimumNum = Infinity;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < minimumNum){
//             minimumNum = arr[i];
//         }
//     }
//     return minimumNum;
// }

// let arr = [4, 6, 2, 7, -5, 4, 9, 556, 221, 222, 1, 0. -1];

// const result = findTheMinimum(arr);

// console.log(result);

// Find the second largest number in an array

// function findTheSecondLargest(arr) {
//   if (arr.length < 2) {
//     console.log(
//       "Array must contain at least to element to find second largest"
//     );
//     return;
//   }

//   let firstLargest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// for find second minimum number
// function findTheSecondMinimum(arr) {
//   if (arr.length < 2) {
//     console.log(
//       "To find the second minimum number array need at least 2 elements"
//     );
//     return;
//   }

//   let minimunNumber = Infinity;
//   let secondMinimum = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minimunNumber) {
//       secondMinimum = minimunNumber;
//       minimunNumber = arr[i];
//     } else if (arr[i] < secondMinimum && arr[i] != minimunNumber) {
//       secondMinimum = arr[i];
//     }
//   }
//   return secondMinimum;
// }

// let arr = [4, 9, 0, 2, 8, 7, 10];

// const result = findTheSecondMinimum(arr);
// console.log(result);

// nested loop
// let counter = 0;
//  for(let i = 0; i < 3; i++){
//   for(let j = 0; j < 3; j++){
//     console.log(counter + 1);
//     counter++;
//   }
//  }

// for(let i = 0; i < 3; i++){
//   for(let j = 0; j < i; j++){
//     console.log("i=", i, "  j=", j);
//   }
// }

// for(let i = 0; i < 3; i++){
//   for(let j = i; j >= 0; j--){
//     console.log("i=", i, "  j=", j);
//   }
// }
// for(let i = 5; i > 0; i--){
//   for(let j = 0; j < i; j++){
//     console.log("i="+ i + "  j=" + j);
//   }
// }

// Print like this
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for(let i = 0; i < 5; i++){
//   for(let j = 0; j < 5; j++){
//     process.stdout.write(`${"* "}`);
//   }
//   console.log()
// }

// for(let i = 0; i < 5; i++){
//   for(let j = 0; j <= i; j++){
//     process.stdout.write(`${j+1}` + " ");
//   }
//   console.log()
// }

// for(let i = 5; i > 0; i--){
//   for(let j = 0; j < i; j++){
//     process.stdout.write(`${"*"}` + " ");
//   }
//   console.log();
// }

// for(let i = 1; i <= 6; i++){
//   for(let j = 1; j <= i; j++){
//     if(j % 2 != 0){
//       process.stdout.write(`${1 }` + " ");
//     }else{
//       process.stdout.write(`${0 }` +  " ");
//     }
//   }
//   console.log()
// }

// for(let i = 0; i < 5; i++){
//   for(let j = 0; j <= i; j++){
//     process.stdout.write(`${j+1}` + " ");
//   }
//   console.log()
// }

// let t = 0;
// for (let i = 5; i > 0; i--) {
//   //space
//   for (let j = 1; j < i; j++) {
//     process.stdout.write(`${" "}`);
//   }
//   for (let k = 0; k <= t; k++) {
//     process.stdout.write(`${"*"}`);
//   }
//   t++;
//   console.log();
// }

// for (let i = 0; i < 5; i++) {
//   //space
//   for (let j = 5; j > i+1; j--) {
//     process.stdout.write(`${" "}`);
//   }
//   for (let k = 0; k <= i; k++) {
//     process.stdout.write(`${"*"}`);
//   }
//   console.log();
// }

// for(let i = 0; i < n; i++){
//   let row = '';
//   for(let j = 0; j < n; j++){
//       row += '* ';
//   }

//   console.log(row);
// }

// for( let i = 0; i < n; i++){
//   let print = "";
//   for(let j = 0; j <= i; j++){
//     print += "* ";
//   }
//   console.log(print);
// }
// const n = 5;

// for (let i = 0; i < n; i++) {
//   let print = "";
//   for (let j = 0; j <= i; j++) {
//     print += j + 1 + " ";
//   }
//   console.log(print);
// }

// for (let i = 0; i < n; i++) {
//   let print = "";
//   for (let j = 0; j <= i; j++) {
//     print += i + 1 + " ";
//   }
//   console.log(print);
// }

// for (let i = 5; i > 0; i--) {
//   let print = "";
//   for (let j = 0; j < i; j++) {
//     print += j + 1 + " ";
//   }
//   console.log(print);
// }

// for (let i = 0; i < n; i++) {
//   let print = "";
//   for (let j = 0; j < n-i; j++) {
//     print += j + 1 + " ";
//   }
//   console.log(print);
// }

// for(let i = 0; i < n; i++){
//   let print = "";
//   //space
//   for(let j = 0; j < (n - i - 1); j++){
//     print += " ";
//   }
//   for(let k = 0; k <= i; k++){
//     print += "*";
//   }
//   console.log(print);
// }

// for (let i = 0; i < n; i++) {
//   let toggle = true;
//   let print = "";
//   for (let j = 0; j <= i; j++) {
//     print += toggle ? "1 " : "0 ";

//     if(toggle){
//       toggle = false;
//     }else{
//       toggle = true;
//     }
//   }
//   console.log(print);
// }

// let toggle = true;

// for (let i = 0; i < n; i++) {
//   let print = "";
//   for (let j = 0; j <= i; j++) {
//     print += toggle ? "1 " : "0 ";

//     if (toggle) {
//       toggle = false;
//     } else {
//       toggle = true;
//     }
//   }
//   console.log(print);
// }

// while(number > 0){
//   number = (number / 10);
//   number = Math.floor(number)
//   count++;
// }

// let number = 0;

// function countDigit(number) {
//   let count = 0;

//   if (number == 0) {
//     return 1;
//   }

//   number = Math.abs(number);

//   for (let i = 0; number > 0; i++) {
//     number = number / 10;
//     number = Math.floor(number);
//     count++;
//   }
//   return count;
// }

// const result = countDigit(number);

// console.log(number + " Contains ", result + " Digits");

// function reverseNumber(number) {
//   let reverseNum = 0;
//   let counter = 0;
//   let base = 1;
//   let tempNum = number;
//   let orginalNum = number;

//   for (let i = 0; tempNum > 0; i++) {
//     tempNum = Math.floor(tempNum / 10);
//     counter++;
//   }

//   for (let i = 0; i < counter - 1; i++) {
//     base *= 10;
//   }

//   for (let i = 0; number > 0; i++) {
//     let temp = 0;
//     temp = number % 10;
//     number = Math.floor(number / 10);
//     reverseNum += base * temp;
//     base = Math.floor(base / 10);
//   }

//   if (orginalNum == reverseNum) {
//     console.log("The number is palindrom");
//   } else {
//     console.log("The number is not a palindrom");
//   }
// }

// //Another Approach
// function findPallindrom(number){
//   let reverseNumber = 0;
//   let orginalNum = number;
//   for(let i = 0; number > 0; i++){
//     let reminder = 0;
//     reminder = (number % 10);
//     number = Math.floor((number / 10));
//     reverseNumber = ((10 * reverseNumber) + reminder);
//   }
  
//   if(orginalNum == reverseNumber){
//     console.log("The number is pallindrom");
//   } else{
//     console.log("The number is not a pallindrom");
//   }
// }

// let number = 121;
// const result = findPallindrom(number);

// if(result){
//   console.log("")
// }

// var reverse = function (x) {
//   let orginalNumber = x;
//   let reverseNumber = 0;
//   x = Math.abs(x);

//   for (let i = 0; x > 0; i++) {
//     let reminder = 0;
//     reminder = x % 10;
//     x = Math.floor(x / 10);
//     reverseNumber = (10 * reverseNumber) + reminder;
//   }

//   if (reverseNumber > Math.pow(2, 31) || reverseNumber < Math.pow(-2, 31)) {
//     return 0;
//   } 

//   return (orginalNumber < 0) ? -reverseNumber: reverseNumber;
// };

// let number = 123;

// let result = reverse(number);
// console.log(result);