const cursor = '<span class="cursor">|</span>';

class Typed {

    constructor(element, speed) {
        this.element = element;
        this.textShowed = cursor;

        this.fullText = element.innerHTML;
        this.speed = speed;

        this.start();
    }

    async start() {
        for (let i = 0; i < this.fullText.length; i++) {
            this.textShowed = this.fullText.substring(0, i + 1)
                              + cursor + makeSpaces(this.fullText.length-1 - i);
            await sleep(this.speed);
            this.element.innerHTML = this.textShowed;
        }
    }
}

function makeSpaces(nb) {
    return "\xa0".repeat(nb);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}