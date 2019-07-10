'use strict';

function grouping_count(collection) {
//  var result =  collection.reduce((m, x) => {
//   m[x] = (m[x]+1)||1;
//   return m;
//  },{});
//  console.log("result:"+result[0]);
var object = {};
var object = {}
object = collection.filter((num) =>{
   //object1
   object = (object[num] +1) || 1;
  return object;
});
console.log("object:"+object);
}

module.exports = grouping_count;