export default class FormValidator {
  constructor(form) {
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
    this._popupBtn = this._form.querySelector(".popup__button");
  }

  _showInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add("popup__form_type_error");
    errorElement.classList.add("popup__form-input-error_active");
    errorElement.textContent = input.validationMessage;
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove("popup__form_type_error");
    errorElement.classList.remove("popup__form-input-error_active");
    errorElement.textContent = "";
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
      input.addEventListener("input", () => {
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
      this._popupBtn.setAttribute("disabled", true);
      this._popupBtn.classList.add("popup__button_disabled");
    } else {
      this._popupBtn.removeAttribute("disabled");
      this._popupBtn.classList.remove("popup__button_disabled");
    }
  }

  resetValidation() {
    this._setEventListeners();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }
}
