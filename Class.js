
class Rabotnic {
        constructor(name, surname, rate, days){
this.name=name;
this.surname=surname;
this.rate=rate;
this.days=days;
    }

    getSalary(){
    console.log(this.rate * this.days) //сумма чисел 
    } 
}   
    let rabotnic = new Rabotnic('Катерина', 'Петровна', 10, 31);
    
    
    console.log(rabotnic.name); //выведет 'Катерина'
    console.log(rabotnic.surname); //выведет 'Петрова'
    console.log(rabotnic.rate); //выведет 10
    console.log(rabotnic.days); //выведет 31
    console.log(rabotnic.getSalary()); //

