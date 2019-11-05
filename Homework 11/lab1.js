/* eslint-disable require-jsdoc */

"use strict"
//sum of array using iteration
function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sum([1,2,3]));
//sum of array using recursion
function sum(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr.pop() + sum(arr);
}
console.log(sum([1, 2, 3]));
//finding the minimum using recursion
function min(array) {
    if (array.length > 1) {
        let other = min(array.splice(1));
        if (other < array[0]) {
            return other;
        }
    }
    return array[0];
}
console.log(min[1,2,3]);
//finding the minimum using recusrion
function minimum(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        return min;
    }
}
console.log(minimum([1,2,3]));

