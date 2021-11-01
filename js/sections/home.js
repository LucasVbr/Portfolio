class Home {
    constructor() {
        this.TITLE_ELEMENT = "home-title";
        this.TITLE_TEXT = ["Hello^1000, my name is Lucàs.^1000"];

        this.SUBTITLE_ELEMENT = "home-subtitle";
        this.SUBTITLE_TEXT = [
            "I am passionate about IT!",
            "I am^100 curious.",
            "I am^700 a <span style='color:var(--primary)'>developer</span>."
        ];

        this.SUBTITLE_TYPER = new Typer(this.SUBTITLE_ELEMENT, this.SUBTITLE_TEXT);
        this.TITLE_TYPER = new Typer(this.TITLE_ELEMENT, this.TITLE_TEXT, this.SUBTITLE_TYPER);
    }

    start() {
        this.TITLE_TYPER.start();
    }
}