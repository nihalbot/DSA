// function removeDuplicate(nums) {
//     nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         for (let k = j; k < nums.length - 1; k++) {
//           nums[k] = nums[k + 1];
//         }
//         nums.length--; 
//         j--; 
//       }
//     }
//   }
//   return nums.length;
// }

function removeDuplicate(arr){
  let x = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[x]){
      x++;
      arr[x] = arr[i];
    }
  }
  return x+1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicate(nums);

for(let i = 0; i < k; i++){
  console.log(nums[i]);
}
