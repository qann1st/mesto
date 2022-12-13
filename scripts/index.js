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
const formNewPlaceElement = document.querySelector(".popup__form-new-place");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const cardTemplate = document.querySelector(".card__template").content;
const cards = document.querySelector(".elements");
const popupPhoto = document.querySelector(".popup-photo");
const popupImage = popupPhoto.querySelector(".popup__image");
const popupImageDescription = popupPhoto.querySelector(
  ".popup__image-description"
);
const imageTitleInput = formNewPlaceElement.querySelector(".popup__name_place");
const imageLink = formNewPlaceElement.querySelector(".popup__image_link");
const popupPhotoClose = popupPhoto.querySelector(".popup__image_close");

function openPopup(element) {
  element.classList.add("popup__opened");
}

function closePopup(element) {
  element.classList.remove("popup__opened");
}

function renderCards(name, link) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardDelete = cardElement.querySelector(".element__delete");
  const cardLike = cardElement.querySelector(".element__like");
  const cardName = cardElement.querySelector(".element__title");

  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("element__like_active");
  });
  cardDelete.addEventListener("click", () => {
    cardElement.remove();
  });

  cardName.textContent = name;
  cardImage.src = link;
  cardImage.name = name;
  cardImage.alt = name;

  cardImage.addEventListener("click", () => {
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupImageDescription.textContent = cardImage.name;
    openPopup(popupPhoto);
  });
  popupPhotoClose.addEventListener("click", () => {
    closePopup(popupPhoto);
  });

  cards.prepend(cardElement);
}

initialCards.forEach((name, link) => {
  const nameCard = initialCards[link].name;
  const linkCard = initialCards[link].link;

  renderCards(nameCard, linkCard);
});

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

btnEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
  resetValidation(nameInput, formEditProfileElement);
});

btnAdd.addEventListener("click", () => {
  imageLink.value = '';
  imageTitleInput.value = '';
  resetValidation(imageLink, formNewPlaceElement)
  openPopup(popupNewPlace)
});

popupEditProfileClose.addEventListener("click", () =>
  closePopup(popupEditProfile)
);

popupNewPlaceClose.addEventListener("click", () => closePopup(popupNewPlace));

formEditProfileElement.addEventListener("submit", formSubmitHandlerEditProfile);
formEditProfileElement.addEventListener("submit", () =>
  closePopup(popupEditProfile)
);

formNewPlaceElement.addEventListener("submit", formSubmitHandlerNewPlace);
formNewPlaceElement.addEventListener("submit", () => closePopup(popupNewPlace));
