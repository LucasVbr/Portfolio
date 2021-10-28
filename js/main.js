$('document').ready(() => {
    /* Initialize */
    const HOME = new Home();

    /* Start */
    HOME.start();

    /* Menu */
    $("#nav-home")[0].addEventListener('click', {
        handleEvent: () => {
            HOME.start()
        }
    })
});