import i18Obj from "./translate.js";

const body = document.querySelector("body");

function showContent() {
    const content = `<div class="wrapper">
                        <h1 data-i18="title">Virtual Keyboard</h1>
                        <textarea name="textarea" id="textarea"></textarea>
                        <div class="keyboard">
                            <div class="first-row">
                                <div class="key" data-i18="slash-quote">\`</div>
                                <div class="key key1">1</div>
                                <div class="key key2">2</div>
                                <div class="key key3">3</div>
                                <div class="key key4">4</div>
                                <div class="key key5">5</div>
                                <div class="key key6">6</div>
                                <div class="key key7">7</div>
                                <div class="key key8">8</div>
                                <div class="key key9">9</div>
                                <div class="key key0">0</div>
                                <div class="key dash">-</div>
                                <div class="key equals">=</div>
                                <div class="key control-key middle backspace">backspace</div>
                            </div>
                            <div class="second-row">
                                <div class="key control-key tab">tab</div>
                                <div class="key" data-i18="q">q</div>
                                <div class="key" data-i18="w">w</div>
                                <div class="key" data-i18="e">e</div>
                                <div class="key" data-i18="r">r</div>
                                <div class="key" data-i18="t">t</div>
                                <div class="key" data-i18="y">y</div>
                                <div class="key" data-i18="u">u</div>
                                <div class="key" data-i18="i">i</div>
                                <div class="key" data-i18="o">o</div>
                                <div class="key" data-i18="p">p</div>
                                <div class="key" data-i18="[">[</div>
                                <div class="key" data-i18="]">]</div>
                                <div class="key backslash">\\</div>
                                <div class="key control-key del">del</div>
                            </div>
                            <div class="third-row">
                                <div class="key control-key middle capslock">caps lock</div>
                                <div class="key" data-i18="a">a</div>
                                <div class="key" data-i18="s">s</div>
                                <div class="key" data-i18="d">d</div>
                                <div class="key" data-i18="f">f</div>
                                <div class="key" data-i18="g">g</div>
                                <div class="key" data-i18="h">h</div>
                                <div class="key" data-i18="j">j</div>
                                <div class="key" data-i18="k">k</div>
                                <div class="key" data-i18="l">l</div>
                                <div class="key" data-i18=";">;</div>
                                <div class="key" data-i18="quotes">'</div>
                                <div class="key control-key middle enter">enter</div>
                            </div>
                            <div class="fourth-row">
                                <div class="key control-key middle shift-left">shift</div>
                                <div class="key" data-i18="z">z</div>
                                <div class="key" data-i18="x">x</div>
                                <div class="key" data-i18="c">c</div>
                                <div class="key" data-i18="v">v</div>
                                <div class="key" data-i18="b">b</div>
                                <div class="key" data-i18="n">n</div>
                                <div class="key" data-i18="m">m</div>
                                <div class="key" data-i18="comma">,</div>
                                <div class="key" data-i18="period">.</div>
                                <div class="key" data-i18="slash">/</div>
                                <div class="key control-key arrow-up">&#9650;</div>
                                <div class="key control-key middle shift-right">shift</div>
                            </div>
                            <div class="fifth-row">
                                <div class="key control-key control-left">ctrl</div>
                                <div class="key control-key win">win</div>
                                <div class="key control-key alt-left">alt</div>
                                <div class="key big space"></div>
                                <div class="key control-key alt-right">alt</div>
                                <div class="key control-key arrow-left">&#9668;</div>
                                <div class="key control-key arrow-down">&#9660;</div>
                                <div class="key control-key arrow-right">&#9658;</div>
                                <div class="key control-key control-right">ctrl</div>
                            </div>
                        </div>
                        <div class="addition">
                            <p data-i18="system">Keyboard created in Windows system</p>
                            <p data-i18="changing">For changing language: shift + alt</p>
                        </div>
                    </div>`;

    body.insertAdjacentHTML("afterbegin", content);
}
showContent();

let slashQuote = document.querySelector('[data-i18="slash-quote"]');
let key1 = document.querySelector(".key1");
let key2 = document.querySelector(".key2");
let key3 = document.querySelector(".key3");
let key4 = document.querySelector(".key4");
let key5 = document.querySelector(".key5");
let key6 = document.querySelector(".key6");
let key7 = document.querySelector(".key7");
let key8 = document.querySelector(".key8");
let key9 = document.querySelector(".key9");
let key0 = document.querySelector(".key0");
let dash = document.querySelector(".dash");
let equals = document.querySelector(".equals");
let backspace = document.querySelector(".backspace");

let tab = document.querySelector(".tab");
let keyQ = document.querySelector('[data-i18="q"]');
let keyW = document.querySelector('[data-i18="w"]');
let keyE = document.querySelector('[data-i18="e"]');
let keyR = document.querySelector('[data-i18="r"]');
let keyT = document.querySelector('[data-i18="t"]');
let keyY = document.querySelector('[data-i18="y"]');
let keyU = document.querySelector('[data-i18="u"]');
let keyI = document.querySelector('[data-i18="i"]');
let keyO = document.querySelector('[data-i18="o"]');
let keyP = document.querySelector('[data-i18="p"]');
let leftSquareBracket = document.querySelector('[data-i18="["]');
let rigthSquareBracket = document.querySelector('[data-i18="]"]');
let del = document.querySelector(".del");
let backslash = document.querySelector(".backslash");

let capslock = document.querySelector(".capslock");
let enter = document.querySelector(".enter");
let keyA = document.querySelector('[data-i18="a"]');
let keyS = document.querySelector('[data-i18="s"]');
let keyD = document.querySelector('[data-i18="d"]');
let keyF = document.querySelector('[data-i18="f"]');
let keyG = document.querySelector('[data-i18="g"]');
let keyH = document.querySelector('[data-i18="h"]');
let keyJ = document.querySelector('[data-i18="j"]');
let keyK = document.querySelector('[data-i18="k"]');
let keyL = document.querySelector('[data-i18="l"]');
let semicolon = document.querySelector('[data-i18=";"]');
let quotes = document.querySelector('[data-i18="quotes"]');

let keyZ = document.querySelector('[data-i18="z"]');
let keyX = document.querySelector('[data-i18="x"]');
let keyC = document.querySelector('[data-i18="c"]');
let keyV = document.querySelector('[data-i18="v"]');
let keyB = document.querySelector('[data-i18="b"]');
let keyN = document.querySelector('[data-i18="n"]');
let keyM = document.querySelector('[data-i18="m"]');
let shiftLeft = document.querySelector(".shift-left");
let shiftRight = document.querySelector(".shift-right");
let arrowUp = document.querySelector(".arrow-up");
let comma = document.querySelector('[data-i18="comma"]');
let period = document.querySelector('[data-i18="period"]');
let slash = document.querySelector('[data-i18="slash"]');

let controlLeft = document.querySelector(".control-left");
let controlRight = document.querySelector(".control-right");
let altLeft = document.querySelector(".alt-left");
let altRight = document.querySelector(".alt-right");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let arrowDown = document.querySelector(".arrow-down");
let space = document.querySelector(".space");
let win = document.querySelector(".win");

document.addEventListener("keydown", pressKey);
document.addEventListener("keyup", releaseKey);

function pressKey(e) {
    if (e.keyCode === 192) {
        slashQuote.classList.add("active");
    }   
    if (e.keyCode === 49) {
        key1.classList.add("active");
    }   
    if (e.keyCode === 50) {
        key2.classList.add("active");
    } 
    if (e.keyCode === 51) {
        key3.classList.add("active");
    } 
    if (e.keyCode === 52) {
        key4.classList.add("active");
    } 
    if (e.keyCode === 53) {
        key5.classList.add("active");
    } 
    if (e.keyCode === 54) {
        key6.classList.add("active");
    } 
    if (e.keyCode === 55) {
        key7.classList.add("active");
    } 
    if (e.keyCode === 56) {
        key8.classList.add("active");
    } 
    if (e.keyCode === 57) {
        key9.classList.add("active");
    } 
    if (e.keyCode === 48) {
        key0.classList.add("active");
    } 
    if (e.keyCode === 189) {
        dash.classList.add("active");
    } 
    if (e.keyCode === 187) {
        equals.classList.add("active");
    } 
    if (e.keyCode === 8) {
        backspace.classList.add("active");
        backspace.classList.add("active-background");
    }
    if (e.keyCode === 9) {
        e.preventDefault();
        tab.classList.add("active");
        tab.classList.add("active-background");
    }
    if (e.keyCode === 81) {
        keyQ.classList.add("active");
    } 
    if (e.keyCode === 87) {
        keyW.classList.add("active");
    } 
    if (e.keyCode === 69) {
        keyE.classList.add("active");
    } 
    if (e.keyCode === 82) {
        keyR.classList.add("active");
    }
    if (e.keyCode === 84) {
        keyT.classList.add("active");
    }
    if (e.keyCode === 89) {
        keyY.classList.add("active");
    }
    if (e.keyCode === 85) {
        keyU.classList.add("active");
    }
    if (e.keyCode === 73) {
        keyI.classList.add("active");
    }
    if (e.keyCode === 79) {
        keyO.classList.add("active");
    }
    if (e.keyCode === 80) {
        keyP.classList.add("active");
    }
    if (e.keyCode === 219) {
        leftSquareBracket.classList.add("active");
    }
    if (e.keyCode === 221) {
        rigthSquareBracket.classList.add("active");
    }
    if (e.keyCode === 220) {
        backslash.classList.add("active");
    }
    if (e.keyCode === 46) {
        del.classList.add("active");
        del.classList.add("active-background");
    }
    if (e.keyCode === 20) {
        capslock.classList.add("active");
        capslock.classList.add("active-background");
    }
    if (e.keyCode === 65) {
        keyA.classList.add("active");
    }
    if (e.keyCode === 83) {
        keyS.classList.add("active");
    }
    if (e.keyCode === 68) {
        keyD.classList.add("active");
    }
    if (e.keyCode === 70) {
        keyF.classList.add("active");
    }
    if (e.keyCode === 71) {
        keyG.classList.add("active");
    }
    if (e.keyCode === 72) {
        keyH.classList.add("active");
    }
    if (e.keyCode === 74) {
        keyJ.classList.add("active");
    }
    if (e.keyCode === 75) {
        keyK.classList.add("active");
    }
    if (e.keyCode === 76) {
        keyL.classList.add("active");
    }
    if (e.keyCode === 186) {
        semicolon.classList.add("active");
    }
    if (e.keyCode === 222) {
        quotes.classList.add("active");
    }
    if (e.keyCode === 13) {
        enter.classList.add("active");
        enter.classList.add("active-background");
    }
    if (e.keyCode === 90) {
        keyZ.classList.add("active");
    } 
    if (e.keyCode === 88) {
        keyX.classList.add("active");
    }
    if (e.keyCode === 67) {
        keyC.classList.add("active");
    }
    if (e.keyCode === 86) {
        keyV.classList.add("active");
    }
    if (e.keyCode === 66) {
        keyB.classList.add("active");
    }
    if (e.keyCode === 78) {
        keyN.classList.add("active");
    }
    if (e.keyCode === 77) {
        keyM.classList.add("active");
    }
    if (e.keyCode === 188) {
        comma.classList.add("active");
    }
    if (e.keyCode === 190) {
        period.classList.add("active");
    }
    if (e.keyCode === 191) {
        slash.classList.add("active");
    }
    if (e.keyCode === 38) {
        arrowUp.classList.add("active");
        arrowUp.classList.add("active-background");
    }
    if (e.keyCode === 16 && e.code === 'ShiftLeft') {
        shiftLeft.classList.add("active");
        shiftLeft.classList.add("active-background");
    }
    if (e.keyCode === 16 && e.code === 'ShiftRight') {
        shiftRight.classList.add("active");
        shiftRight.classList.add("active-background");
    }
    if (e.keyCode === 17 && e.code === 'ControlLeft') {
        controlLeft.classList.add("active");
        controlLeft.classList.add("active-background");
    }
    if (e.keyCode === 17 && e.code === 'ControlRight') {
        controlRight.classList.add("active");
        controlRight.classList.add("active-background");
    }
    if (e.keyCode === 91) {
        win.classList.add("active");
        win.classList.add("active-background");
    }
    if (e.keyCode === 18 && e.code === 'AltLeft') {
        e.preventDefault();
        altLeft.classList.add("active");
        altLeft.classList.add("active-background");
    }
    if (e.keyCode === 18 && e.code === 'AltRight') {
        e.preventDefault();
        altRight.classList.add("active");
        altRight.classList.add("active-background");
    }
    if (e.keyCode === 32) {
        space.classList.add("active");
    }
    if (e.keyCode === 37) {
        arrowLeft.classList.add("active");
        arrowLeft.classList.add("active-background");
    }
    if (e.keyCode === 40) {
        arrowDown.classList.add("active");
        arrowDown.classList.add("active-background");
    }
    if (e.keyCode === 39) {
        arrowRight.classList.add("active");
        arrowRight.classList.add("active-background");
    }
}

function releaseKey(e) {
    if (e.keyCode === 192) {
        slashQuote.classList.remove("active");
    }  
    if (e.keyCode === 49) {
        key1.classList.remove("active");
    } 
    if (e.keyCode === 50) {
        key2.classList.remove("active");
    } 
    if (e.keyCode === 51) {
        key3.classList.remove("active");
    } 
    if (e.keyCode === 52) {
        key4.classList.remove("active");
    } 
    if (e.keyCode === 53) {
        key5.classList.remove("active");
    } 
    if (e.keyCode === 54) {
        key6.classList.remove("active");
    } 
    if (e.keyCode === 55) {
        key7.classList.remove("active");
    } 
    if (e.keyCode === 56) {
        key8.classList.remove("active");
    } 
    if (e.keyCode === 57) {
        key9.classList.remove("active");
    } 
    if (e.keyCode === 48) {
        key0.classList.remove("active");
    } 
    if (e.keyCode === 189) {
        dash.classList.remove("active");
    } 
    if (e.keyCode === 187) {
        equals.classList.remove("active");
    }
    if (e.keyCode === 8) {
        backspace.classList.remove("active");
        backspace.classList.remove("active-background");
    }
    if (e.keyCode === 9) {
        tab.classList.remove("active");
        tab.classList.remove("active-background");
    }
    if (e.keyCode === 81) {
        keyQ.classList.remove("active");
    }
    if (e.keyCode === 87) {
        keyW.classList.remove("active");
    } 
    if (e.keyCode === 69) {
        keyE.classList.remove("active");
    } 
    if (e.keyCode === 82) {
        keyR.classList.remove("active");
    }
    if (e.keyCode === 84) {
        keyT.classList.remove("active");
    }
    if (e.keyCode === 89) {
        keyY.classList.remove("active");
    }
    if (e.keyCode === 85) {
        keyU.classList.remove("active");
    }
    if (e.keyCode === 73) {
        keyI.classList.remove("active");
    }
    if (e.keyCode === 79) {
        keyO.classList.remove("active");
    }
    if (e.keyCode === 80) {
        keyP.classList.remove("active");
    }
    if (e.keyCode === 219) {
        leftSquareBracket.classList.remove("active");
    }
    if (e.keyCode === 221) {
        rigthSquareBracket.classList.remove("active");
    }
    if (e.keyCode === 220) {
        backslash.classList.remove("active");
    }
    if (e.keyCode === 46) {
        del.classList.remove("active");
        del.classList.remove("active-background");
    }
    if (e.keyCode === 20) {
        capslock.classList.remove("active");
        capslock.classList.remove("active-background");
    }
    if (e.keyCode === 65) {
        keyA.classList.remove("active");
    }
    if (e.keyCode === 83) {
        keyS.classList.remove("active");
    }
    if (e.keyCode === 68) {
        keyD.classList.remove("active");
    }
    if (e.keyCode === 70) {
        keyF.classList.remove("active");
    }
    if (e.keyCode === 71) {
        keyG.classList.remove("active");
    }
    if (e.keyCode === 72) {
        keyH.classList.remove("active");
    }
    if (e.keyCode === 74) {
        keyJ.classList.remove("active");
    }
    if (e.keyCode === 75) {
        keyK.classList.remove("active");
    }
    if (e.keyCode === 76) {
        keyL.classList.remove("active");
    }
    if (e.keyCode === 186) {
        semicolon.classList.remove("active");
    }
    if (e.keyCode === 222) {
        quotes.classList.remove("active");
    }
    if (e.keyCode === 13) {
        enter.classList.remove("active");
        enter.classList.remove("active-background");
    }
    if (e.keyCode === 90) {
        keyZ.classList.remove("active");
    } 
    if (e.keyCode === 88) {
        keyX.classList.remove("active");
    }
    if (e.keyCode === 67) {
        keyC.classList.remove("active");
    }
    if (e.keyCode === 86) {
        keyV.classList.remove("active");
    }
    if (e.keyCode === 66) {
        keyB.classList.remove("active");
    }
    if (e.keyCode === 78) {
        keyN.classList.remove("active");
    }
    if (e.keyCode === 77) {
        keyM.classList.remove("active");
    }
    if (e.keyCode === 188) {
        comma.classList.remove("active");
    }
    if (e.keyCode === 190) {
        period.classList.remove("active");
    }
    if (e.keyCode === 191) {
        slash.classList.remove("active");
    }
    if (e.keyCode === 38) {
        arrowUp.classList.remove("active");
        arrowUp.classList.remove("active-background");
    }
    if (e.keyCode === 16 && e.code === 'ShiftLeft') {
        shiftLeft.classList.remove("active");
        shiftLeft.classList.remove("active-background");
    }
    if (e.keyCode === 16 && e.code === 'ShiftRight') {
        shiftRight.classList.remove("active");
        shiftRight.classList.remove("active-background");
    }
    if (e.keyCode === 17 && e.code === 'ControlLeft') {
        controlLeft.classList.remove("active");
        controlLeft.classList.remove("active-background");
    }
    if (e.keyCode === 17 && e.code === 'ControlRight') {
        controlRight.classList.remove("active");
        controlRight.classList.remove("active-background");
    }
    if (e.keyCode === 91) {
        win.classList.remove("active");
        win.classList.remove("active-background");
    }
    if (e.keyCode === 18 && e.code === 'AltLeft') {
        altLeft.classList.remove("active");
        altLeft.classList.remove("active-background");
    }
    if (e.keyCode === 18 && e.code === 'AltRight') {
        altRight.classList.remove("active");
        altRight.classList.remove("active-background");
    }
    if (e.keyCode === 32) {
        space.classList.remove("active");
    }
    if (e.keyCode === 37) {
        arrowLeft.classList.remove("active");
        arrowLeft.classList.remove("active-background");
    }
    if (e.keyCode === 40) {
        arrowDown.classList.remove("active");
        arrowDown.classList.remove("active-background");
    }
    if (e.keyCode === 39) {
        arrowRight.classList.remove("active");
        arrowRight.classList.remove("active-background");
    }
}