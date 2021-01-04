let currentDate = new Date();

global.date = currentDate;

module.exports.getMessage = function () {
  let hour = currentDate.getHours();
  if (hour > 16) return "Добрый вечер" + global.name; //обащение к глобальной переменой. Обращение будет из вне
  else if (hour > 10)
  return "Добрый день" + name; //Обращение к глобальной переменной
  else 
  return "Добрый утро" + name;
};
