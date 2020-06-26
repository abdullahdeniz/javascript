
function formatDate(date){
    var newDate = new Date(date);   
    var years = newDate.getFullYear();
    var month = newDate.getMonth()+1;
    var day = newDate.getDate();
    var newFormatDate = day + "/" + month +  "/" + years;
    return newFormatDate;
}

console.log(formatDate("2018-11-17"));


