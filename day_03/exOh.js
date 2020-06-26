function ExOh(str) {
    var x_count = 0, o_count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            x_count = x_count + 1;
        } else if (str[i] === 'o') {
            o_count = o_count + 1;
        }
    }

    return x_count === o_count;
}
console.log(ExOh);