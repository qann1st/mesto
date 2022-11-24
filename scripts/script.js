const btnEdit = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const popupEditProfileClose = popupEditProfile.querySelector(".popup__close");

function openPopup(element) {
  element.classList.add("popup__opened");
}

function closePopup(element) {
  element.classList.remove("popup__opened");
}

btnEdit.addEventListener("click", () => openPopup(popupEditProfile));
popupEditProfileClose.addEventListener("click", () => closePopup(popupEditProfile));
