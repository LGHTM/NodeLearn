let currentDate = new Date();
//переменая из вне она не доступна, она доступна только в пределах данного модуля

//чтобы переменные или функций были доступны нужно определить их объекте module.exports. Объект module.exports - это то, что возращает функция require() при получений модуля
module.exports.date = currentDate;

//объект module предасталяет ссылку на текущий модуль, его свойсьво exports определяет все свойства и методы модуля, которые могут быть экспортированы и использованы в других модулях

module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Добрый вечер, " + name;
    else if(hour > 10)
        return "Добрый день, " + name;
    else 
        return "Доброе утро, " + name; 
}

//свойства module https://github.com/nodejs/node/blob/master/lib/module.js

// Вызов 

// const os = require("os");
// const  greeting = require("./greeting");

// let userName = os.userInfo().username;

// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

module.exports.name = "Alice";