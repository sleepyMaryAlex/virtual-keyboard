class Keyboard {
  constructor(language, translationServise, textarea) {
    this.language = language;
    this.translationServise = translationServise;
    this.textarea = textarea;

    this.isCapsLocked = false;

    this.data = document.querySelectorAll('[data-i18n]');

    this.keyboard = document.querySelector('.keyboard');

    this.letters = document.querySelectorAll('.letter');
    this.digits = document.querySelectorAll('.digit');
    this.symbols = document.querySelectorAll('.symbol');

    this.shifts = document.querySelectorAll('.shift');
    this.controlLeft = document.querySelector('#ControlLeft');
    this.altLeft = document.querySelector('#AltLeft');
    this.controlRight = document.querySelector('#ControlRight');
    this.altRight = document.querySelector('#AltRight');
  }

  updateTranslation() {
    this.data.forEach((value) => {
      const elem = value;
      const translation = this.translationServise.getTranslation(
        elem.dataset.i18n,
      );
      elem.textContent = this.isCapsLocked
        ? translation.toUpperCase()
        : translation.toLowerCase();
    });
  }

  shiftSymbols() {
    const [one, two, three, four, five, six, seven, eight, nine, zero] = this.digits;
    const [
      backquote,
      minus,
      equal,
      bracketleft,
      bracketright,
      backslash,
      semicolon,
      quote,
      comma,
      period,
      slash,
    ] = this.symbols;

    if (this.language.currentLanguage === 'en') {
      one.textContent = '!';
      two.textContent = '@';
      three.textContent = '#';
      four.textContent = '$';
      five.textContent = '%';
      six.textContent = '^';
      seven.textContent = '&';
      eight.textContent = '*';
      nine.textContent = '(';
      zero.textContent = ')';
      backquote.textContent = '~';
      minus.textContent = '_';
      equal.textContent = '+';
      bracketleft.textContent = '{';
      bracketright.textContent = '}';
      backslash.textContent = '|';
      semicolon.textContent = ':';
      quote.textContent = '"';
      comma.textContent = '<';
      period.textContent = '>';
      slash.textContent = '?';
    } else if (this.language.currentLanguage === 'ru') {
      one.textContent = '!';
      two.textContent = '"';
      three.textContent = '№';
      four.textContent = ';';
      five.textContent = '%';
      six.textContent = ':';
      seven.textContent = '?';
      eight.textContent = '*';
      nine.textContent = '(';
      zero.textContent = ')';
      minus.textContent = '_';
      equal.textContent = '+';
      backslash.textContent = '/';
      slash.textContent = ',';
    }
  }

  unshiftSymbols() {
    const [one, two, three, four, five, six, seven, eight, nine, zero] = this.digits;
    const [
      backquote,
      minus,
      equal,
      bracketleft,
      bracketright,
      backslash,
      semicolon,
      quote,
      comma,
      period,
      slash,
    ] = this.symbols;
    one.textContent = '1';
    two.textContent = '2';
    three.textContent = '3';
    four.textContent = '4';
    five.textContent = '5';
    six.textContent = '6';
    seven.textContent = '7';
    eight.textContent = '8';
    nine.textContent = '9';
    zero.textContent = '0';
    minus.textContent = '-';
    equal.textContent = '=';
    if (this.language.currentLanguage === 'en') {
      backquote.textContent = '`';
      bracketleft.textContent = '[';
      bracketright.textContent = ']';
      backslash.textContent = '\\';
      semicolon.textContent = ';';
      quote.textContent = "'";
      comma.textContent = ',';
      period.textContent = '.';
      slash.textContent = '/';
    } else if (this.language.currentLanguage === 'ru') {
      backslash.textContent = '\\';
      slash.textContent = '.';
    }
  }

  shiftLetters() {
    this.letters.forEach((value) => {
      const letter = value;
      letter.textContent = this.isCapsLocked
        ? letter.textContent.toLowerCase()
        : letter.textContent.toUpperCase();
    });
  }

  toUpperAndLowerCase(key) {
    if (this.isCapsLocked) {
      key.classList.remove('capslock-active');
      key.classList.remove('active');
      key.classList.remove('active-background');
      this.letters.forEach((value) => {
        const letter = value;
        letter.textContent = letter.textContent.toLowerCase();
      });
      this.isCapsLocked = false;
    } else {
      this.letters.forEach((value) => {
        const letter = value;
        letter.textContent = letter.textContent.toUpperCase();
      });
      key.classList.add('capslock-active');
      key.classList.add('active');
      key.classList.add('active-background');
      this.isCapsLocked = true;
    }
  }

  determinePressedKey(key) {
    if (
      key.classList.contains('key')
      && !key.classList.contains('control-key')
    ) {
      this.textarea.enterText(key.textContent);
    }
    if (key.classList.contains('arrow')) {
      this.textarea.enterText(key.textContent);
    }
    if (key.classList.contains('capslock')) {
      this.toUpperAndLowerCase(key);
    }
    if (key.classList.contains('enter')) {
      this.textarea.enterText('\n');
    }
    if (key.classList.contains('tab')) {
      this.textarea.enterText('\t');
    }
    if (key.classList.contains('backspace')) {
      this.textarea.deleteFromTextarea();
    }
    if (key.classList.contains('del')) {
      this.textarea.deleteFromTextareaByDel();
    }
    if (key.classList.contains('alt-left') && this.controlLeft.classList.contains('active')) {
      this.changeLanguage();
    }
    if (key.classList.contains('control-left') && this.altLeft.classList.contains('active')) {
      this.changeLanguage();
    }
    if (key.classList.contains('alt-right') && this.controlRight.classList.contains('active')) {
      this.changeLanguage();
    }
    if (key.classList.contains('control-right') && this.altRight.classList.contains('active')) {
      this.changeLanguage();
    }
    if (key.classList.contains('alt-left') && this.controlRight.classList.contains('active')) {
      this.changeLanguage();
    }
    if (key.classList.contains('control-right') && this.altLeft.classList.contains('active')) {
      this.changeLanguage();
    }
    if (key.classList.contains('alt-right') && this.controlLeft.classList.contains('active')) {
      this.changeLanguage();
    }
    if (key.classList.contains('control-left') && this.altRight.classList.contains('active')) {
      this.changeLanguage();
    }
    this.textarea.updateTextarea();
  }

  changeLanguage() {
    this.language.changeLanguage();
    this.updateTranslation();
  }

  pressKey(e) {
    const key = document.querySelector(`#${e.code}`);
    if (key) {
      if (key.classList.contains('key')) {
        e.preventDefault();
      }
      if (key.classList.contains('control-key')) {
        key.classList.add('active-background');
      }
      key.classList.add('active');
      if (key.classList.contains('shift')) {
        this.shiftSymbols();
        this.shiftLetters();
      }
      this.determinePressedKey(key);
    }
  }

  determineUpKey(key) {
    if (key.classList.contains('shift')) {
      if (!this.isCapsLocked) {
        this.letters.forEach((value) => {
          const letter = value;
          letter.textContent = letter.textContent.toLowerCase();
        });
      } else {
        this.letters.forEach((value) => {
          const letter = value;
          letter.textContent = letter.textContent.toUpperCase();
        });
      }
      this.unshiftSymbols();
    }
  }

  releaseKey(e) {
    const key = document.querySelector(`#${e.code}`);
    if (key) {
      if (
        key.classList.contains('control-key')
        && !key.classList.contains('capslock')
      ) {
        key.classList.remove('active-background');
      }
      if (!key.classList.contains('capslock')) {
        key.classList.remove('active');
      }
      this.determineUpKey(key);
    }
  }

  identifyKey(e) {
    const key = e.target;
    this.determinePressedKey(key);
  }
}

export default Keyboard;
