import i18Obj from "./translate.js";

const DEFAULT_LANG = 'en';
let language = localStorage.getItem("language") || DEFAULT_LANG;

let isCapsLocked = false;

const body = document.querySelector("body");

function showContent() {
    const content = `<div class="wrapper">
                        <h1>Virtual Keyboard</h1>
                        <textarea name="textarea" class="textarea" autofocus></textarea>
                        <div class="keyboard">
                            <div class="first-row">
                                <div class="key letter" data-i18="backquote" id='Backquote'>\`</div>
                                <div class="key" id="Digit1">1</div>
                                <div class="key" id="Digit2">2</div>
                                <div class="key" id="Digit3">3</div>
                                <div class="key" id="Digit4">4</div>
                                <div class="key" id="Digit5">5</div>
                                <div class="key" id="Digit6">6</div>
                                <div class="key" id="Digit7">7</div>
                                <div class="key" id="Digit8">8</div>
                                <div class="key" id="Digit9">9</div>
                                <div class="key" id="Digit0">0</div>
                                <div class="key" id="Minus">-</div>
                                <div class="key" id="Equal">=</div>
                                <div class="key control-key middle" id="Backspace">backspace</div>
                            </div>
                            <div class="second-row">
                                <div class="key control-key" id="Tab">tab</div>
                                <div class="key letter" data-i18="q" id="KeyQ">q</div>
                                <div class="key letter" data-i18="w" id="KeyW">w</div>
                                <div class="key letter" data-i18="e" id="KeyE">e</div>
                                <div class="key letter" data-i18="r" id="KeyR">r</div>
                                <div class="key letter" data-i18="t" id="KeyT">t</div>
                                <div class="key letter" data-i18="y" id="KeyY">y</div>
                                <div class="key letter" data-i18="u" id="KeyU">u</div>
                                <div class="key letter" data-i18="i" id="KeyI">i</div>
                                <div class="key letter" data-i18="o" id="KeyO">o</div>
                                <div class="key letter" data-i18="p" id="KeyP">p</div>
                                <div class="key letter" data-i18="[" id="BracketLeft">[</div>
                                <div class="key letter" data-i18="]" id="BracketRight">]</div>
                                <div class="key" id="Backslash">\\</div>
                                <div class="key control-key" id="Delete">del</div>
                            </div>
                            <div class="third-row">
                                <div class="key control-key middle capslock" id="CapsLock">caps lock</div>
                                <div class="key letter" data-i18="a" id="KeyA">a</div>
                                <div class="key letter" data-i18="s" id="KeyS">s</div>
                                <div class="key letter" data-i18="d" id="KeyD">d</div>
                                <div class="key letter" data-i18="f" id="KeyF">f</div>
                                <div class="key letter" data-i18="g" id="KeyG">g</div>
                                <div class="key letter" data-i18="h" id="KeyH">h</div>
                                <div class="key letter" data-i18="j" id="KeyJ">j</div>
                                <div class="key letter" data-i18="k" id="KeyK">k</div>
                                <div class="key letter" data-i18="l" id="KeyL">l</div>
                                <div class="key letter" data-i18=";" id="Semicolon">;</div>
                                <div class="key letter" data-i18="quotes" id="Quote">'</div>
                                <div class="key control-key middle" id="Enter">enter</div>
                            </div>
                            <div class="fourth-row">
                                <div class="key control-key middle" id="ShiftLeft">shift</div>
                                <div class="key letter" data-i18="z" id="KeyZ">z</div>
                                <div class="key letter" data-i18="x" id="KeyX">x</div>
                                <div class="key letter" data-i18="c" id="KeyC">c</div>
                                <div class="key letter" data-i18="v" id="KeyV">v</div>
                                <div class="key letter" data-i18="b" id="KeyB">b</div>
                                <div class="key letter" data-i18="n" id="KeyN">n</div>
                                <div class="key letter" data-i18="m" id="KeyM">m</div>
                                <div class="key letter" data-i18="comma" id="Comma">,</div>
                                <div class="key" data-i18="period" id="Period">.</div>
                                <div class="key" data-i18="slash" id="Slash">/</div>
                                <div class="key control-key arrow-up" id="ArrowUp">&#9650;</div>
                                <div class="key control-key middle" id="ShiftRight">shift</div>
                            </div>
                            <div class="fifth-row">
                                <div class="key control-key" id="ControlLeft">ctrl</div>
                                <div class="key control-key" id="MetaLeft">win</div>
                                <div class="key control-key" id="AltLeft">alt</div>
                                <div class="key big" id="Space"> </div>
                                <div class="key control-key" id="AltRight">alt</div>
                                <div class="key control-key" id="ArrowLeft">&#9668;</div>
                                <div class="key control-key" id="ArrowDown">&#9660;</div>
                                <div class="key control-key" id="ArrowRight">&#9658;</div>
                                <div class="key control-key" id="ControlRight">ctrl</div>
                            </div>
                        </div>
                        <div class="addition">
                            <p data-i18="system">Keyboard created in Windows system</p>
                            <p data-i18="changing">For changing language: left shift + left alt</p>
                        </div>
                    </div>`;

    body.insertAdjacentHTML("afterbegin", content);
}
showContent();

const data = document.querySelectorAll("[data-i18]");
const letters = document.querySelectorAll(".letter");
getTranslate();

const shiftLeft = document.querySelector("#ShiftLeft");
const altLeft = document.querySelector("#AltLeft");

const textarea = document.querySelector(".textarea");
const keyboard = document.querySelector(".keyboard");

document.addEventListener("keydown", pressKey);
document.addEventListener("keyup", releaseKey);

function pressKey(e) {
    let key = document.querySelector(`#${e.code}`);
    if (key) {
        if (key.classList.contains("key")) {
            e.preventDefault();
        }
        if (key.classList.contains("control-key")) {
            key.classList.add("active-background");
        }
        key.classList.add("active");
        determineAction(key);
    }
    if (shiftLeft.classList.contains("active") && altLeft.classList.contains("active")) {
        changeLanguage();
    }
}

function releaseKey(e) {
    let key = document.querySelector(`#${e.code}`);
    if (key) {
        if (key.classList.contains("control-key")) {
            key.classList.remove("active-background");
        }
        key.classList.remove("active");
    }
}

function changeLanguage() {
    if (language === 'ru') {
        language = 'en';
    } else if (language === 'en') {
        language = 'ru';
    }
    saveToLocalStorage();
    if (isCapsLocked) {
        data.forEach((elem) => elem.textContent = i18Obj[language][elem.dataset.i18].toUpperCase());
    } else if (!isCapsLocked) {
        data.forEach((elem) => elem.textContent = i18Obj[language][elem.dataset.i18].toLowerCase());
    }
    
}

function saveToLocalStorage() {
    localStorage.setItem("language", language);
}

function getTranslate() {
    data.forEach((elem) => elem.textContent = i18Obj[language][elem.dataset.i18]);
}

keyboard.addEventListener("click", identifyKey);

function identifyKey(e) {
    let key = e.target;
    determineAction(key);
}

function determineAction(key) {
    if (key.classList.contains("key") && !(key.classList.contains("control-key"))) {
        writeText(key);
    }
    if (key.classList.contains("capslock")) {
        toUpperAndLowerCase(key);
    }
}

function writeText(key) {
    textarea.textContent += key.textContent;
    textarea.focus();
    textarea.selectionStart = textarea.value.length;
}

function toUpperAndLowerCase(key) {
    if (isCapsLocked) {
        key.classList.remove("capslock-active");
        letters.forEach(letter => letter.textContent = letter.textContent.toLowerCase());
        isCapsLocked = false;
    } else if (!isCapsLocked) {
        letters.forEach(letter => letter.textContent = letter.textContent.toUpperCase());
        key.classList.add("capslock-active");
        isCapsLocked = true;
    }
}

