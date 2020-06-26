
function timeConvert (num) {
    var heure = Math.floor(num/3600);
    var reste = num-(heure*3600);
    var min = Math.floor(reste/60);
    reste = reste - (60*min);
    return heure + " " + min + " " + reste;
}
console.log(timeConvert('3800'));