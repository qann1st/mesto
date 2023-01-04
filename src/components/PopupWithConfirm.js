import Popup from './Popup';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._popupRemoveBtn = this._popup.querySelector('.popup__button');
    this._formSubmitHandler = formSubmitHandler;
  }

  open() {
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupRemoveBtn.addEventListener('click', (evt) => this._formSubmitHandler(evt));
  }
}
