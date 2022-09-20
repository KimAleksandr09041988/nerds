ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты
    center: [59.969367, 30.313515],
    // Масштаб карты
    zoom: 15,
    // Выключаем все управление картой
    controls: []
  });

  var myGeoObjects = [];

  // Указываем координаты метки
  myGeoObjects = new ymaps.Placemark([59.968322, 30.317359], {
    balloonContentBody: 'NЁRDS DESIGN STUDIO',
  }, {
    iconLayout: 'default#image',
    // Путь до нашей картинки
    iconImageHref: '../img/map-marker-1.png',
    // Размеры иконки
    iconImageSize: [231, 190],
    // Смещение верхнего угла относительно основания иконки
    iconImageOffset: [-50, -190]
  });

  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  // Отключим zoom
  myMap.behaviors.disable('scrollZoom');

}
