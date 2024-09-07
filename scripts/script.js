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

const templateImages = document.getElementById("imagesTemplate").content;

initialCards.forEach((url) => {
  const elementPLacesClone = templateImages.cloneNode(true);
  const placeNameClone = elementPLacesClone.getElementById("placeName");
  const gridImagesClone = elementPLacesClone.getElementById("gridImages");
  placeNameClone.innerHTML = url["name"];
  gridImagesClone.src = url["link"];
  gridImagesClone.dataset.target = url["name"];
  const elemenPlacesImages = document.getElementById("elemenPlacesImages");
  const idClone = elementPLacesClone.getElementById("placeElemenImages");
  idClone.id = url["name"];
  const trashClone = elementPLacesClone.getElementById("deleteImage");
  trashClone.dataset.target = idClone.id;
  elemenPlacesImages.appendChild(elementPLacesClone);
});

let profileEditButton = document.getElementById("profile_edit_button");
profileEditButton.addEventListener("click", showPopupContainer);

function showPopupContainer() {
  let popupContainerForm = document.getElementById("popupContainer");
  popupContainerForm.style.display = "block";
  let popupForm = document.getElementById("popup");
  popupForm.style.display = "block";
}

let profileClosePopupContainer = document.getElementById("popupContainerclose");
profileClosePopupContainer.addEventListener("click", closePopupContainer);

function closePopupContainer() {
  let popupContainerForm = document.getElementById("popupContainer");
  popupContainerForm.style.display = "none";
  let popupForm = document.getElementById("popup");
  popupForm.style.display = "none";
}

let profileSavePopupContainer = document.getElementById("save");
profileSavePopupContainer.addEventListener("click", saveModify);

function saveModify() {
  let profileNameModify = document.getElementById("popupContainerName");
  let profileNameModifyValue = profileNameModify.value;
  let profileProfessionModify = document.getElementById(
    "popupContainerProfession"
  );
  let profileProfessionModifyValue = profileProfessionModify.value;
  let popupContainerForm = document.getElementById("popupContainer");
  popupContainerForm.style.display = "none";
  let profileInfoName = document.getElementById("profileInfoName");
  let profileInfoJob = document.getElementById("profileInfoJob");
  profileInfoName.innerHTML = profileNameModifyValue;
  profileInfoJob.innerHTML = profileProfessionModifyValue;
  let popupForm = document.getElementById("popup");
  popupForm.style.display = "none";
}

let imageEditButton = document.getElementById("image_edit_button");
imageEditButton.addEventListener("click", showPopupImage);

function showPopupImage() {
  let popupImagenAdd = document.getElementById("popupImage");
  popupImagenAdd.style.display = "block";
  let popupImage = document.getElementById("popupBackgroundImage");
  popupImage.style.display = "block";
}

let PopupAddImageClose = document.getElementById("popupImageClose");
PopupAddImageClose.addEventListener("click", closePopupImage);

function closePopupImage() {
  let popupImagenAdd = document.getElementById("popupImage");
  popupImagenAdd.style.display = "none";
  let popupImage = document.getElementById("popupBackgroundImage");
  popupImage.style.display = "none";
}

let PopupAddImageSave = document.getElementById("saveImage");
PopupAddImageSave.addEventListener("click", saveModifyImage);

function saveModifyImage() {
  let popupSaveImage = document.getElementById("popupImage");
  popupSaveImage.style.display = "none";
  let popupBackgrountImage = document.getElementById("popupBackgroundImage");
  popupBackgrountImage.style.display = "none";

  let imageNameModify = document.getElementById("popupImageName");
  let imageNameModifyValue = imageNameModify.value;
  let imageModify = document.getElementById("popupImageDirection");
  let imageDirectionModifyValue = imageModify.value;
  const templateImages = document.getElementById("imagesTemplate").content;
  const elementPLacesClone = templateImages.cloneNode(true);
  const placeNameClone = elementPLacesClone.getElementById("placeName");
  const gridImagesClone = elementPLacesClone.getElementById("gridImages");
  placeNameClone.innerHTML = imageNameModifyValue;
  gridImagesClone.src = imageDirectionModifyValue;
  gridImagesClone.dataset.target = imageNameModifyValue;
  const elemenPlacesImages = document.getElementById("elemenPlacesImages");
  const likeClone = elementPLacesClone.getElementById("imageWhiteLike");
  likeClone.addEventListener(
    "click",
    function () {
      changeColorLike(likeClone);
    },
    false
  );
  const removeImageClone = elementPLacesClone.getElementById("deleteImage");
  const idClone = elementPLacesClone.getElementById("placeElemenImages");
  idClone.id = imageNameModifyValue;
  removeImageClone.dataset.target = idClone.id;
  removeImageClone.addEventListener(
    "click",
    function () {
      removeImages(removeImageClone);
    },
    false
  );
  gridImagesClone.addEventListener(
    "click",
    function () {
      displayPlaceImage(gridImagesClone);
    },
    false
  );
  elemenPlacesImages.prepend(elementPLacesClone);
  imageNameModify.value = "";
  imageModify.value = "";
}

let deleteImageButton = document.querySelectorAll(".element-place-data__trash");

deleteImageButton.forEach(function (buttonTrashImage) {
  buttonTrashImage.addEventListener(
    "click",
    function () {
      removeImages(buttonTrashImage);
    },
    false
  );
});

function removeImages(buttonTrashImage) {
  const elementPlaceId = buttonTrashImage.getAttribute("data-target");
  const removePlaceElemenImages = document.getElementById(elementPlaceId);
  removePlaceElemenImages.remove();
}

let buttonLikeWhite = document.querySelectorAll(".element-place-data__like");

buttonLikeWhite.forEach(function (colorChange) {
  colorChange.addEventListener(
    "click",
    function () {
      changeColorLike(colorChange);
    },
    false
  );
});

function changeColorLike(colorChange) {
  const currentColor = colorChange.getAttribute("data-target");
  if (currentColor === "white") {
    colorChange.src = "images/black_like.svg";
    colorChange.dataset.target = "black";
  } else {
    colorChange.src = "images/like.png";
    colorChange.dataset.target = "white";
  }
}

const placesImages = document.querySelectorAll(".element-place__photo");

placesImages.forEach(function (placeImage) {
  placeImage.addEventListener(
    "click",
    function () {
      displayPlaceImage(placeImage);
    },
    false
  );
});

function displayPlaceImage(placeImage) {
  const srcUrl = placeImage.src;
  const imageLookBig = document.getElementById("imageLookBig");
  imageLookBig.src = srcUrl;
  const openImage = document.getElementById("openImage");
  openImage.style.display = "block";
  const nameImageLookBig = document.getElementById("nameImageLookBig");
  const nameImageLookBigValue = placeImage.getAttribute("data-target");
  nameImageLookBig.innerHTML = nameImageLookBigValue;
  let blackBackgrountImage = document.getElementById("blackBackgrountImage");
  blackBackgrountImage.style.display = "block";
}
const openImageClose = document.getElementById("openImageClose");

openImageClose.addEventListener("click", closeBigImage);

function closeBigImage() {
  let openImage = document.getElementById("openImage");
  openImage.style.display = "none";
  let blackBackgrountImage = document.getElementById("blackBackgrountImage");
  blackBackgrountImage.style.display = "none";
}
