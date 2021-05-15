
var a = 5;
var b = 6;
operation = prompt("Выберите, какую операцию хотите провести: + ,  - ,  * ,  / ");

function add(a, b) {
	return a + b;
}


function min(a, b) {
	return a - b;
}

function mult(a, b) {
	return a * b;
}


function div(a, b) {
	return a / b;
}


function mathOperation(a, b, operation) {
      switch (operation) {
      	case "+":
      		alert(add(a, b));
      		break;
         case "-":
      		alert(min(a, b));
      		break;
         case "*":
      		alert(mult(a, b));
      		break;
      	case "/":
      		alert(div(a, b));
      		break;
      	default:
      		alert("Введены неккоректные данные");
   }
}

mathOperation(a, b);


