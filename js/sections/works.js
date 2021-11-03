class Works {
    constructor() {
        this.TITLE_ELEMENT = "works-title";
        this.TITLE_TEXT = ["# Works"];

        this.MORE_ELEMENT = "works-more";
        this.MORE_TEXT = ["See more on<br><a href=\"https://github.com/LucasVbr\">GitHub</a>"];

        this.MORE_TYPER = new Typer(this.MORE_ELEMENT, this.MORE_TEXT)
        this.TITLE_TYPER = new Typer(this.TITLE_ELEMENT, this.TITLE_TEXT, this.showImageThenType);
    }

    start() {
        this.TITLE_TYPER.start();
    }

    showImageThenType() {
        for (let i = 0; i < 6 ; i++) {
            $(".work")[i].classList.add("load");
        }
        WORKS.MORE_TYPER.start()
    }
}