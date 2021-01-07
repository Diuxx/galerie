$(function () {
    // --

// On vérifie si un nouveau cache est disponible au chargement de la page
    window.addEventListener('load', function(e) {
        window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                // Là, le navigateur a téléchargé un nouveau cache
                // On change le cache et on recharge la page
                window.applicationCache.swapCache();
                window.location.reload();
            } else {
                // Le cache Manifest n'a pas changé, on ne fait rien
                console.log('cache manifest nochanges detected..');
            }
        }, false);
    }, false);


    /**
     * Offline mode
     */
    if(!navigator.onLine){
        $('body').prepend('<div class="info">offline mode</div>');
    } ;
       
    window.addEventListener('offline', event => {
        console.log('offline !');
        $('body').prepend('<div class="info">offline mode</div>');
    }) ;

    window.addEventListener('online', event => {
        console.log('online');
        $( ".info" ).remove();
    }) ;
});