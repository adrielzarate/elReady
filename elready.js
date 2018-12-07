function elReady(el, callback) {
    let interval = setInterval(function() {
        if ( document.querySelector(el) ) {
            callback();
            window.clearInterval(interval);
        } else {
            console.log('looking ...');
        }
    }, 100);
}