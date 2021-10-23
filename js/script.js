let selector = "typed-";
let typed = document.querySelectorAll(`[class^=${selector}]`);

function execute(element) {
    let classIndex = element.className.split(" ").findIndex(element => element.startsWith(selector))
    let className = element.classList.item(classIndex);
    let speed = className.substring(selector.length)
    new Typed(element, speed);
}

typed.forEach(e => execute(e))