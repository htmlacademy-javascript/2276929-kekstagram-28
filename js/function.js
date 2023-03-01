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
  str = str.toLowerCase();
  const reverceStr = str.split('').reverse().join('');
  if(str !== reverceStr){
    return false;
  }
  return true;
}

console.log(checkOnPalindromSecond('lol'));
console.log(checkOnPalindromSecond('ДовОд'));
console.log(checkOnPalindromSecond('слим'));
console.log(checkOnPalindromSecond('довод'));
console.log(checkOnPalindromSecond('ДоВоД'));

//Убрал другое решение из VS, ибо это действует. Исправил: теперь привожу строку к одному регистру
//Попытка № 3. Исправил, сейчас сразу на первой строке функции строку изначально принижаю в регистре=) Вроде работает как надо...
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
// const getNewStr = function(str, minLength, strTwo){
//   //создать константу, которая вычислит остаток
//   const result = minLength - str.length;
//   return result <= 0 ? str : strTwo.slice(0, result % strTwo.length) + strTwo.repeat(result / strTwo) + str;
// }

// getNewStr('er', 3, 'weqwg');
// //Функцию переписал с лайва. Чтобы сдать домашку, ибо просрочил. Разберу ее.


//Ниже буду писать свой код, но ориентируясь на лайв от Игоря
// const getAnotherString = function(string, minLenght, stringTwo){
//   const result = minLenght - string.length;

//   if(result <= 0){
//     return string;
//   }

//   return stringTwo.slice(0, result % stringTwo.length) + stringTwo.repeat(result / stringTwo) + string;
// }

// console.log(getAnotherString('er', 3, 'weqwg'));
// console.log(getAnotherString('1', 2, '0'));
// console.log(getAnotherString('1', 4, '0'));
// //нет, я сделал так же, как и в лайве было


//Функция 4. Попытка исправить № 3
// const getResultString = function(str, minLength, dopStr){
//   //Создам переменную, куда запишем новую строку
//   let newString = '';
//   let arrFromDopStr = dopStr.split('');
//   console.log(arrFromDopStr);

//   for(let i = 0; i <= str.length; i++){
//     if(str.length == minLength){
//       console.log(str);
//       break;
//     } else if(str.length < minLength){
//       for(let j = 0; j < arrFromDopStr.length; j++){
//         newString = arrFromDopStr[j] + str;
//         console.log(newString);
//       }
//     }else{
//       return false;
//     }
//   }
// }

// console.log(getResultString('asdfп', 8, 'gwera'));
// console.log(getResultString('3', 1, 'wer'));
// // Пытался... запутался.

const getDopString = function (string, minLength, symbols) {
  let resultStr = '';
  const extraLength = minLength - string.length;
  const extraSymbolsTotal = symbols.split('');
  if (string.length >= minLength) {
    return string;
  } else if (string.length < minLength && extraSymbolsTotal.length === extraLength) {
    resultStr = extraSymbolsTotal.join('') + string;
    return resultStr;
  } else if (string.length < minLength && extraSymbolsTotal.length > extraLength) {
    for (let i = 0; i <= extraLength - 1; i++) {
      resultStr = resultStr + extraSymbolsTotal[i];
    }
    resultStr = resultStr + string;
    return resultStr;
  } else if (string.length < minLength && extraSymbolsTotal.length < extraLength) {
    resultStr = string.padStart(4, extraSymbolsTotal.join(''));
    return resultStr;
  }
};

console.log(getDopString('h', 4, 'fkjjjjj'));
console.log(getDopString('h', 4, 'asdg'));
console.log(getDopString('1', 4, '0'));
console.log(getDopString('q', 4, 'we'));
// function noPad (string, targetLength, extraString) {
//   let extraLenght = targetLength - string.length;
//   if (string.length > targetLength) {
//     return string;
//   }
//   var extraString = extraString.repeat(extraLenght);
//   var newString = extraString.slice(0, extraLenght) + string;
//   return newString;
// }

// console.log(noPad('q', 4, 'wwe'));
// console.log(noPad('qwerty', 4, '0'));

//
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('q', 4, 'we');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'we');
myPadStart('1', 2, '0');
