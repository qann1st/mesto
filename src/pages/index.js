import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {
  btnEdit,
  btnAdd,
  btnAvatarEdit,
  avatarImage,
  cardTemplate,
  cardList,
  validationConfig,
} from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52/',
  headers: {
    authorization: '47016496-8e67-44e3-804c-b828c4f61e69',
    'Content-Type': 'application/json',
  },
});

const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__description',
});

const renderCard = new Section((item) => {
  const card = new Card(
    item,
    cardTemplate,
    handleOpenPopup,
    handleRemoveCardClick,
    userInfo.getId.bind(userInfo),
    (isLiked) => {
      if (isLiked) {
        api
          .removeLike(item._id)
          .then((data) => card.removeLike(data.likes.length))
          .catch((err) => console.log(err));
      } else {
        api
          .addLike(item._id)
          .then((data) => card.setLike(data.likes.length))
          .catch((err) => console.log(err));
      }
    },
  );

  const newCard = card.renderCard();
  card._likeCount.textContent = item.likes.length;
  return newCard;
}, cardList);

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([user, cards]) => {
  userInfo.setUserInfo(user);
  avatarImage.src = user.avatar;
  renderCard.addItems(cards);
});

function handleOpenPopup(link, name) {
  const popupElement = new PopupWithImage('.popup-photo');
  popupElement.open(link, name);
  popupElement.setEventListeners();
}

function handleRemoveCardClick(cardId, card) {
  const popupElement = new PopupWithConfirm('.popup-remove', (evt) => {
    evt.preventDefault();
    api
      .removeCard(cardId)
      .then(() => card.remove())
      .catch((err) => console.log(err));
    popupElement.close();
  });
  popupElement.open();
  popupElement.setEventListeners();
}

const popupWithEditProfile = new PopupWithForm('.popup-edit-profile', (evt) => {
  evt.preventDefault();
  api.setUserInfo(popupWithEditProfile._getInputValues()).then((res) => userInfo.setUserInfo(res));
  popupWithEditProfile.close();
});
popupWithEditProfile.setEventListeners();

const popupWithNewPlace = new PopupWithForm('.popup-new-place', (evt) => {
  evt.preventDefault();
  api
    .addCard(popupWithNewPlace._getInputValues())
    .then((item) => renderCard.addItem(item))
    .then(() => popupWithNewPlace.close());
});
popupWithNewPlace.setEventListeners();

const popupWithAvatar = new PopupWithForm('.popup-avatar', (evt) => {
  evt.preventDefault();
  api.setUserAvatar({ avatar: popupWithAvatar._getInputValues().link });
  avatarImage.src = popupWithAvatar._getInputValues().link;
  popupWithAvatar.close();
});
popupWithAvatar.setEventListeners();

const editProfileValidator = new FormValidator(popupWithEditProfile.getForm(), validationConfig);
editProfileValidator._setEventListeners();

const newPlaceValidator = new FormValidator(popupWithNewPlace.getForm(), validationConfig);
newPlaceValidator._setEventListeners();

const avatarValidator = new FormValidator(popupWithAvatar.getForm(), validationConfig);
avatarValidator._setEventListeners();

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

btnAvatarEdit.addEventListener('click', () => {
  popupWithAvatar.open();
  popupWithAvatar.setInputValues({});
  avatarValidator.resetValidation();
});
