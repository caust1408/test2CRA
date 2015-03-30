


function date(num1,num2) {

	if (num1 > num2) {
		print(new Date(num1));
	}
	else {
		print(new Date(num2));
	}
}

var x = new Date(1991, 9, 1).getTime();
var y = new Date(2002, 2, 14).getTime();
date(x,y);
