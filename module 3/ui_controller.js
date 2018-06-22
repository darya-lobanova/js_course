const maskInput  = new maskInput(document.querySelector('#mask'), {
    mask: '0000-0000-0000-0000',
    alwaysShowMask: true,
    maskChar: '_',
  });
  
  export default class UIController {
      getData() {    
        return fetch("https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=CARD_NAME")
          .then(resolve => {
              if(resolve.status === 200) {
                  return resolve();
              } else {
                  return Promise.reject(resolve.status);
              }
          })
          .catch(reject => {
              console.log('Please enter correct data', reject);
          })    
      }
  }
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
      setTimeout(() => {
          locationApi.getMyIp()
                  .then(resolve => locationApi.getData())
                  .then(resolved => dom.hidePreloader())
                  .catch(rejected => dom.hidePreloader())
      }, 2000)
  
  })    