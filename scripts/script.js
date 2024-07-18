profileEditButton = document.getElementById("profile_edit_button");
profileEditButton.addEventListener("click", showPopupContainer);

function showPopupContainer() {
  popupContainerForm = document.getElementById("popupContainer");
  popupContainerForm.style.display = "block";
  popupForm = document.getElementById("popup");
  popupForm.style.display = "block";
}

profileClosePopupContainer = document.getElementById("popupContainerclose");
profileClosePopupContainer.addEventListener("click", closePopupContainer);

function closePopupContainer() {
  popupContainerForm = document.getElementById("popupContainer");
  popupContainerForm.style.display = "none";
  popupForm = document.getElementById("popup");
  popupForm.style.display = "none";
}

profileSavePopupContainer = document.getElementById("save");
profileSavePopupContainer.addEventListener("click", saveModify);

function saveModify() {
  profileNameModify = document.getElementById("popupContainerName");
  profileNameModifyValue = profileNameModify.value;
  profileProfessionModify = document.getElementById("popupContainerProfession");
  profileProfessionModifyValue = profileProfessionModify.value;
  popupContainerForm = document.getElementById("popupContainer");
  popupContainerForm.style.display = "none";
  profileInfoName = document.getElementById("profileInfoName");
  profileInfoJob = document.getElementById("profileInfoJob");
  profileInfoName.innerHTML = profileNameModifyValue;
  profileInfoJob.innerHTML = profileProfessionModifyValue;
  popupForm = document.getElementById("popup");
  popupForm.style.display = "none";
}
