const initialCards = [
  {
    name: "Москва",
    link: "https://putidorogi-nn.ru/images/stories/evropa/moskovskiy_kreml_7.jpg",
  },
  {
    name: "Парк Лога",
    link: "https://volgotour.ru/wp-content/uploads/2020/07/261462271.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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
const popupPhotoClose = popupPhoto.querySelector("popup-image_close");

function openPopup(element) {
  element.classList.add("popup__opened");
}

function closePopup(element) {
  element.classList.remove("popup__opened");
}

function formSubmitHandlerEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

function addCards(name, link) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardLike = cardElement.querySelector(".element__like");
  const cardDelete = cardElement.querySelector(".element__delete");

  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("element__like_active");
  });
  cardDelete.addEventListener("click", () => {
    cardElement.remove();
  });

  cardElement.querySelector(".element__title").textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener("click", () => {
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupImageDescription.textContent = name;
    openPopup(popupPhoto);
  });
  popupPhoto.addEventListener("click", () => {
    closePopup(popupPhoto);
  });
  cards.append(cardElement);
}

function addCard(name, link) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardLike = cardElement.querySelector(".element__like");
  const cardDelete = cardElement.querySelector(".element__delete");

  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("element__like_active");
  });
  cardDelete.addEventListener("click", () => {
    cardElement.remove();
  });

  cardElement.querySelector(".element__title").textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener("click", () => {
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupImageDescription.textContent = name;
    openPopup(popupPhoto);
  });
  popupPhoto.addEventListener("click", () => {
    closePopup(popupPhoto);
  });
  cards.prepend(cardElement);
}

function formSubmitHandlerNewPlace(evt) {
  evt.preventDefault();

  const imageTitleInput =
    formNewPlaceElement.querySelector(".popup__name_place");
  const imageLink = formNewPlaceElement.querySelector(".popup__image_link");

  if (imageTitleInput.value === "") return;

  addCard(imageTitleInput.value, imageLink.value);

  imageTitleInput.value = "";
  imageLink.value = "";
}

initialCards.forEach((name, link) => {
  const nameCard = initialCards[link].name;
  const linkCard = initialCards[link].link;

  addCards(nameCard, linkCard);
});

btnEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});

popupEditProfileClose.addEventListener("click", () =>
  closePopup(popupEditProfile)
);

btnAdd.addEventListener("click", () => openPopup(popupNewPlace));

popupNewPlaceClose.addEventListener("click", () => closePopup(popupNewPlace));

formEditProfileElement.addEventListener("submit", formSubmitHandlerEditProfile);
formEditProfileElement.addEventListener("submit", () =>
  closePopup(popupEditProfile)
);

formNewPlaceElement.addEventListener("submit", formSubmitHandlerNewPlace);
formNewPlaceElement.addEventListener("submit", () => closePopup(popupNewPlace));
