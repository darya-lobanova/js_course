export default class Dom {
    constructor() {
        const preloader = document.getElementById('preloader');
        const inp1 = document.getElementById('inp1');
        const inp2 = document.getElementById('inp2');
        const btn = document.getElementById('btn');
    }

    showPreloader () {
        preloader.style.display = 'inline-block';
    }

    hidePreloader () {
        preloader.style.display = 'none';
    }

    setCoordinates(coordinates) {
        inp1.value = coordinates.latitude;
        inp2.value = coordinates.longitude;

    }
}