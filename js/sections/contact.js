class Contact {
    constructor() {
        this.TITLE_ELEMENT = "contact-title";
        this.TITLE_TEXT = ["# Contact"];

        this.TITLE_TYPER = new Typer(this.TITLE_ELEMENT, this.TITLE_TEXT);
    }

    start() {
        this.TITLE_TYPER.start();
    }
}