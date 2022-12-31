import Card from '../components/Card.js';
import { initialCards } from '../utils/data.js';
import FormValidator from '../components/FormValidator.js';
import {
  btnEdit,
  btnAdd,
  formList,
  formEditProfileElement,
  popupPhoto,
  formNewPlaceElement,
  nameInput,
  jobInput,
  profileName,
  profileDescription,
  imageTitleInput,
  imageLink,
  cardTemplate,
  popupWrapperPhoto,
  popupImage,
  popupPhotoClose,
  cardList,
} from '../utils/constants.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';

const renderCard = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.link,
        cardTemplate,
        popupPhoto,
        popupImage,
        popupPhotoClose,
      );
      const cardElement = card.renderCard();
      renderCard.addItem(cardElement);
    },
  },
  cardList,
);

renderCard.renderItems();

const popupEditProfile = new Popup('.popup-edit-profile');
popupEditProfile.setEventListeners();

const popupNewPlace = new Popup('.popup-new-place');
popupNewPlace.setEventListeners();

const editProfileValidator = new FormValidator('.popup__form-edit-profile');
editProfileValidator._setEventListeners();

const newPlaceValidator = new FormValidator('.popup__form-new-place');
newPlaceValidator._setEventListeners();

function createCard(name, link) {
  const newCard = new Card(name, link, cardTemplate, popupPhoto, popupImage, popupPhotoClose);
  const cardElement = newCard.renderCard();
  document.querySelector('.elements').prepend(cardElement);
}

function formSubmitHandlerNewPlace(evt) {
  evt.preventDefault();

  createCard(imageTitleInput.value, imageLink.value);

  evt.target.reset();
}

function formSubmitHandlerEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

btnEdit.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  popupEditProfile.open();
  formList.forEach(() => {
    editProfileValidator.resetValidation();
  });
});

btnAdd.addEventListener('click', () => {
  imageLink.value = '';
  imageTitleInput.value = '';
  popupNewPlace.open();
  formList.forEach(() => {
    newPlaceValidator.resetValidation();
  });
});