profileEditButton = document.getElementById("profile_edit_button");
profileEditButton.addEventListener("click", showModify);

function showModify() {
  modifyForm = document.getElementById("modify");
  page = document.getElementById("page");
  modifyForm.style.display = "block";
}

profileCloseModify = document.getElementById("close");
profileCloseModify.addEventListener("click", closeModify);

function closeModify() {
  modifyForm = document.getElementById("modify");
  modifyForm.style.display = "none";
}

profileSaveModify = document.getElementById("save");
profileSaveModify.addEventListener("click", saveModify);

function saveModify() {
  profileNameModify = document.getElementById("nameModify");
  profileNameModifyValue = profileNameModify.value;
  profileProfessionModify = document.getElementById("professionModify");
  profileProfessionModifyValue = profileProfessionModify.value;
  modifyForm = document.getElementById("modify");
  modifyForm.style.display = "none";
  profileInfoName = document.getElementById("profileInfoName");
  profileInfoJob = document.getElementById("profileInfoJob");
  profileInfoName.innerHTML = profileNameModifyValue;
  profileInfoJob.innerHTML = profileProfessionModifyValue;
}
