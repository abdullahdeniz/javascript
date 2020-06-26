// function genPass(n)     // e.g. pass(10) return 'unQ0S2j9FY'
// {
//     let c='abcdefghijklmnopqrstuvwxyz'; c+=c.toUpperCase()+1234567890;
//     return '-'.repeat(n).replace(/./g,b=>c[~~(Math.random()*62)])
// } 

function passwordGen(num){
    var num = 7
    var arr = [ 'A', ... 'Z'];
    var result = " ";
    if (num < 6 || num > 15 ){
        console.log('erreur');
    } else {
        for ( var i = 0; i < num; i++){
            var random = Math.floor(Math.random(),arr.length)
            var letter = arr[random];
            result = result + letter;
        }
        return result;
    }
    }
console.log(passwordGen);