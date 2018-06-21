const checkAuth = () => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve({isAuth: true});
        }, 2000);
    })
};
  

const getUser = (authInfo) => {
    return new Promise(function(resolve, reject){
        if (!authInfo.isAuth) {
            resolve(null);
            return;
        }
        setTimeout(() => {
            reject({name: "Max"});
        }, 2000);
    })
};
checkAuth()
    .then((res) =>{
        return getUser(res);
    })
    .then((res) =>{
        console.log(res);
    });

// function checkAuth() {  
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             resolve( {name: 'Max'} );
//             reject( null );
//         }, 2000);       
//     })
//     .then(user => {
//         setTimeout(() => {
//             console.log(user.name);
//         }, 2000);
//     })
// }