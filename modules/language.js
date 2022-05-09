const primaryLanguage = 'en';
const alternativeLanguage = 'ru';

class Language {
  constructor() {
    this.storage = localStorage;
    this.currentLanguage = this.getFromLocalStorage() || primaryLanguage;
  }

  getFromLocalStorage() {
    return this.storage.getItem('language');
  }

  saveToLocalStorage() {
    this.storage.setItem('language', this.currentLanguage);
  }

  changeLanguage() {
    this.currentLanguage = this.currentLanguage === primaryLanguage
      ? alternativeLanguage
      : primaryLanguage;
    this.saveToLocalStorage();
  }
}

export default Language;
