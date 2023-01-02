export default class Card {
  constructor(name, link, template, popupSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = template;
    this._popupSelector = popupSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = this._template.content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _cardLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _cardDelete() {
    this._element.remove();
  }

  _handleOpenPopup() {
    this._handleCardClick();
  }

  renderCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._deleteCard = this._element.querySelector('.element__delete');
    this._likeCard = this._element.querySelector('.element__like');
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._deleteCard.addEventListener('click', () => this._cardDelete());
    this._cardImage.addEventListener('click', () => this._handleOpenPopup());
    this._likeCard.addEventListener('click', () => this._cardLike());
  }
}
