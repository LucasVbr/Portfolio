class Navigation {
    constructor() {
        this.TITLE_ELEMENT = "nav-title";
        this.TITLE_TEXT = ["Menu"];

        this.SECTIONS_ELEMENT = "nav-sections";
        this.SECTIONS_TEXT = [this.initTable()];

        this.SECTIONS_TYPER = new Typer(this.SECTIONS_ELEMENT, this.SECTIONS_TEXT, HOME.TITLE_TYPER, 10, 10, true);
        this.TITLE_TYPER = new Typer(this.TITLE_ELEMENT, this.TITLE_TEXT, this.SECTIONS_TYPER);
    }

    start() {
        this.TITLE_TYPER.start();
    }

    newLink(displayName, section, action) {
        return `<li><a onclick="${action}.start()" id="nav-${section}" href="#${section}">▶ ${displayName}</a></li>`
    }

    initTable() {
        let r = [
            this.newLink("Home", 'home', "HOME"),
            this.newLink("Who Am I ?", 'who', "WHO"),
            this.newLink("Competences", 'competences', "COMPETENCES"),
            this.newLink("Works", 'works', "WORKS"),
            this.newLink("Contact", 'contact', "CONTACT")
        ];

        return r.join('');
    }
}