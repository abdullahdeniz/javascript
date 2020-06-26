function swapCase (str){
    var resultat = " " ;
    for ( var i = 0; i < str.length; i++){
        // console.log(str[i]);
        if (str [i]===str[i].toUpperCase()){
            //console.log(str[i]);
            resultat += str[i].toLowerCase();
        } else if(str[i]===str[i].toLowerCase()){
            // console.log(str[i]);
            resultat += str[i].toUpperCase();
        }
    }
    return resultat;
}
console.log(swapCase("Hello World"));