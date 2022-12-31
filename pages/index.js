import Card from '../components/Card.js';
import { initialCards } from '../utils/data.js';
import FormValidator from '../components/FormValidator.js';
import {
  btnEdit,
  btnAdd,
  formList,
  cardTemplate,
  cardList,
} from '../utils/constants.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const renderCard = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, cardTemplate, '.popup-photo');
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

const popupWithImage = new Popup('.popup-photo');
popupWithImage.setEventListeners();

const userInfo = new UserInfo({ name: '.profile__name', about: '.profile__description' });

const popupWithEditProfile = new PopupWithForm('.popup-edit-profile', (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupWithEditProfile._getInputValues());
  popupWithEditProfile.close();
});
popupWithEditProfile.setEventListeners();

const popupWithNewPlace = new PopupWithForm('.popup-new-place', (evt) => {
  evt.preventDefault();
  createCard(popupWithNewPlace._getInputValues());
  popupWithNewPlace.close();
});
popupWithNewPlace.setEventListeners();

const editProfileValidator = new FormValidator('.popup__form-edit-profile');
editProfileValidator._setEventListeners();

const newPlaceValidator = new FormValidator('.popup__form-new-place');
newPlaceValidator._setEventListeners();

function createCard({ name, link }) {
  const newCard = new Card(name, link, cardTemplate, '.popup-photo');
  const cardElement = newCard.renderCard();
  document.querySelector('.elements').prepend(cardElement);
}

btnEdit.addEventListener('click', () => {
  popupEditProfile.open();
  formList.forEach(() => {
    editProfileValidator.resetValidation();
  });
});

btnAdd.addEventListener('click', () => {
  popupNewPlace.open();
  formList.forEach(() => {
    newPlaceValidator.resetValidation();
  });
});
