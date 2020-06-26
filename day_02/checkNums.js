function CheckNums(num1 , num2) { 
	var isGreater = "false";
	// if num2 is greater than num1
	if ( num1 > num2){
		isGreater = "num1 is greater than num2";
	} else if(num1 < num2){
		isGreater = "num1 is lower than num2"
	} else {
		isGreater = "equal";
	}
	return isGreater;

}

console.log(CheckNums(3, 122));
console.log(CheckNums(67, 67));