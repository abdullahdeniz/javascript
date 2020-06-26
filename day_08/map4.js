var arr = [1, 2, 3, 4];

function isEven(num){
    return num % 2 === 0;
}

// var arr2 = arr.map(isEven){
//     return evenDrOdd;
// });

var arr2 = arr.map(function(num){
    return num % 2 === 0;
});

console.log(arr2);



// // pass a function to map
// const map1 = array1.map(x => x + 1);

// console.log(map1);
// // expected output: Array [2, 3, 4, 5]