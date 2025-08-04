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