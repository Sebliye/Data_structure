"use strict"
   //using set to remove duplicates  
   /**
    * @param  {arr} array with duplicates
    * @returns non duplicates array
    */
   function removeduplicates(arr){
    const myset=new Set(arr);
    const unique=[myset];
   return unique;
     }
     const arr=[1,1,3,2,2,3,4];
     console.log(removeduplicates(arr));
    
    
  
  