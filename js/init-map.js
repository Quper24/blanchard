ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 12,
      controls: []
    },
    {
      suppressMapOpenBlock: true,
    }
  );

  myMap.behaviors.disable('scrollZoom');
  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-sign.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}
