import UIController from './ui_controller';

class Dom {

    constructor () {
        const mask = document.getElementById('mask');
        const preloader = document.getElementById('preloader');
        const btn = document.getElementById('btn');
    }
        showPreloader () {
            preloader.style.display = 'inline-block';
        }
        
        hidePreloader () {
            preloader.style.display = 'none';
        }
}



