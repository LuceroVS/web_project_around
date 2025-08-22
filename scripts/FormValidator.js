class FormValidator {
  #config;
  #formElement;
  #inputList;
  #buttonElement;

  constructor(config, formElement) {
    this.#config = config;
    this.#formElement = formElement;
    this.#inputList = Array.from(
      this.#formElement.querySelectorAll(this.#config.inputSelector)
    );
    this.#buttonElement = this.#formElement.querySelector(
      this.#config.submitButtonSelector
    );
  }

  // Método privado para mostrar el error
  #showInputError(inputElement) {
    const errorElement = this.#formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this.#config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.#config.errorClass);
  }

  // Método privado para ocultar el error
  #hideInputError(inputElement) {
    const errorElement = this.#formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this.#config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this.#config.errorClass);
  }

  // Método privado para comprobar la validez de un campo
  #checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this.#showInputError(inputElement);
    } else {
      this.#hideInputError(inputElement);
    }
  }

  // Método privado para cambiar el estado del botón submit
  #toggleButtonState() {
    const isFormValid = this.#inputList.every(
      (inputElement) => inputElement.validity.valid
    );
    if (isFormValid) {
      this.#buttonElement.removeAttribute("disabled");
      this.#buttonElement.classList.remove(this.#config.inactiveButtonClass);
    } else {
      this.#buttonElement.setAttribute("disabled", true);
      this.#buttonElement.classList.add(this.#config.inactiveButtonClass);
    }
  }

  // Método privado para agregar los controladores
  #setEventListeners() {
    this.#toggleButtonState();
    this.#inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.#checkInputValidity(inputElement);
        this.#toggleButtonState();
      });
    });
  }
  // Método público para limpiar el formulario y los errores
  resetValidation() {
    this.#inputList.forEach((inputElement) => {
      inputElement.value = "";
      this.#hideInputError(inputElement);
    });
    this.#toggleButtonState();
  }

  // Método público para activar la validación
  enableValidation() {
    this.#setEventListeners();
  }
}

export default FormValidator;
