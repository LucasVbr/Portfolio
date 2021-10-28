const TRANSPARENT_CLASS = "transparent";

class Bar {

    constructor(percent) {
        this.BAR_UNIT = '█';
        this.BAR_MAX_UNIT = 10;
        this.START = "[";
        this.END = "]";

        this.percent = percent;
        this.percentFloor = Math.floor(percent / this.BAR_MAX_UNIT);
    }

    build() {
        const COMPLETE_SECTION = this.generateUnits(this.percentFloor);
        const EMPTY_SECTION = this.generateUnits(this.BAR_MAX_UNIT - this.percentFloor);
        return `${this.START}${COMPLETE_SECTION}${this.transparentSpan(EMPTY_SECTION)}${this.END} ${this.percent}%`;
    }

    generateUnits(nbUnits) {
        return duplicateChar(nbUnits, this.BAR_UNIT);
    }

    transparentSpan(content) {
        return `<span class="${TRANSPARENT_CLASS}">${content}</span>`;
    }
}