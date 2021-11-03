class Contact {
    constructor() {
        this.TITLE_ELEMENT = "contact-title";
        this.TITLE_TEXT = ["# Contact"];

        this.SEND_ELEMENT = "contact-send";
        this.SEND_TEXT = ["<a href=\"\" onclick=\"sendForm()\">Send Email</a>"];

        this.GITHUB_ELEMENT="contact-github";
        this.GITHUB_TEXT = ["<a href=\"https://github.com/LucasVbr\">Github</a>"];

        this.PYDEFIS_ELEMENT = "contact-pydefis";
        this.PYDEFIS_TEXT = ["<a href=\"https://pydefis.callicode.fr/user/mhof/LucasVbr/bba98551173e6b21\">PyDefis</a>"];

        this.ROOTME_ELEMENT = "contact-rootme";
        this.ROOTME_TEXT = ["<a href=\"https://www.root-me.org/LucasVbr\">RootMe</a>"];



        this.ROOTME_TYPER = new Typer(this.ROOTME_ELEMENT, this.ROOTME_TEXT);
        this.PYDEFIS_TYPER = new Typer(this.PYDEFIS_ELEMENT, this.PYDEFIS_TEXT, this.ROOTME_TYPER);
        this.GITHUB_TYPER = new Typer(this.GITHUB_ELEMENT, this.GITHUB_TEXT, this.PYDEFIS_TYPER);
        this.SEND_TYPER = new Typer(this.SEND_ELEMENT, this.SEND_TEXT, this.showHrThenType);
        this.TITLE_TYPER = new Typer(this.TITLE_ELEMENT, this.TITLE_TEXT, this.showFormThenType);
    }

    start() {
        this.TITLE_TYPER.start();
    }

    showFormThenType() {
        for (let i = 0; i < 4 ; i++) {
            $(".form-control")[i].classList.add("load");
        }
        CONTACT.SEND_TYPER.start()
    }

    showHrThenType() {
        $(".hr")[0].classList.add("load")
        CONTACT.GITHUB_TYPER.start();
    }
}

function sendForm() {
    const firstName = $("#contact-first-name")[0].value;
    const lastName = $("#contact-last-name")[0].value;
    const subject = $("#contact-subject")[0].value;
    const message = $("#contact-message")[0].value;

    try {
        let encoded;
        if (firstName !== "" && lastName !== "" && subject !== "" && message !== "") {
            const body = `first name: ${firstName}\nlast name: ${lastName}\n\n${message}`;
            encoded = encodeURI(`mailto:vabre.lucas.pro@gmail.com?subject=${subject}&body=${body}`);
            window.location.href = encoded;
        } else {
            alert("Warning fields are empty");
        }
    } catch (e) {
        console.log("Error: Encoding URL")
    }
}

