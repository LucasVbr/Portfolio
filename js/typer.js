let TYPE_SPEED = 40;
let BACK_SPEED = 50;
let START_DELAY = 400;
let HIDDEN_CLASS = "hide-cursor";

function generateElement(element, parentId) {
    let newElement = document.createElement(element);
    newElement.id = `${parentId}-${element}`;
    $(`#${parentId}`)[0].appendChild(newElement);
    return `${newElement.id}`;
}

class Typer {
    constructor(elementId, textArray, onCompleteTyped, typeSpeed=TYPE_SPEED, backSpeed=BACK_SPEED, doHideCursor=false) {
        this.elementId = elementId;
        this.textArray = textArray;

        this.typed = undefined;
        this.textElementId = generateElement('span', this.elementId);
        this.onCompleteTyped = onCompleteTyped;
        this.typeSpeed = typeSpeed;
        this.backSpeed = backSpeed;

        this.doHideCursor = doHideCursor;

        this.startAnimation = false;
    }

    start() {
        if (!this.startAnimation) {
            this.startAnimation = true;
            this.typed = new Typed(`#${this.textElementId}`, {
                strings: this.textArray,
                typeSpeed: this.typeSpeed,
                backSpeed: this.backSpeed,
                startDelay: START_DELAY,
                onComplete: () => {
                    if (this.doHideCursor) {
                        this.hideCursor();
                    }

                    if (this.onCompleteTyped !== undefined) {
                        this.hideCursor();

                        if(this.onCompleteTyped instanceof Typer) {
                            this.onCompleteTyped.start();
                        } else {
                            this.onCompleteTyped.call()
                        }
                    }
                }
            });
        }
    }

    hideCursor() {
        let element = $(`#${this.elementId}`)[0];

        if (element.className !== undefined) {
            element.classList.add(HIDDEN_CLASS);
        } else {
            element.className = HIDDEN_CLASS;
        }
    }
}
