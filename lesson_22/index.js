import LocationApi from './location_api';
import Dom from './dom';

const locationApi = new LocationApi();
const dom = new Dom();
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const weather = new Weather();

btn.addEventListener('click', () => {
    dom.showPreloader();
    setTimeout(() => {
        locationApi.getMyIp()
                .then(resolve => locationApi.getMyLocation(resolve.ip))
                .then(coordinates => dom.setCoordinates(coordinates))
                .then(resolved => dom.hidePreloader())
                .catch(rejected => dom.hidePreloader())
    }, 2000)
    
})

btn2.addEventListener('click', () => {
    const inp3 = document.getElementById('inp3');
    if (inp3.value) {
        dom.showPreloader();
        setTimeout(() => {
            weather.getWeather(inp3.value)
                .then(res => {
                    weather.setWeather(res);
                    dom.hidePreloader();
                })
            }, 1000);
        }
        
    })
