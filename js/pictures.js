'use strict';
var COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var DESCRIPTION = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}


//создаю массив, состоящий из 25 фото

var infoPictures = [];
for (var i = 0; i < 25; i++) {
  var picture = {
      url: '../photos' + getRandomNumber(1, 25) + '.jpg',
      likes: getRandomNumber(15, 200),
      comments: getRandomElementFromArray(COMMENTS),
      description: getRandomElementFromArray(DESCRIPTION)
  };

  infoPictures.push(picture);
};


//на его основе создаю дом-элементы для фото и заполняю их данными из массива
//вот это вообще не понимаю, что такое
var renderPicture = function (superPicture, i) {
  var template = document.querySelector('#picture');
  var element = template.content.cloneNode(true);
  element.querySelector('.picture__link').innerHTML = picture.url;
  element.querySelector('.picture__stat--likes').textContent = picture.likes;
  element.querySelector('.picture__stat--comments').textContent = picture.comments;
};



// отрисовываю все элементы в блок .pictures при помощи DocumentFragment

var listPictures = document.querySelector('.pictures');
//var fragmentPicture = document.createDocumentFragment();
var pictureTemplate = document.querySelector('.picture');


for (var n = 0; n < 25; n++) {

  var pictureElement = pictureTemplate.cloneNode(true);

  // pinElement.className = 'pin';
  // pinElement.classList.add('pin--' + n );

  // pinElement.style.left = infoBookings[n].location.x + 'px';
  // pinElement.style.top = infoBookings[n].location.y + 'px';
  // pinElement.innerHTML = '<img src="' + infoBookings[n].author.avatar + '" class="rounded" width="40" height="40">';
   //fragmentPicture.appendChild(pictureElement);
listPictures.appendChild(pictureElement);
}















