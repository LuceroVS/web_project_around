import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector("form");
    this._inputList = Array.from(this._form.querySelectorAll("input"));
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  open() {
    super.open();
    this._form.reset(); // Resetea los campos cada vez que se abre
    const button = this._form.querySelector(".popup__button");
    button.disabled = true; // Bloquea el botón cada vez que se abre
    button.classList.add("popup__button_disabled");
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;
