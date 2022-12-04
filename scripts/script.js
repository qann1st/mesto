const btnEdit = document.querySelector(".profile__edit-button");
const btnAdd = document.querySelector(".profile__add-button")
const popupEditProfile = document.querySelector(".popup-edit-profile");
const popupEditProfileClose = popupEditProfile.querySelector(".popup-edit-profile_close");
const popupNewPlace = document.querySelector('.popup-new-place');
const popupNewPlaceClose = popupNewPlace.querySelector('.popup-new-place_close')
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

function openPopup(element) {
  element.classList.add("popup__opened");
};

function closePopup(element) {
  element.classList.remove("popup__opened");
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
};

btnEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});

popupEditProfileClose.addEventListener("click", () => closePopup(popupEditProfile));

btnAdd.addEventListener("click", () => openPopup(popupNewPlace));

popupNewPlaceClose.addEventListener("click", () => closePopup(popupNewPlace));

formElement.addEventListener("submit", formSubmitHandler);
formElement.addEventListener("submit", () => closePopup(popupEditProfile));