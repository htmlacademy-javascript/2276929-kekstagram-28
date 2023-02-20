//1-я функция, которая считает длину строки и возвращает true || false, взависимости от длины
// Декларативным способом создаю функцию. Назову ее проверитьДлинуСтроки
// Она будет принимать два параметра: строку и число
function checkStringLength(str, value){
  //делаю проверку, что ЕСЛИ длина строки(первый параметр) не равна числу(второму параметру, ТОГДА вернуть false)
  if(str.length !== value){
    return false;
  }
  // ИНАЧЕ вернуть true
  return true;

}
// Вроде все работает
console.log(checkStringLength('lol', 5));
console.log(checkStringLength('lalal', 5));

//2-я функция, которая проверят строку на палиндромность
//Создать функцию, назвать ее checkOnPalindrom, задать параметр
function checkOnPalindrom(str){
  //Созадть переменную, которая будет содержать деленную пополам строку
  const cutStr = Math.floor(str.length % 2);
  //Создать цикл, который ставит i в начало половины строки и перебирает ее элементы
  for(let i = 0; i < cutStr; i++){
  //ЕСЛИ строчный элемент НЕ равен строчному элементу с конца строки, тогда false
    if(str[i] !== str[str.length - i - 1]){
      return false;
    }
    return true;
  }
}
//Выдает undefined, если false...
console.log(checkOnPalindrom('come'));
console.log(checkOnPalindrom('nilin'));
//Решение выше подсмотрено на канале Сергея Пузанкова. Обдумано, понято, но решение не очевидно для меня после создания переменной

//Изначальное решение было такое:
// function checkOnPalindromSecond(str){
//   const reverceStr = str.split('').reverse().join('');
//   if(str !== reverceStr){
//     return false;
//   }
//   return true;
// }

// console.log(checkOnPalindromSecond('lol'));
//Я понял, зачем написал другое решение. Потому что метод .reverse() писал, как .reverce() и у меня не рабоатло...
