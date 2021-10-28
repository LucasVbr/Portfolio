class Home {
    constructor() {
        this.ELEMENT = "home";

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

        // location.href= `#${this.ELEMENT}`;
    }

    start() {
        this.TITLE_TYPER.start();
    }
}

// function cover() {
//     const ELEMENT = "cover";
//
//     const TITLE_ELEMENT = "cover-title";
//     const TITLE_TEXT = ["Hello^1000, my name is Lucàs.^1000"];
//
//     const SUBTITLE_ELEMENT = "cover-subtitle";
//     const SUBTITLE_TEXT = [
//         "I am a student.",
//         "I am^100 passionate about IT!",
//         "I am^700 a <span style='color:var(--primary)'>developer</span>."
//     ];
//
//     const SUBTITLE_TYPER = new Typer(SUBTITLE_ELEMENT, SUBTITLE_TEXT);
//     const TITLE_TYPER = new Typer(TITLE_ELEMENT, TITLE_TEXT, SUBTITLE_TYPER);
//
//     location.href= `#${ELEMENT}`;
//     TITLE_TYPER.start();
// }



// let whoAmITitle;
// function whoAmIAnimation() {
//     startWhoAmITitle();
// }
//
// function startWhoAmITitle() {
//     whoAmITitle = new Typed('#whoAmI-title', {
//         strings: ["# Who am I ?"],
//         typeSpeed: TYPE_SPEED,
//         cursorChar: '',
//         onComplete: startWhoAmIDescription
//     });
// }
//
// let whoAmIDescription;
// function startWhoAmIDescription() {
//     whoAmIDescription = new Typed('#whoAmI-description', {
//         strings: ["My name is Lucàs Vabre, I'm French and I'm 18",
//             "My name is Lucàs Vabre, I'm French and I'm 19 years old."],
//         typeSpeed: TYPE_SPEED,
//         backSpeed: BACK_SPEED,
//         smartBackspace: true,
//         cursorChar: '',
//         onComplete: startCompetenceTitle
//     });
// }
//
// let competenceTitle;
// function startCompetenceTitle() {
//     competenceTitle = new Typed('#competence-title', {
//         strings: ["## Competences"],
//         typeSpeed: 20,
//         backSpeed: BACK_SPEED,
//         smartBackspace: true,
//         cursorChar: '',
//         onComplete: startCompetenceDescription
//     });
// }
//
// let competencesDescription;
// function startCompetenceDescription() {
//     competencesDescription = new Typed('#competence-desc', {
//         strings: [`<span style="color:var(--primary)">${generateBar(60)}</span> - C<br>` +
//                   `<span style="color:orangered">${generateBar(90)}</span> - HTML/CSS<br>` +
//                   `<span style="color:yellow">${generateBar(70)}</span> - Java<br>` +
//                   `<span style="color:yellow">${generateBar(40)}</span> - JavaScript<br>` +
//                   `<span style="color:var(--info)">${generateBar(60)}</span> - PHP<br>` +
//                   `<span style="color:limegreen">${generateBar(40)}</span> - Python`
//         ],
//         typeSpeed: 10,
//         backSpeed: BACK_SPEED,
//         smartBackspace: true,
//         cursorChar: ''
//     });
// }
//
// function myWorksAnimation() {
//
// }
//
// function contactMeAnimation() {
//
// }