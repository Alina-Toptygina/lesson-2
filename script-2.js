

var a = 2;
var x = 1 + (a *= 2);

alert(x); /* x = 5, так как в развернутом виде пример будет выглядеть так: var x = 1 + (a = a * 2 );
          Сперва присваивается значние переменной 'a' = 2, затем умножаем,  затем присваивается новое
          значение 'a' = 4, в итоге выполняется сложение и выводим результат на экран. */

