export default class Dom {
    constructor() {
        const preloader = document.getElementById('preloader');
        this.inp1 = document.getElementById('inp1');
        this.inp2 = document.getElementById('inp2');
        this.btn = document.getElementById('btn');
        this.inp3 = document.getElementById('inp3');
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