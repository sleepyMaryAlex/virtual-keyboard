const body = document.querySelector("body");

function showContent() {
    const content = `<div class="wrapper">
                        <h1>Virtual Keyboard</h1>
                        <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        <div class="keyboard">
                            <div class="first-row">
                                <div class="key">\`</div>
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
                                <div class="key control-key">Backspace</div>
                            </div>
                            <div class="second-row">
                                <div class="key control-key">Tab</div>
                                <div class="key">q</div>
                                <div class="key">w</div>
                                <div class="key">e</div>
                                <div class="key">r</div>
                                <div class="key">t</div>
                                <div class="key">y</div>
                                <div class="key">u</div>
                                <div class="key">i</div>
                                <div class="key">o</div>
                                <div class="key">p</div>
                                <div class="key">[</div>
                                <div class="key">]</div>
                                <div class="key">\</div>
                                <div class="key control-key">Del</div>
                            </div>
                            <div class="third-row">
                                <div class="key control-key">CapsLock</div>
                                <div class="key">a</div>
                                <div class="key">s</div>
                                <div class="key">d</div>
                                <div class="key">f</div>
                                <div class="key">g</div>
                                <div class="key">h</div>
                                <div class="key">j</div>
                                <div class="key">k</div>
                                <div class="key">l</div>
                                <div class="key">;</div>
                                <div class="key">'</div>
                                <div class="key control-key">Enter</div>
                            </div>
                            <div class="fourth-row">
                                <div class="key control-key">Shift</div>
                                <div class="key">z</div>
                                <div class="key">x</div>
                                <div class="key">c</div>
                                <div class="key">v</div>
                                <div class="key">b</div>
                                <div class="key">n</div>
                                <div class="key">m</div>
                                <div class="key">,</div>
                                <div class="key">.</div>
                                <div class="key">/</div>
                                <div class="key control-key">&#9650;</div>
                                <div class="key control-key">Shift</div>
                            </div>
                            <div class="fifth-row">
                                <div class="key control-key">Ctrl</div>
                                <div class="key control-key">Win</div>
                                <div class="key control-key">Alt</div>
                                <div class="key"></div>
                                <div class="key control-key">Alt</div>
                                <div class="key control-key">&#9668;</div>
                                <div class="key control-key">&#9660;</div>
                                <div class="key control-key">&#9658;</div>
                                <div class="key control-key">Ctrl</div>
                            </div>
                        </div>
                    </div>`;

    body.insertAdjacentHTML("afterbegin", content);
}
showContent();