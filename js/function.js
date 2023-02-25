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
checkStringLength('lol', 3);
checkStringLength('la lal', 7);
// ---------------------------------------------------------------------------------------------------------------
//2-я функция, которая проверят строку на палиндромность
function checkOnPalindromSecond(str){
  const reverceStr = str.toLowerCase().split('').reverse().join('');
  if(str !== reverceStr){
    return false;
  }
  return true;
}

checkOnPalindromSecond('lol');

//Убрал другое решение из VS, ибо это действует. Исправил: теперь привожу строку к одному регистру
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


//Ниже буду писать свой код, но ориентируясь на лайв от Игоря
const getAnotherString = function(string, minLenght, stringTwo){
  const result = minLenght - string.length;

  if(result <= 0){
    return string;
  }

  return stringTwo.slice(0, result % stringTwo.length) + stringTwo.repeat(result / stringTwo) + string;
}

console.log(getAnotherString('er', 3, 'weqwg'));
console.log(getAnotherString('1', 2, '0'));
console.log(getAnotherString('1', 4, '0'));
//нет, я сделал так же, как и в лайве было
