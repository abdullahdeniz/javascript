function isPalindrome (str){
    var arr = str.split('');
    for (var i=0; i<arr.length; i++){
        if (arr[i]== '  '){
            arr[i].splice(i,1);
            return true;
        }
    }
}


// function fastestIsPalindrome(str) {
//     var len = Math.floor(str.length / 2);
//     for (var i = 0; i < len; i++)
//       if (str[i] !== str[str.length - i - 1])
//         return false;
//     return true;
//   }