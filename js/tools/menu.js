class Menu {
    constructor(title, elementsArray) {
        this.CORNER_TL = "┌";
        this.CORNER_TR = "┐";
        this.CORNER_BL = "└";
        this.CORNER_BR = "┘";
        this.TOP_BOTTOM = "─";
        this.LEFT_RIGHT = "│";
        this.SPACE = "&nbsp;";

        this.title = title;
        this.elementsArray = elementsArray;
    }

    build() {
        const WIDTH = this.width();
        let TOP_TITLE_LEFT = Math.floor((WIDTH - this.title.length) / 2);
        let TOP_TITLE_RIGHT = WIDTH - (this.title.length + TOP_TITLE_LEFT);

        let menuHeader;
        let menuArray;
        let menuFooter;

        menuHeader =
            this.CORNER_TL
            + this.generateTopBottom(TOP_TITLE_LEFT)
            + this.title + this.generateTopBottom(TOP_TITLE_RIGHT)
            + this.CORNER_TR + "</br>";

        this.elementsArray.forEach(element => {
            let nbSpaces = WIDTH - element.length;

            menuArray += this.LEFT_RIGHT + element + this.generateSpaces(nbSpaces) + this.LEFT_RIGHT + "</br>";
        });

        menuFooter = this.CORNER_BL + this.generateTopBottom(WIDTH) + this.CORNER_BR;

        return menuHeader + menuArray + menuFooter;
    }

    width() {
        let width = this.title.length;

        this.elementsArray.forEach(element => {
            width = (width < element.length) ? element.length : width;
        });

        return width;
    }

    generateSpaces(nbSpaces) {
        return duplicateChar(nbSpaces, this.SPACE);
    }

    generateTopBottom(nbTopBottom) {
        return duplicateChar(nbTopBottom, this.TOP_BOTTOM);
    }
}