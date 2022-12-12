// const form = document.querySelector(".popup__form");
// const formInput = form.querySelector(".popup__input");
// const formError = form.querySelector(`.${formInput.id}-error`);

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add("popup__form_type_error");
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add("popup__form-input-error_active");
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove("popup__form_type_error");
//   errorElement.classList.remove("popup__form-input-error_active");
//   errorElement.textContent = "";
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.setAttribute("disabled", true);
//     buttonElement.classList.add('popup__button_disabled');
//   } else {
//     buttonElement.removeAttribute("disabled");
//     buttonElement.classList.remove('popup__button_disabled');
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
//   const buttonElement = formElement.querySelector(".popup__button")
//   toggleButtonState(inputList, buttonElement)

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement)
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll(".popup__form"));

//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement);
//   });
// };

// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// };

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__form-input-error',
//   errorClass: 'popup__form-input-error_active'
// }); 

// const resetValidation = enableValidation();

