$('document').ready(() => {
    /* Init */
    coverAnimation();
    whoAmIAnimation();
    myWorksAnimation();
    contactMeAnimation();
});


function generateBar(percent) {
    let p = Math.floor(percent / 10);
    let completeBar = new Array(p + 1).join('█');
    let emptyBar = new Array((10 - p) + 1).join('█');
    return `[${completeBar}<span style="color: transparent">${emptyBar}</span>] ${percent}%`
}