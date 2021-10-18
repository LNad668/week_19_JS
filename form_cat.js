'use strict';

class Cat{
    constructor(catname, username, email, breed,food,gender){
        this.catname= catname;
        this.username = username;
        this.email =email;
        this.breed = breed;
        this.food =food;
        this.gender = gender;
    }
}

document.querySelector('form').addEventListener('submit', (evt) =>{
    evt.preventDefault();

    const catname = document.querySelector('#catname').value;
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;

    const breed = document.querySelector('#breed').value;

    const food=[];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    for (let i=0; i<checkboxes.length; i++){
        food.push(checkboxes[i].value)
    }

    //const dryfood = document.querySelector('#dryfood').checked;
    //const wetfood = document.querySelector('#wetfood').checked;
    //const natfood = document.querySelector('#natfood').checked;

    const gender = document.querySelector('input[name="s"]:checked')?.value;

    //console.log(catname,username,email, breed, food, gender)

    const cat = new Cat(catname, username, email, breed,food,gender);
    
    console.log('Кличка питомца ', cat.catname);
    console.log('Ваше имя ', cat.username);
    console.log('Порода ', cat.breed);
    console.log('Чем питается котик ', cat.food);
    console.log('Пол питомца ', cat.gender);
})