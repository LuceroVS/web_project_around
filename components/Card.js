class Card {
  constructor(name, image, templateSelector, handleCardClick) {
    this._name = name;
    this._image = image;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._setCardData();
    this._setEventListeners();
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector).content;
    // Clona el fragmento y devuelve el primer hijo (el div de la tarjeta)
    return template.cloneNode(true).firstElementChild;
  }

  _setCardData() {
    const cardImg = this._element.querySelector("#gridImages");
    const cardTitle = this._element.querySelector("#placeName");
    cardImg.src = this._image;
    cardImg.alt = this._name;
    cardTitle.textContent = this._name;
  }

  _setEventListeners() {
    // Like
    const likeBtn = this._element.querySelector("#imageWhiteLike");
    likeBtn.addEventListener("click", () => {
      if (likeBtn.dataset.target === "white") {
        likeBtn.src = "images/black_like.svg";
        likeBtn.dataset.target = "black";
      } else {
        likeBtn.src = "images/like.png";
        likeBtn.dataset.target = "white";
      }
    });

    // Trash (eliminar)
    const trashBtn = this._element.querySelector("#deleteImage");
    trashBtn.addEventListener("click", () => {
      this._element.remove();
    });

    // Imagen grande
    const cardImg = this._element.querySelector("#gridImages");
    cardImg.addEventListener("click", () =>
      this._handleCardClick({ name: this._name, link: this._image })
    );
  }

  getCardElement() {
    return this._element;
  }
}

export default Card;
