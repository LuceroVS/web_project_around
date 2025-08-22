class Card {
  #name;
  #image;
  #templateSelector;
  #element;

  constructor(name, image, templateSelector) {
    this.#name = name;
    this.#image = image;
    this.#templateSelector = templateSelector;
    this.#element = this.#getTemplate();
    this.#setCardData();
    this.#setEventListeners();
  }

  // Método privado para obtener el template
  #getTemplate() {
    const template = document.querySelector(this.#templateSelector).content;
    return template.cloneNode(true);
  }

  // Método privado para rellenar los datos
  #setCardData() {
    const cardImg = this.#element.querySelector("#gridImages");
    const cardTitle = this.#element.querySelector("#placeName");
    cardImg.src = this.#image;
    cardImg.alt = this.#name;
    cardImg.dataset.target = this.#name;
    cardTitle.textContent = this.#name;
    // Asignar id único para eliminar
    const cardContainer = this.#element.querySelector("#placeElemenImages");
    cardContainer.id = this.#name.replace(/\s/g, "_");
    const trashBtn = this.#element.querySelector("#deleteImage");
    trashBtn.dataset.target = cardContainer.id;
  }

  // Método privado para añadir los eventos
  #setEventListeners() {
    const likeBtn = this.#element.querySelector("#imageWhiteLike");
    const trashBtn = this.#element.querySelector("#deleteImage");
    const cardImg = this.#element.querySelector("#gridImages");

    likeBtn.addEventListener("click", () => this.#handleLike(likeBtn));
    trashBtn.addEventListener("click", () => this.#handleDelete(trashBtn));
    cardImg.addEventListener("click", () => this.#handleImageClick(cardImg));
  }

  // Controlador privado para el like
  #handleLike(likeBtn) {
    if (likeBtn.dataset.target === "white") {
      likeBtn.src = "images/black_like.svg";
      likeBtn.dataset.target = "black";
    } else {
      likeBtn.src = "images/like.png";
      likeBtn.dataset.target = "white";
    }
  }

  // Controlador privado para eliminar
  #handleDelete(trashBtn) {
    const cardId = trashBtn.dataset.target;
    const card = document.getElementById(cardId);
    if (card) card.remove();
  }

  // Controlador privado para mostrar imagen grande
  #handleImageClick(cardImg) {
    const srcUrl = cardImg.src;
    const imageLookBig = document.getElementById("imageLookBig");
    imageLookBig.src = srcUrl;
    const openImage = document.getElementById("openImage");
    openImage.style.display = "block";
    const nameImageLookBig = document.getElementById("nameImageLookBig");
    nameImageLookBig.innerHTML = cardImg.dataset.target;
    let blackBackgrountImage = document.getElementById("blackBackgrountImage");
    blackBackgrountImage.style.display = "block";
  }

  // Método público para obtener el elemento card
  getCardElement() {
    return this.#element;
  }
}

export default Card;
