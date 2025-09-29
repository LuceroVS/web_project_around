import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForms.js";
import FormValidator from "../components/FormValidator.js";

// Instancia de popup de formulario para editar perfil
const profilePopup = new PopupWithForm("#popupContainer", (formData) => {
  // Aquí actualizas la info del usuario en la página
  // Ejemplo:
  document.querySelector(".profile__name").textContent = formData.name;
  document.querySelector(".profile__profession").textContent = formData.job;
  profilePopup.close();
});
profilePopup.setEventListeners();

// Instancia de popup de formulario para nueva imagen
const imageFormPopup = new PopupWithForm("#popupImage", (formData) => {
  const card = new Card(
    formData.name,
    formData.link,
    "#imagesTemplate",
    handleCardClick
  );
  document.getElementById("elemenPlacesImages").prepend(card.getCardElement());
  imageFormPopup.close();
});
imageFormPopup.setEventListeners();

// Cerrar el popup al hacer clic en el "X"
const closeImageBtn = document.querySelector(".popup__content__closeimage");
if (closeImageBtn) {
  closeImageBtn.addEventListener("click", () => {
    imageFormPopup.close();
  });
}

// Instancia del popup de imagen
const imagePopup = new PopupWithImage("#popupImageModal");
imagePopup.setEventListeners();

function handleCardClick({ name, link }) {
  imagePopup.open({
    src: link,
    alt: name,
    caption: name,
  });
}

// Array de tarjetas iniciales
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

// Renderiza las tarjetas
const container = document.getElementById("elemenPlacesImages");
initialCards.forEach((cardData) => {
  const card = new Card(
    cardData.name,
    cardData.link,
    "#imagesTemplate",
    handleCardClick
  );
  container.appendChild(card.getCardElement());
});

// cerrar el popup de perfil con el "X"
const profileClose = document.querySelector(".popup__content__closed");
if (profileClose) {
  profileClose.addEventListener("click", () => {
    profilePopup.close();
  });
}

// Listener para cerrar el popup de nueva imagen con el "X"
const imageClose = document.querySelector(".popup__content-image__closed");
if (imageClose) {
  imageClose.addEventListener("click", () => {
    imageFormPopup.close();
  });
}

// Listener para cerrar el popup de imagen maximizada con el "X"
const imageBigClose = document.querySelector(".popup_image-closed");
if (imageBigClose) {
  imageBigClose.addEventListener("click", () => {
    imagePopup.close();
  });
}

// Ejemplo de cómo abrir los popups desde botones
document.getElementById("profile_edit_button").addEventListener("click", () => {
  profilePopup.open();
});
document.getElementById("image_edit_button").addEventListener("click", () => {
  imageFormPopup.open();
});

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const profileForm = document.querySelector("#popupContainer .popup__form");
const profileValidator = new FormValidator(validationConfig, profileForm);
profileValidator.enableValidation();

const imageForm = document.querySelector("#popupImage .popup__form");
const imageValidator = new FormValidator(validationConfig, imageForm);
imageValidator.enableValidation();
