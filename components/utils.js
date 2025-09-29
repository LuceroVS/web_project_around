import Card from "./Card.js";

// Abrir modal
export function openModal(modalId, backgroundId) {
  const modal = document.getElementById(modalId);
  const background = backgroundId
    ? document.getElementById(backgroundId)
    : null;
  if (modal) modal.style.display = "block";
  if (background) background.style.display = "block";
}

// Cerrar modal
export function closeModal(modalId, backgroundId) {
  const modal = document.getElementById(modalId);
  const background = backgroundId
    ? document.getElementById(backgroundId)
    : null;
  if (modal) modal.style.display = "none";
  if (background) background.style.display = "none";
}

// Evento para abrir modal desde botón
export function setOpenModalListener(buttonId, modalId, backgroundId) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", () => openModal(modalId, backgroundId));
  }
}

// Evento para cerrar modal desde botón
export function setCloseModalListener(buttonId, modalId, backgroundId) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", () => closeModal(modalId, backgroundId));
  }
}

// Evento para cerrar modal al hacer click en el fondo
export function setOverlayCloseListener(overlayId, closeCallback) {
  const overlay = document.getElementById(overlayId);
  if (overlay) {
    overlay.addEventListener("click", function (evt) {
      if (evt.target === overlay) {
        closeCallback();
      }
    });
  }
}

// Evento para cerrar modales con Escape
export function setEscapeCloseListener(closeCallbacks) {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closeCallbacks.forEach((fn) => fn());
    }
  });
}

// Controlador para guardar cambios de perfil
export function saveModify() {
  let profileNameModify = document.getElementById("popupContainerName");
  let profileNameModifyValue = profileNameModify.value;
  let profileProfessionModify = document.getElementById(
    "popupContainerProfession"
  );
  let profileProfessionModifyValue = profileProfessionModify.value;
  let profileInfoName = document.getElementById("profileInfoName");
  let profileInfoJob = document.getElementById("profileInfoJob");
  profileInfoName.innerHTML = profileNameModifyValue;
  profileInfoJob.innerHTML = profileProfessionModifyValue;
  closeModal("popupContainer", "popupBackgroundProfile");
}

// Controlador para guardar nueva imagen
export function saveModifyImage() {
  let imageNameModify = document.getElementById("popupImageName");
  let imageNameModifyValue = imageNameModify.value;
  let imageModify = document.getElementById("popupImageDirection");
  let imageDirectionModifyValue = imageModify.value;
  const elemenPlacesImages = document.getElementById("elemenPlacesImages");
  const card = new Card(
    imageNameModifyValue,
    imageDirectionModifyValue,
    "#imagesTemplate"
  );
  elemenPlacesImages.prepend(card.getCardElement());
  closeModal("popupImage", "popupBackgroundImage");
  imageNameModify.value = "";
  imageModify.value = "";
}

// Controlador para mostrar el modal de edición de perfil
export function showPopupContainer(
  saveProfileId,
  inputNameId,
  inputProfessionId
) {
  const saveProfile = document.getElementById(saveProfileId);
  const formInputName = document.getElementById(inputNameId);
  const formInputProfession = document.getElementById(inputProfessionId);
  if (saveProfile) {
    saveProfile.setAttribute("disabled", true);
    saveProfile.classList.add("input__btn_disabled");
  }
  if (formInputName) formInputName.value = "";
  if (formInputProfession) formInputProfession.value = "";
  openModal("popupContainer", "popupBackgroundProfile");
}

// Controlador para mostrar el modal de agregar imagen
export function showPopupImage(saveImageId, inputNameId, inputDirectionId) {
  const saveImage = document.getElementById(saveImageId);
  const formInputImageName = document.getElementById(inputNameId);
  const formInputImageDirection = document.getElementById(inputDirectionId);
  if (saveImage) {
    saveImage.setAttribute("disabled", true);
    saveImage.classList.add("input__btn_disabled");
  }
  if (formInputImageName) formInputImageName.value = "";
  if (formInputImageDirection) formInputImageDirection.value = "";
  openModal("popupImage", "popupBackgroundImage");
}

// Controlador para eliminar tarjeta
export function removeImages(buttonTrashImage) {
  const elementPlaceId = buttonTrashImage.getAttribute("data-target");
  const removePlaceElemenImages = document.getElementById(elementPlaceId);
  if (removePlaceElemenImages) removePlaceElemenImages.remove();
}

// Controlador para cambiar color del botón like
export function changeColorLike(colorChange) {
  const currentColor = colorChange.getAttribute("data-target");
  if (currentColor === "white") {
    colorChange.src = "images/black_like.svg";
    colorChange.dataset.target = "black";
  } else {
    colorChange.src = "images/like.png";
    colorChange.dataset.target = "white";
  }
}

// Controlador para mostrar imagen grande
export function displayPlaceImage(placeImage) {
  const srcUrl = placeImage.src;
  const imageLookBig = document.getElementById("imageLookBig");
  if (imageLookBig) imageLookBig.src = srcUrl;
  openModal("openImage", "blackBackgrountImage");
  const nameImageLookBig = document.getElementById("nameImageLookBig");
  const nameImageLookBigValue = placeImage.getAttribute("data-target");
  if (nameImageLookBig) nameImageLookBig.innerHTML = nameImageLookBigValue;
}

// Controlador para cerrar imagen grande
export function closeBigImage() {
  closeModal("openImage", "blackBackgrountImage");
}

// Utilidad para cambiar el estado del botón submit
export function setSubmitButtonState(isFormValid, button) {
  if (isFormValid) {
    button.removeAttribute("disabled");
    button.classList.remove("input__btn_disabled");
  } else {
    button.setAttribute("disabled", true);
    button.classList.add("input__btn_disabled");
  }
}
