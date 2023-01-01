export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupWrapper = this._popup.querySelector('.popup__wrapper');
    this._popupBtnClose = this._popup.querySelector('.popup__close');
  }

  open() {
    this._popup.classList.add('popup__opened');
  }

  close() {
    this._popup.classList.remove('popup__opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    this._popupWrapper.addEventListener('click', () => this.close());
    this._popupBtnClose.addEventListener('click', () => this.close());
  }
}
