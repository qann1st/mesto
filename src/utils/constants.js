export const btnEdit = document.querySelector('.profile__edit-button');
export const btnAdd = document.querySelector('.profile__add-button');
export const formList = Array.from(document.querySelectorAll('.popup__form'));
export const cardTemplate = document.querySelector('.card__template');
export const cardList = document.querySelector('.elements');
export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__form_type_error',
  errorClass: 'popup__form-input-error_active',
};
