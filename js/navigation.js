

function gotoCover() {
    /* Make transition */
    location.href='#cover';

    /* Restart the animation */
    coverMain.reset();
    coverSubtitle.destroy();
}

function gotoWhoAmI() {
    /* Make transition */
    location.href='#whoAmI';

    /* Start typing animation */
    whoAmITitle.reset();
    whoAmIDescription.destroy();

}