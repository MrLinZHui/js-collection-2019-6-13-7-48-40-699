'use strict';

function choose_even(collection) {
  // var array = [];
  // for(var i = 0;i<collection.length;i++){
  //   if(collection[i]%2==0){
  //     array.push(collection[i]);
  //   }
  // }
  // return array;
  //implement here
  return collection.filter((number) =>{
    return number % 2 ==0;
  });
}

module.exports = choose_even;
