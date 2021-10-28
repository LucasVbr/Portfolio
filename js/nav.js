
function nav() {
    const TITLE = "Menu";
    const ARRAY = [
        "Home",
        "Who Am I ?",
        "Competences",
        "Works","Contact"
    ];
    const ELEMENT = $("#nav")[0];

    const MENU = new Menu(TITLE, ARRAY);
    const CONTENT = document.createTextNode(MENU.build());

    ELEMENT.appendChild(CONTENT)
}
