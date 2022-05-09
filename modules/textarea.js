class Textarea {
  constructor() {
    this.textareaText = '';
    this.cursorPosition = 0;
    this.textarea = document.querySelector('.textarea');
  }

  deleteFromTextarea() {
    if (this.cursorPosition > 0) {
      this.textareaText = this.textareaText.substring(0, this.textarea.selectionStart - 1)
        + this.textareaText.substring(this.textarea.selectionEnd);
      this.cursorPosition -= 1;
    }
  }

  deleteFromTextareaByDel() {
    this.textareaText = this.textareaText.substring(0, this.textarea.selectionStart)
      + this.textareaText.substring(this.textarea.selectionEnd + 1);
  }

  enterText(text) {
    this.textareaText = this.textareaText.substring(0, this.cursorPosition)
      + text
      + this.textareaText.substring(this.cursorPosition);
    this.cursorPosition += text.length;
  }

  updateTextarea() {
    this.textarea.textContent = this.textareaText;
    this.textarea.selectionStart = this.cursorPosition;
    this.textarea.focus();
  }
}

export default Textarea;
