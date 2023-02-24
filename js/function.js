//1-я функция, которая считает длину строки и возвращает true || false, взависимости от длины
// Декларативным способом создаю функцию. Назову ее проверитьДлинуСтроки
// Она будет принимать два параметра: строку и число
function checkStringLength(str, value){
  //делаю проверку, что ЕСЛИ длина строки(первый параметр) не равна числу(второму параметру, ТОГДА вернуть false)
  if(str.length <= value){
    return true;
  }
  // ИНАЧЕ вернуть true
  return false;

}
// Вроде все работает
console.log(checkStringLength('lol', 3));
console.log(checkStringLength('la  lal', 7));
// ---------------------------------------------------------------------------------------------------------------
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
checkOnPalindrom('come');
checkOnPalindrom('nilin');
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

//----------------------------------------------------------------------------------------------------------------

//3-я функция, которая достает из строки числа и возвращает их.

const getNumber = function(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(!Number.isNaN(parseInt(str.at(i), 10))){
      newStr += str.at(i);
    }
  }
  return parseInt(newStr);
}

getNumber('1 корова, и 0.4 гуся');
getNumber('2 лоха и 1 дурочка');

//----------------------------------------------------------------------------------------------------------------

//4-я функция, которая выводит строку в зависимости от переданного параметра минимальной длинны
// Создаем функцию с тремя параметрами
const getNewStr = function(str, minLength, strTwo){
  //создать константу, которая вычислит остаток
  const result = minLength - str.length;
  return result <= 0 ? str : strTwo.slice(0, result % strTwo.length) + strTwo.repeat(result / strTwo) + str;
}

getNewStr('er', 3, 'weqwg');
//Функцию переписал с лайва. Чтобы сдать домашку, ибо просрочил. Разберу ее.
