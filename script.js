ymaps.ready(init);    
function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [55.75524278, 37.61092115],
        zoom: 16
    }); 
    var myPlacemark = new ymaps.Placemark([55.75491367, 37.61119250], {
        balloonContentBody: 'Встречаемся тут!'
    });
    var popup = document.querySelector('.yandexmap_popup');
    myPlacemark.events.add('click', function () {
        popup.classList.add('modal__show');
    });
    myMap.events.add('click', function (e) {  
        myMap.balloon.close();
        popup.classList.remove('modal__show');     
       });
    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            popup.classList.remove('modal__show');
        }
      });
    myMap.geoObjects.add(myPlacemark);
}
var popup_order = document.querySelector('.popup_modal');
var openPopupModal = document.querySelector('.preorder__button');
var closePopupModal = popup_order.querySelector('.modal_button');

openPopupModal.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup_order.classList.add('show_popup');
});

closePopupModal.addEventListener('click', function () {
   popup_order.classList.remove('show_popup');
});
window.addEventListener("click", function(event) {
  if (event.target == popup_order) {
    popup_order.classList.remove('show_popup');
}
});
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
   popup_order.classList.remove('show_popup');
  }
});
function alphaOnly(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8);
};
function numbersOnly(event) {
  var key = event.keyCode;
  
  return ((key >= 48  && key <= 57) || key == 8 || (key >= 96  && key <= 105));
};
function button_form(){
  var fields = document.querySelectorAll('.order input');
  var n = 0, array = ['Дата','Email','Имя','Фамилия',
  'Телефон','Данные карты','Срок действия карты','CVV код'],
  string = 'Не заполнены поля: ';
  for (let i = 0; i < fields.length-1; i++) {
    if ( fields[i].value.length == 0 ) {
      n++;
      string += array[i] +', ';
    }
  }
  string = string.slice(0, -2);
  if( n==0 && fields[8].checked == true) {
    alert('Забронировано!');
  } else if (n==0 && fields[8].checked == false){
    alert('Поставьте галочку в поле соглашения');
  }
    else {
      alert(string);
    }
}
var yt = document.querySelector('.youtube_video');
var yt_area = document.querySelector('.photosession_right');
var img = document.querySelector('.photosession_right_img');
var chng = document.querySelector('.photosession_right');
var clone_comments = document.querySelector('.clone_comments');
chng.addEventListener('click', function (evt) {
  img.style.display = 'none';
  yt.style.display = 'block';
});

let addbutton = document.querySelector('.classss');
  addbutton.addEventListener("click", function() {
    let boxes = document.querySelectorAll(".review_list.first");
    let clone;
    let arrows = document.querySelectorAll(".comments_arrow");
    if (boxes.length>4){
      boxes = document.querySelectorAll(".review_list.first");
      addbutton.innerHTML = "Read less";
      for (let i = 3; i < boxes.length ; i++) {
        boxes[i].parentNode.removeChild(boxes[i]);        
      }
      addbutton.innerHTML = "Показать все (12)";
      arrows.forEach(element => {
        element.style.display = "block";        
      });
    }else{
      boxes = document.querySelectorAll(".review_list.first");
      for (let i = 0; i < boxes.length ; i++) {
        for (let j = 0; j < boxes.length ; j++) {
          clone = boxes[i].cloneNode(true);
          clone_comments.after(clone);
        }
      }
      addbutton.innerHTML = "Свернуть";
      arrows.forEach(element => {
        element.style.display = "none";        
      });
    }
  });
  var btn_show_gallary = document.querySelector(".showall");
  btn_show_gallary.addEventListener("click", function() {
    var more = document.querySelectorAll(".gallery_wrapper");
    var arrow = document.querySelectorAll(".gallary_showall_arrow");
    if (more[2].style.display === "none") {
      more[2].style.display = "flex";
      more[3].style.display = "flex";
      arrow[0].style.display = "none";
      arrow[1].style.display = "none";
      btn_show_gallary.innerHTML = "Свернуть"; 
    } else {
      more[2].style.display = "none";
      more[3].style.display = "none";
      arrow[0].style.display = "block";
      arrow[1].style.display = "block";
      btn_show_gallary.innerHTML = "Показать все фото"; 

    }
  });  