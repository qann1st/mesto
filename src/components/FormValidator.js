export default class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector));
    this._popupBtn = this._form.querySelector(config.submitButtonSelector);
    this._config = config;
  }

  _showInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._toggleButtonState();
        this._checkInputValidity(input);
      });
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._popupBtn.setAttribute('disabled', true);
      this._popupBtn.classList.add(this._config.inactiveButtonClass);
    } else {
      this._popupBtn.removeAttribute('disabled');
      this._popupBtn.classList.remove(this._config.inactiveButtonClass);
    }
  }

  resetValidation() {
    this._setEventListeners();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }
}
