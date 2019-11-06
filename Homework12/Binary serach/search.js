/* eslint-disable require-jsdoc */
"use strict";

// eslint-disable-next-line no-unused-vars
function binarySearch(value, array) {
    let begin = 0;
    let end = array.length;
    while (end - begin > 1) {
        let middle = Math.floor((begin + end) / 2);
        if (array[middle] > value) {
            end = middle;
        } else {
            begin = middle;
        }
    }
    if (value === array[begin]) {
        return begin;
    } else {
        return -1;
    }
}
//sort the array and add contains method
let arr=["big", "small", "tall", "short", "round", 
"square", "enormous", "tiny", "gargantuan",
 "lilliputian", "numberless", "none", "vast", "miniscule"]
 let sorted=arr.sort((a,b)=>{return a-b});
 console.log(sorted);
 arr.contains(arr,element){
     if(arr.indexOf(element)==element){
         return 1;
     }
     else{
         return -1;
        }

 }
 