let typeSpeed = 40;
let backSpeed = 60;

let coverMain;
let coverSubtitle;

function coverAnimation() {
    coverMain = new Typed("#cover-main", {
        strings: ["Hello, my name is Lucàs."],
        typeSpeed: typeSpeed,
        cursorChar: '',
        onComplete: () => {
            coverSubtitle = new Typed("#cover-subtitle", {
                strings: ["I am a student. ", "I am a <span style='color:var(--primary)'>developer</span>."],
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                smartBackspace: true,
                onComplete: () => {
                    /* Show Buttons */
                    const coverButtons = document.getElementById("cover-buttons");
                    coverButtons.classList.remove("hidden-buttons");
                    coverButtons.classList.add("showed-buttons")
                }
            });
        }
    });
}


let whoAmITitle;
function whoAmIAnimation() {
    startWhoAmITitle();
}

function startWhoAmITitle() {
    whoAmITitle = new Typed('#whoAmI-title', {
        strings: ["# Who am I ?"],
        typeSpeed: typeSpeed,
        cursorChar: '',
        onComplete: startWhoAmIDescription
    });
}

let whoAmIDescription;
function startWhoAmIDescription() {
    whoAmIDescription = new Typed('#whoAmI-description', {
        strings: ["My name is Lucàs Vabre, I'm French and I'm 18",
            "My name is Lucàs Vabre, I'm French and I'm 19 years old."],
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        smartBackspace: true,
        cursorChar: '',
        onComplete: startCompetenceTitle
    });
}

let competenceTitle;
function startCompetenceTitle() {
    competenceTitle = new Typed('#competence-title', {
        strings: ["## Competences"],
        typeSpeed: 20,
        backSpeed: backSpeed,
        smartBackspace: true,
        cursorChar: '',
        onComplete: startCompetenceDescription
    });
}

let competencesDescription;
function startCompetenceDescription() {
    competencesDescription = new Typed('#competence-desc', {
        strings: [`<span style="color:var(--primary)">${generateBar(60)}</span> - C<br>` +
                  `<span style="color:orangered">${generateBar(90)}</span> - HTML/CSS<br>` +
                  `<span style="color:yellow">${generateBar(70)}</span> - Java<br>` +
                  `<span style="color:yellow">${generateBar(40)}</span> - JavaScript<br>` +
                  `<span style="color:var(--info)">${generateBar(60)}</span> - PHP<br>` +
                  `<span style="color:limegreen">${generateBar(40)}</span> - Python`
        ],
        typeSpeed: 10,
        backSpeed: backSpeed,
        smartBackspace: true,
        cursorChar: ''
    });
}

function myWorksAnimation() {

}

function contactMeAnimation() {

}