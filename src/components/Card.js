export default class Card {
  constructor(data, template, handleCardClick, handleRemoveCardClick, getId, likeCard) {
    this._data = data;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._handleRemoveCardClick = handleRemoveCardClick;
    this._handleLikeCard = likeCard;
    this._isLiked = Boolean(this._data.likes.find((user) => user._id === getId()));
    this._isOwner = this._data.owner._id === getId();
  }

  _getTemplate() {
    const cardElement = this._template.content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  setLike(count) {
    this._likeCard.classList.add('element__like_active');
    this._isLiked = true;
    this._likeCount.textContent = count;
  }

  removeLike(count) {
    this._likeCard.classList.toggle('element__like_active');
    this._isLiked = false;
    this._likeCount.textContent = count;
  }

  renderCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._cardTitle.textContent = this._data.name;
    this._deleteCard = this._element.querySelector('.element__delete');
    this._likeCard = this._element.querySelector('.element__like');
    this._likeCount = this._element.querySelector('.element__like_count');
    if (!this._isOwner) {
      this._deleteCard.remove();
    }
    if (this._isLiked) {
      this.setLike(this._likeCount);
    }
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._deleteCard.addEventListener('click', () => {
      this._handleRemoveCardClick(this._data._id, this._element);
    });
    this._cardImage.addEventListener('click', () =>
      this._handleCardClick(this._data.link, this._data.name),
    );
    this._likeCard.addEventListener('click', () => {
      this._handleLikeCard(this._isLiked);
    });
  }
}
