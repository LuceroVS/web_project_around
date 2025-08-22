import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  openModal,
  closeModal,
  setOpenModalListener,
  setCloseModalListener,
  setOverlayCloseListener,
  setEscapeCloseListener,
  saveModify,
  saveModifyImage,
  showPopupContainer,
  showPopupImage,
  removeImages,
  changeColorLike,
  displayPlaceImage,
  closeBigImage,
  setSubmitButtonState,
} from "./utils.js";

const initialCards = [
  {
    name: "Alaska",
    link: "https://images.unsplash.com/photo-1673114819432-1aa36952dd3e?q=80&w=2602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Parque nacional del Gran Cañón",
    link: "https://images.unsplash.com/photo-1585022724447-cb15e87b30be?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Miami Beach",
    link: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Manhattan Beach",
    link: "https://images.unsplash.com/photo-1696526291759-a5c3f60a46ef?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mendenhall Glacier",
    link: "https://images.unsplash.com/photo-1517103068540-6a70e8c0022f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hollywood Hills",
    link: "https://images.unsplash.com/photo-1594663805807-29a7cc1847c0?q=80&w=2582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const elemenPlacesImages = document.getElementById("elemenPlacesImages");
initialCards.forEach((cardData) => {
  const card = new Card(cardData.name, cardData.link, "#imagesTemplate");
  elemenPlacesImages.appendChild(card.getCardElement());
});

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "input__btn_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const profileForm = document.getElementById("popupContainer");
const profileValidator = new FormValidator(validationConfig, profileForm);
profileValidator.enableValidation();

const imageForm = document.getElementById("popupImage");
const imageValidator = new FormValidator(validationConfig, imageForm);
imageValidator.enableValidation();

setOpenModalListener(
  "profile_edit_button",
  "popupContainer",
  "popupBackgroundProfile"
);
document.getElementById("profile_edit_button").addEventListener("click", () => {
  profileValidator.resetValidation();
});

setOpenModalListener("image_edit_button", "popupImage", "popupBackgroundImage");
document.getElementById("image_edit_button").addEventListener("click", () => {
  imageValidator.resetValidation();
});
// Cierre por botón de perfil
setCloseModalListener(
  "popupContainerclose",
  "popupContainer",
  "popupBackgroundProfile"
);
document.getElementById("popupContainerclose").addEventListener("click", () => {
  profileValidator.resetValidation();
});

// Cierre por botón de imagen
setCloseModalListener("popupImageClose", "popupImage", "popupBackgroundImage");
document.getElementById("popupImageClose").addEventListener("click", () => {
  imageValidator.resetValidation();
});

// Cierre por botón de imagen grande
setCloseModalListener("openImageClose", "openImage", "blackBackgrountImage");
document.getElementById("openImageClose").addEventListener("click", () => {
  closeBigImage();
});
// Cierre por overlay
setOverlayCloseListener("popupBackgroundProfile", () => {
  closeModal("popupContainer", "popupBackgroundProfile");
  profileValidator.resetValidation();
});
setOverlayCloseListener("blackBackgrountImage", closeBigImage);

setOverlayCloseListener("popupBackgroundImage", () => {
  closeModal("popupImage", "popupBackgroundImage");
  imageValidator.resetValidation();
});

// Cierre por Escape
setEscapeCloseListener([
  () => {
    closeModal("popupContainer", "popupBackgroundProfile");
    profileValidator.resetValidation();
  },
  () => {
    closeModal("popupImage", "popupBackgroundImage");
    imageValidator.resetValidation();
  },
  closeBigImage,
]);

// Submit de formularios
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  saveModify();
});
imageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  saveModifyImage();
});
