
        // переменная, в которой хранится выбранное математическое действие
        //let op;
        
    /* function func() {
            // переменная для результата
            let result;
            // получаем первое и второе число
            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);

            // смотрим, что было в переменной с действием, и действуем исходя из этого

            switch (op) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;

                case '/':
                    result = num1 / num2;
                    break;;
                }
            
                if (num2 ==0) {
                    alert("НА НОЛЬ ДЕЛИТЬ НЕЛЬЗЯ");
                }

            // отправляем результат на страницу
            document.getElementById("result").innerHTML = result;
        }*/

        //статестический класс
        class Kalculator{
            static sum(a, b){
            return a + b;
            }
            
            static minus (num1, num2){
                return num1 - num2
            }

            static times (num1, num2){
                return num1 * num2
            }

            static divide (num1, num2){
                return num1 / num2
            }
        }

        document.querySelector('.plus').addEventListener('sumbit', () =>{
            

            const a= Number(document.getElementById("num1").value);
            const b= Number(document.getElementById("num2").value);

            const sum = Kalculator.sum(a,b);
            console.log(sum);
            //document.getElementById("sum").innerHTML = result;
        }) 
