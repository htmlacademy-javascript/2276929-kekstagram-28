import {getRandomNumber} from './util.js';

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
  const getRandomLikes = getRandomNumber(15, 250);

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

export{createUsers, allPhotos};
