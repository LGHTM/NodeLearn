//global - специальный объект предоставляет доступк к глобальным, то есть доступным из каждого модуля приложения, переменным и функциям. Пременым аналогом данного объекта в jsvascript для браузера является объект window, в Node глобальна область действия модуля это сам модуль, поэтому когда вы определяете переменную в глобальной области дейсвия вашего модуля nodeJS, она будет локальной для этого модуля
//Все доступные глобальный объекты можно посмотреть в https://nodejs.org/api/globals.html


const greeting = require("./greeting");

global.name = "Eugene"; //установка глобальной переменной, которую мы получаем в модуле greening.js

global.console.log(date);//выводим в глобальную переменную date
//Все глобальные функций и объекы, например console также доступны внутри global, поэтому мы можем писать global.console.log() и просто console.log()

console.log(greeting.getMessage());

//Однако по возможности все таки рекомендуется избегать определения и использования глобальных переменных, и преимущественно ориентироваться на создание переменных, инкапсулированных в рамках отдельных модулей.