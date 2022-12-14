import Card from "./Card.js";
import { initialCards } from "./data.js";

const btnEdit = document.querySelector(".profile__edit-button");
const btnAdd = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const popupEditProfileClose = popupEditProfile.querySelector(
  ".popup-edit-profile_close"
);
const popupNewPlace = document.querySelector(".popup-new-place");
const popupNewPlaceClose = popupNewPlace.querySelector(
  ".popup-new-place_close"
);
const formEditProfileElement = document.querySelector(
  ".popup__form-edit-profile"
);
const popupPhoto = document.querySelector(".popup-photo");
const formNewPlaceElement = document.querySelector(".popup__form-new-place");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const imageTitleInput = formNewPlaceElement.querySelector(".popup__name_place");
const imageLink = formNewPlaceElement.querySelector(".popup__image_link");
const cardTemplate = document.querySelector(".card__template");
const popupWrapperEditProfile = document.querySelector(
  ".popup__wrapper-edit-profile"
);
const popupWrapperNewPlace = document.querySelector(
  ".popup__wrapper-new-place"
);
const popupWrapperPhoto = document.querySelector(".popup__wrapper-photo");
const popupImage = popupPhoto.querySelector(".popup__image");
const popupPhotoClose = popupPhoto.querySelector(".popup__image_close");

function openPopup(element) {
  element.classList.add("popup__opened");
}

function closePopup(element) {
  element.classList.remove("popup__opened");
}

function escapeClosePopup(element) {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopup(element);
      popupPhoto.classList.remove("popup__opened");
    }
  });
}

function formSubmitHandlerNewPlace(evt) {
  evt.preventDefault();

  renderCards(imageTitleInput.value, imageLink.value);

  evt.target.reset();
}

function formSubmitHandlerEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

initialCards.forEach((item) => {
  const card = new Card(
    item,
    cardTemplate,
    popupPhoto,
    popupImage,
    popupPhotoClose
  );
  const cardElement = card.renderCard();

  document.querySelector(".elements").prepend(cardElement);
});

btnEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
  resetValidation(nameInput, formEditProfileElement);
});

btnAdd.addEventListener("click", () => {
  imageLink.value = "";
  imageTitleInput.value = "";
  resetValidation(imageLink, formNewPlaceElement);
  openPopup(popupNewPlace);
});

popupWrapperEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);
popupEditProfileClose.addEventListener(
  "click",
  () => closePopup(popupEditProfile),
  escapeClosePopup(popupEditProfile)
);

popupWrapperNewPlace.addEventListener("click", () => closePopup(popupNewPlace));
popupNewPlaceClose.addEventListener(
  "click",
  () => closePopup(popupNewPlace),
  escapeClosePopup(popupNewPlace)
);

popupWrapperPhoto.addEventListener("click", () =>
  popupPhoto.classList.remove("popup__opened")
);

formEditProfileElement.addEventListener("submit", formSubmitHandlerEditProfile);
formEditProfileElement.addEventListener("submit", () =>
  closePopup(popupEditProfile)
);

formNewPlaceElement.addEventListener("submit", formSubmitHandlerNewPlace);
formNewPlaceElement.addEventListener("submit", () => closePopup(popupNewPlace));
