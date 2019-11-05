//symbole balancer
class symbol_Balancer{
    constructor(str){
        this.str=[];
    } 
    isBalanced(delimeters){
        for(let i=0;i<this.str.length;i++){
            //if character is open symbol
        if(str.charAt(i)==="{"||str.charAt(i)==="("||str.charAt(i)==="["){
            let left=this.push(str.charAt(i);
        }
        //if character is closed symbol
       else if(str.charAt(i)==="}"||str.char(i)===")"||str.charAt(i)==="]"){
           //if the stack is empty
           if(str.length===0){
               return false;
           }
           //if the stock is not empty pop the symbol
           else{
               let left=this.pop(str.charAt(i));
           }
    }
    else if(left===right){
        return true;
    }
}
    