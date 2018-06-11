export default class LocationApi {
    getMyIp() {    
      return fetch("https://api.ipify.org?format=json")
        .then(resolve => {
            if(resolve.status === 200) {
                return resolve.json();
            } else {
                return Promise.reject(resolve.status);
            }
        })
        .catch(reject => {
            console.log('Не удалось получить IP', reject);
        })    
    }
    getMyLocation(myIp) {
        return fetch(`https://freegeoip.net/json/${myIp}`)
            .then(resolve => {
                if(resolve.status === 200) {
                    return resolve.json();
                } else {
                    return Promise.reject(resolve.status);
                } 
            })
            .catch(reject => {
                console.log('Не удалось получить координаты', reject);
            })
    }    
}