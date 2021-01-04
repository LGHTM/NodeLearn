//кроме определение простейщих функций или свойств в модуле могут определятся сложные объекты или функций конструкторов которые затем используются для создание объектов 

function User(name, age){

    this.name = name;
    this.age = age;
    this.displayInfo = function(){

        console.log(`Имя: ${this.name} Возраст: ${this.age}`)
    }
}

User.prototype.sayHi = function(){
    console.log(`Привет, меня зовут ${this.name}`);
}

module.exports=User;


/////////////////////////////

//********Весь модуль указывает на это функцию конструктора

//вызов 

// const User = require("./user.js");

// let eguene = new User("Eugene", 32);
// eguene.sayHi();