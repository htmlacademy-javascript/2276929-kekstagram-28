// Решение в самом конце


// Обратите внимание, в тексте задания вы будете встречать текст в фигурных скобках. Такой текст будет означать, что на месте этого текста должно появиться значение, которое вы возьмёте из данных. Например, в шаблоне может быть написано <div>{{x}}</div>, и это будет значить, что {{x}} нужно заменить на значение переменной x. Если переменная будет равна 100, то разметка должна выглядеть как <div>100</div>. Фигурные скобки в этой записи ничего не значат, они просто показывают, что закончилась разметка и в этом месте будут стоять данные. Сами фигурные скобки переносить в разметку не нужно.
// В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
// Структура каждого объекта должна быть следующей:
// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// description, строка — описание фотографии. Описание придумайте самостоятельно.
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
// {
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }
// У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.
// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
// Массив, откуда мы будем брать комментарии.
// Создам массив с объектом. Объект там один, как шаблон.
// console.log(Object.values(objectDone));
// -----------------------
// const ARRAYSDESCRIPTION = [
//   'Далеко-далеко за словесными горами',
//   'в стране гласных и согласных живут рыбные тексты',
//   'Рукопись его единственное повстречался',
//   'бросил имени предупреждал путь ручеек ему власти домах гор лучше!',
//   'Безопасную лучше моей океана не своих.',
//   'Родного там океана парадигматическая',
//   'маленький домах текстами инициал знаках запятой',
//   'сбить переписывается заманивший выйти сих,',
//   'встретил переулка злых на берегу.',
//   'Предложения!'
// ]
// // ---------------------
// const ARRAYSCOMMENTS = [
// 'Всё отлично!',
// 'в целом всё неплохо. Но не всё.',
// 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
// 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
// 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
// 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
// 'Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.',
// ];
// //Создаю функцию, которая генерит случайное число в диапазоне
// const getRandomNumber = function (a, b){
//   const up = Math.ceil(Math.min(a, b));
//   const low = Math.floor(Math.max(a, b));
//   const result = Math.random() * (up - low + 1) + low;

//   return Math.floor(result);
// };

// const getRandomArrElem = function(array) {
//   array[getRandomNumber(0, array.length - 1)];
// };

// const getRandomId = function(){
//   let elementId = 0;

//   return () => {
//     elementId += 1;
//     return elementId;
//   };
// };

// const getRandomComment = (array) => {
//   Array.from({length: getRandomNumber(1, 2)}, () =>
//   getRandomArrElem(array).join(' ')
//   );
// };

// const createPicturesObject = (index) => ({
//   id: index,
//   comments: getRandomArrElem(ARRAYSCOMMENTS),
//   description: getRandomArrElem(ARRAYSDESCRIPTION),
//   likes: getRandomNumber(15, 250),
//   url: `photos/${index}.jpg`,
// });

// const getPictures = () => {
//   Array.from({length: 25}, (_, pictureIndex) => createPicturesObject(pictureIndex + 1));
// };

// console.log(getPictures());

//Здесь я создам массив с описанием фото--------------------------------------------------------------------------------
// //Функция, которая будет перебирать массив и выводить случайный элемент.
// const getRandomDescription = function(arr){
//   let randomFrase = Math.floor(Math.random() * arr.length);

//   return arr[randomFrase];
// };

// //Делаем Рандомные комментарии.-------------------------------------------------------------------------------

// //Функция, генерирующая случайные комментарии
// const getRandomComment = function(arr) {
//   let randomComment = Math.floor(Math.random() * arr.length);

//   return arr[randomComment];
// };

// console.log(getRandomComment(comments));

// //Функция с переменными и объектом.-------------------------------------------------------------------------------------
// const createMyObject = function() {
//   const randomId = getRandomNumber(0, 25);
//   const randomLikes = getRandomNumber(15, 250);
//   const randomDescription = getRandomDescription(arrForDescription);
//   const randomComment = getRandomComment(comments);

//   let objectDone = [{
//     id: randomId,
//     url: `photos/${getRandomNumber(1, 25)}.jpg`,
//     description: randomDescription,
//     likes: randomLikes,
//     comments: randomComment,
//   }];

//   return objectDone;
// };
// console.log(createMyObject());

// let myObject = Array.from({length: 25}, )


// Вот решение

const DESCRIPTION = [
  'Далеко-далеко за словесными горами',
  'в стране гласных и согласных живут рыбные тексты',
  'Рукопись его единственное повстречался',
  'бросил имени предупреждал путь ручеек ему власти домах гор лучше!',
  'Безопасную лучше моей океана не своих.',
  'Родного там океана парадигматическая',
  'маленький домах текстами инициал знаках запятой',
  'сбить переписывается заманивший выйти сих,',
  'встретил переулка злых на берегу.',
  'Предложения!'
];

const ALLCOMMENTS = [
  'Всё отлично!',
  'в целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.',
];

const USERNAME = [
  "Artem",
  "Irina",
  "Sergey",
  "Boris",
  "Aleks",
  "BigHead",
  "Gilfoyl",
  "Gevin",
  "Erlik",
  "Dinesh",
];

const getRandomNumber = function (a, b){
  const up = Math.ceil(Math.min(a, b));
  const low = Math.floor(Math.max(a, b));
  const result = Math.random() * (up - low + 1) + low;

  return Math.floor(result);
};

const allPhotos = [];

const createComment = (index) => {
  let comments = [];
  for(let i = 0; i <= 25; i++){
    const getRandomAva = getRandomNumber(0, 6);
    const getRandomComment = getRandomNumber(0, ALLCOMMENTS.length - 1);
    const getRandomName = getRandomNumber(0, USERNAME.length - 1);
    comments.push({
      commentId: +(String(index) + String(i)),
      avatar: `img/avatar-${getRandomAva}.svg`,
      message: ALLCOMMENTS[getRandomComment],
      name: USERNAME[getRandomName],
    });

  }
  return comments;
};




const createUsers = () => {
  let getRandomLikes = getRandomNumber(15, 250);

  for(let i = 1; i <= 25; i++){
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomNumber(0, DESCRIPTION.length - 1),
      likes: getRandomLikes,
      comments: createComment(i),
    };
    allPhotos.push(photo);
  }
  return allPhotos;
};

createUsers();
console.log(allPhotos);
