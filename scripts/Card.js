export default class Card {
  constructor(name, link, template, popupPhoto, popupImage, popupPhotoBtnClose) {
    this._template = template;
    this._name = name;
    this._link = link;
    this._popupImage = popupImage;
    this._popupPhotoBtnClose = popupPhotoBtnClose;
    this._popupPhoto = popupPhoto;
  }

  _getTemplate() {
    const cardElement = this._template.content
      .querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _cardLike() {
    this._element
      .querySelector(".element__like")
      .classList.toggle("element__like_active");
  }

  _cardDelete() {
    this._element.remove();
  }

  _handleOpenPopup() {
    this._popupImage.src = this._link;
    document.querySelector(".popup__image-description").textContent =
      this._name;
    this._popupPhoto.classList.add("popup__opened");
  }

  _handleClosePopup() {
    this._popupPhoto.classList.remove("popup__opened");
  }

  renderCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._cardTitle = this._element.querySelector(".element__title");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._deleteCard = this._element.querySelector(".element__remove");
    this._likeCard = this._element.querySelector(".element__like");
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => this._cardDelete());
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => this._handleOpenPopup());
    this._popupPhotoBtnClose.addEventListener("click", () =>
      this._handleClosePopup()
    );
    this._element
      .querySelector(".element__like")
      .addEventListener("click", () => this._cardLike());
  }
}
