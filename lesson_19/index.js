function checkAuth() {  
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve( {name: 'Max'} );
            reject( null );
        }, 2000);       
    })
    .then(user => {
        setTimeout(() => {
            console.log(user.name);
        }, 2000);
    })
}