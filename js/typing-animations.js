let typeSpeed = 40;
let backSpeed = 60;

function coverAnimation() {
    coverMain = new Typed("#cover-main", {
        strings: ["Hello, my name is Lucàs."],
        typeSpeed: typeSpeed,
        onComplete: (self) => {
            self.cursor.remove();
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

function whoAmIAnimation() {
    whoAmITitle = new Typed('#whoAmI-title', {
        strings: ["# Who am I ?"],
        typeSpeed: typeSpeed,
        onComplete: (self) => {
            self.cursor.remove();
            whoAmIDescription = new Typed('#whoAmI-description', {
                strings: ["My name is Lucàs Vabre, I'm French and I'm 18",
                          "My name is Lucàs Vabre, I'm French and I'm 19 years old."],
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                smartBackspace: true
            });
        }
    });
}

function myWorksAnimation() {

}

function contactMeAnimation() {

}