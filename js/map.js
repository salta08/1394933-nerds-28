ymaps.ready(init);

function init() {
    let map = new ymaps.Map("main-map", {
        center: [59.938635, 30.323118],
        zoom: 18
    });
    let placemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
        iconLayout: 'default#image',
        iconImageHref: "img/index/map-marker.png",
        iconImageOffset: [-50, -170],
        iconImageSize: [200, 160]
    });
    map.geoObjects.add(placemark)
}
