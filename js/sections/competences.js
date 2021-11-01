class Competences {
    constructor() {
        this.TITLE_ELEMENT = "competences-title";
        this.TITLE_TEXT = ["# Competences"];

        this.PROGRAMMING_ELEMENT = "competences-programming";
        this.PROGRAMMING_TEXT = [this.initTableProgramming()]

        this.ORGANISATION_ELEMENT = "competences-organisation";
        this.ORGANISATION_TEXT = [this.initTableOrganisation()];

        this.ORGANISATION_TYPER = new Typer(this.ORGANISATION_ELEMENT, this.ORGANISATION_TEXT, undefined, 10);
        this.PROGRAMMING_TYPER = new Typer(this.PROGRAMMING_ELEMENT, this.PROGRAMMING_TEXT, this.ORGANISATION_TYPER, 10)
        this.TITLE_TYPER = new Typer(this.TITLE_ELEMENT, this.TITLE_TEXT, this.PROGRAMMING_TYPER);
    }

    start() {
        this.TITLE_TYPER.start();
    }

    newCompetence(percent, name, color="--text-color") {
        const CONTENT = new Bar(percent).build() + " - " + name;
        return `<span style="color:var(${color})">${CONTENT}</span>`
    }

    initTableProgramming() {
        let r = [
            this.newCompetence(75, "Bash"),
            this.newCompetence(60, "C", "--teal"),
            this.newCompetence(20, "C#", "--teal"),
            this.newCompetence(10, "C++", "--teal"),
            this.newCompetence(100, "HTML/CSS", "--orange"),
            this.newCompetence(85, "Java", "--red"),
            this.newCompetence(75, "JavaScript", "--yellow"),
            this.newCompetence(60, "PHP", "--blue"),
            this.newCompetence(80, "Python", "--green"),
            this.newCompetence(90, "SQL/PlpgSQL", "--cyan"),
        ]

        return r.join("<br>");
    }

    initTableOrganisation() {
        let r = [
            this.newCompetence(70, "Figma", "--pink"),
            this.newCompetence(65, "Git/GitHub", "--purple"),
            this.newCompetence(85, "UML", "--yellow")
        ];

        return r.join("<br>");
    }
}