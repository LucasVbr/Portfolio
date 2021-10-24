

function gotoCover() {
    /* Make transition */
    location.href='#cover';

    /* Restart the animation */
    coverMain.destroy();
    coverSubtitle.destroy();
    coverAnimation();
}

function gotoWhoAmI() {
    /* Make transition */
    location.href='#whoAmI';

    /* Start typing animation */
    whoAmITitle.destroy();
    whoAmIDescription.destroy();
    competenceTitle.destroy();
    competencesDescription.destroy();
    whoAmIAnimation();
}