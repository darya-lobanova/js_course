import LocationApi from './location_api';
import Dom from './dom';

const locationApi = new LocationApi();
const dom = new Dom();
const btn = document.getElementById('btn');

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
