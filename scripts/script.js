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
