import i18Obj from "./translate.js";

const body = document.querySelector("body");

function showContent() {
    const content = `<div class="wrapper">
                        <h1 data-i18="title">Virtual Keyboard</h1>
                        <textarea name="textarea" id="textarea"></textarea>
                        <div class="keyboard">
                            <div class="first-row">
                                <div class="key" data-i18="\`">\`</div>
                                <div class="key">1</div>
                                <div class="key">2</div>
                                <div class="key">3</div>
                                <div class="key">4</div>
                                <div class="key">5</div>
                                <div class="key">6</div>
                                <div class="key">7</div>
                                <div class="key">8</div>
                                <div class="key">9</div>
                                <div class="key">0</div>
                                <div class="key">-</div>
                                <div class="key">=</div>
                                <div class="key control-key middle">Backspace</div>
                            </div>
                            <div class="second-row">
                                <div class="key control-key">Tab</div>
                                <div class="key" data-i18="g">q</div>
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
                                <div class="key">\\</div>
                                <div class="key control-key">Del</div>
                            </div>
                            <div class="third-row">
                                <div class="key control-key middle">CapsLock</div>
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
                                <div class="key control-key middle">Enter</div>
                            </div>
                            <div class="fourth-row">
                                <div class="key control-key middle">Shift</div>
                                <div class="key" data-i18="z">z</div>
                                <div class="key" data-i18="x">x</div>
                                <div class="key" data-i18="c">c</div>
                                <div class="key" data-i18="v">v</div>
                                <div class="key" data-i18="b">b</div>
                                <div class="key" data-i18="n">n</div>
                                <div class="key" data-i18="m">m</div>
                                <div class="key" data-i18=",">,</div>
                                <div class="key" data-i18=".">.</div>
                                <div class="key" data-i18="/">/</div>
                                <div class="key control-key">&#9650;</div>
                                <div class="key control-key middle">Shift</div>
                            </div>
                            <div class="fifth-row">
                                <div class="key control-key">Ctrl</div>
                                <div class="key control-key">Win</div>
                                <div class="key control-key">Alt</div>
                                <div class="key big"></div>
                                <div class="key control-key">Alt</div>
                                <div class="key control-key">&#9668;</div>
                                <div class="key control-key">&#9660;</div>
                                <div class="key control-key">&#9658;</div>
                                <div class="key control-key">Ctrl</div>
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

