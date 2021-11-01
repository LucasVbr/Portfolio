class Who {
    constructor() {
        this.TITLE_ELEMENT = "who-title";
        this.TITLE_TEXT = ["# Who Am I ?^1000"];

        this.PRESENTATION_ELEMENT = "who-presentation" ;
        this.PRESENTATION_TEXT = [
            `Hello, my name is <span class='text-info'>Lucas Vabre</span>,^500 I am ${new Date().getFullYear() - 2002} years old and I'm <span class="text-primary">Fr</span>en<span class="text-danger">ch</span>.^500<br>` +
            "I am currently a <span class='text-info'>student in Computer Science</span> in Rodez,^100 with the aim of later becoming an accomplished developer.^1500"
        ]

        this.LOVE_ELEMENT = "who-love";
        this.LOVE_TEXT = [
            "<u class='text-danger'>I ❤:</u><br>^1000Art^500, Music^500, Photography^500, Karate^500, 3D modeling."
        ];

        this.LOVE_TYPER = new Typer(this.LOVE_ELEMENT, this.LOVE_TEXT)
        this.PRESENTATION_TYPER = new Typer(this.PRESENTATION_ELEMENT, this.PRESENTATION_TEXT, this.LOVE_TYPER);
        this.TITLE_TYPER = new Typer(this.TITLE_ELEMENT, this.TITLE_TEXT, this.showImageThenType);
    }

    start() {
        this.TITLE_TYPER.start();
    }

    showImageThenType() {
        $("#who-photo").addClass("load");
        WHO.PRESENTATION_TYPER.start()
    }
}