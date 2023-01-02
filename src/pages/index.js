import Card from '../components/Card.js';
import { initialCards } from '../utils/data.js';
import FormValidator from '../components/FormValidator.js';
import { btnEdit, btnAdd, cardTemplate, cardList, validationConfig } from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

const renderCard = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, cardTemplate, '.popup-photo', handleOpenPopup);
      const cardElement = card.renderCard();
      renderCard.addItem(cardElement);
    },
  },
  cardList,
);

renderCard.renderItems();

function handleOpenPopup() {
  const popupElement = new PopupWithImage(this._popupSelector);
  popupElement.open(this._link, this._name);
  popupElement.setEventListeners();
}

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

const editProfileValidator = new FormValidator(popupWithEditProfile.getForm(), validationConfig);
editProfileValidator._setEventListeners();

const newPlaceValidator = new FormValidator(popupWithNewPlace.getForm(), validationConfig);
newPlaceValidator._setEventListeners();

function createCard({ name, link }) {
  const newCard = new Card(name, link, cardTemplate, '.popup-photo', handleOpenPopup);
  const cardElement = newCard.renderCard();
  document.querySelector('.elements').prepend(cardElement);
}

btnEdit.addEventListener('click', () => {
  popupWithEditProfile.open();
  popupWithEditProfile.setInputValues(userInfo.getUserInfo());
  editProfileValidator.resetValidation();
});

btnAdd.addEventListener('click', () => {
  popupWithNewPlace.open();
  popupWithNewPlace.setInputValues({});
  newPlaceValidator.resetValidation();
});
