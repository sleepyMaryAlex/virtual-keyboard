import Language from './modules/language';
import TranslationService from './modules/translate';
import Textarea from './modules/textarea';
import Keyboard from './modules/keyboard';

function initializeContent() {
  const body = document.querySelector('body');
  const content = `<div class="wrapper">
                          <h1>Virtual Keyboard</h1>
                          <textarea name="textarea" class="textarea" autofocus></textarea>
                          <div class="keyboard">
                              <div class="first-row">
                                  <div class="key letter symbol" data-i18n="backquote" id='Backquote'>\`</div>
                                  <div class="key digit" id="Digit1">1</div>
                                  <div class="key digit" id="Digit2">2</div>
                                  <div class="key digit" id="Digit3">3</div>
                                  <div class="key digit" id="Digit4">4</div>
                                  <div class="key digit" id="Digit5">5</div>
                                  <div class="key digit" id="Digit6">6</div>
                                  <div class="key digit" id="Digit7">7</div>
                                  <div class="key digit" id="Digit8">8</div>
                                  <div class="key digit" id="Digit9">9</div>
                                  <div class="key digit" id="Digit0">0</div>
                                  <div class="key symbol" id="Minus">-</div>
                                  <div class="key symbol" id="Equal">=</div>
                                  <div class="key control-key middle backspace" id="Backspace">backspace</div>
                              </div>
                              <div class="second-row">
                                  <div class="key control-key tab" id="Tab">tab</div>
                                  <div class="key letter" data-i18n="q" id="KeyQ">q</div>
                                  <div class="key letter" data-i18n="w" id="KeyW">w</div>
                                  <div class="key letter" data-i18n="e" id="KeyE">e</div>
                                  <div class="key letter" data-i18n="r" id="KeyR">r</div>
                                  <div class="key letter" data-i18n="t" id="KeyT">t</div>
                                  <div class="key letter" data-i18n="y" id="KeyY">y</div>
                                  <div class="key letter" data-i18n="u" id="KeyU">u</div>
                                  <div class="key letter" data-i18n="i" id="KeyI">i</div>
                                  <div class="key letter" data-i18n="o" id="KeyO">o</div>
                                  <div class="key letter" data-i18n="p" id="KeyP">p</div>
                                  <div class="key letter symbol" data-i18n="[" id="BracketLeft">[</div>
                                  <div class="key letter symbol" data-i18n="]" id="BracketRight">]</div>
                                  <div class="key symbol" id="Backslash">\\</div>
                                  <div class="key control-key del" id="Delete">del</div>
                              </div>
                              <div class="third-row">
                                  <div class="key control-key middle capslock" id="CapsLock">caps lock</div>
                                  <div class="key letter" data-i18n="a" id="KeyA">a</div>
                                  <div class="key letter" data-i18n="s" id="KeyS">s</div>
                                  <div class="key letter" data-i18n="d" id="KeyD">d</div>
                                  <div class="key letter" data-i18n="f" id="KeyF">f</div>
                                  <div class="key letter" data-i18n="g" id="KeyG">g</div>
                                  <div class="key letter" data-i18n="h" id="KeyH">h</div>
                                  <div class="key letter" data-i18n="j" id="KeyJ">j</div>
                                  <div class="key letter" data-i18n="k" id="KeyK">k</div>
                                  <div class="key letter" data-i18n="l" id="KeyL">l</div>
                                  <div class="key letter symbol" data-i18n=";" id="Semicolon">;</div>
                                  <div class="key letter symbol" data-i18n="quotes" id="Quote">'</div>
                                  <div class="key control-key middle enter" id="Enter">enter</div>
                              </div>
                              <div class="fourth-row">
                                  <div class="key control-key middle shift" id="ShiftLeft">shift</div>
                                  <div class="key letter" data-i18n="z" id="KeyZ">z</div>
                                  <div class="key letter" data-i18n="x" id="KeyX">x</div>
                                  <div class="key letter" data-i18n="c" id="KeyC">c</div>
                                  <div class="key letter" data-i18n="v" id="KeyV">v</div>
                                  <div class="key letter" data-i18n="b" id="KeyB">b</div>
                                  <div class="key letter" data-i18n="n" id="KeyN">n</div>
                                  <div class="key letter" data-i18n="m" id="KeyM">m</div>
                                  <div class="key letter symbol" data-i18n="comma" id="Comma">,</div>
                                  <div class="key letter symbol" data-i18n="period" id="Period">.</div>
                                  <div class="key symbol" data-i18n="slash" id="Slash">/</div>
                                  <div class="key control-key arrow-up arrow" id="ArrowUp">▲</div>
                                  <div class="key control-key middle shift" id="ShiftRight">shift</div>
                              </div>
                              <div class="fifth-row">
                                  <div class="key control-key control-left" id="ControlLeft">ctrl</div>
                                  <div class="key control-key" id="MetaLeft">win</div>
                                  <div class="key control-key alt-left" id="AltLeft">alt</div>
                                  <div class="key big" id="Space"> </div>
                                  <div class="key control-key alt-right" id="AltRight">alt</div>
                                  <div class="key control-key arrow" id="ArrowLeft">◄</div>
                                  <div class="key control-key arrow" id="ArrowDown">▼</div>
                                  <div class="key control-key arrow" id="ArrowRight">►</div>
                                  <div class="key control-key control-right" id="ControlRight">ctrl</div>
                              </div>
                          </div>
                          <div class="addition">
                              <p data-i18n="system">keyboard created in windows system</p>
                              <p data-i18n="changing">for changing language: ctrl + alt</p>
                          </div>
                      </div>`;

  body.insertAdjacentHTML('afterbegin', content);
}

initializeContent();

const language = new Language();
const translationService = new TranslationService(language);
const textarea = new Textarea();
const keyboard = new Keyboard(language, translationService, textarea);

textarea.textarea.addEventListener('click', () => {
  textarea.cursorPosition = textarea.textarea.selectionStart;
});

document.addEventListener('keydown', (e) => {
  keyboard.pressKey(e);
});
document.addEventListener('keyup', (e) => {
  keyboard.releaseKey(e);
});

keyboard.shifts.forEach((shift) => shift.addEventListener('mousedown', () => {
  keyboard.shiftSymbols();
  keyboard.shiftLetters();
}));

keyboard.shifts.forEach((shift) => shift.addEventListener('mouseup', (e) => {
  const key = e.target;
  keyboard.determineUpKey(key);
}));

keyboard.keyboard.addEventListener('click', (e) => {
  keyboard.identifyKey(e);
});

keyboard.updateTranslation();
