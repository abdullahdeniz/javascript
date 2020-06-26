var arr = [ 'pan', 'tool', 'pal', 'top'];
var arr2 = arr.map(function(word){
    var newArr = word.split('');
    console.log(newArr);
    var arrRev = newArr.reverse();
    console.log(arrRev);
    var revWord = arrRev.join('');
    
    return revWord;

}); 
