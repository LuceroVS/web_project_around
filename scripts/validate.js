function enableValidation(formSelector, inputSelector, submitButtonSelector) {
  const forms = document.querySelectorAll(formSelector);
  forms.forEach((form) => {
    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const formButton = form.querySelector(submitButtonSelector);

    function showError(input, errorMessage) {
      const errorElement = form.querySelector(`#${input.id}-error`);
      input.classList.add("input_type_error");
      if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.add("input-error_active");
      }
    }

    function hideError(input) {
      const errorElement = form.querySelector(`#${input.id}-error`);
      input.classList.remove("input_type_error");
      if (errorElement) {
        errorElement.textContent = "";
        errorElement.classList.remove("input-error_active");
      }
    }

    function checkInputValidity(input) {
      if (input.validity.valueMissing) {
        input.setCustomValidity("Por favor, rellena este campo.");
      } else if (input.type === "url" && input.validity.typeMismatch) {
        input.setCustomValidity(
          "Por favor, introduce una dirección web válida."
        );
      } else {
        input.setCustomValidity("");
      }

      if (!input.validity.valid) {
        showError(input, input.validationMessage);
      } else {
        hideError(input);
      }
    }

    function checkFormValidity() {
      const isValid = inputs.every((input) => input.validity.valid);
      if (isValid) {
        formButton.removeAttribute("disabled");
        formButton.classList.remove("input__btn_disabled");
      } else {
        formButton.setAttribute("disabled", true);
        formButton.classList.add("input__btn_disabled");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        checkInputValidity(input);
        checkFormValidity();
      });
      checkInputValidity(input);
    });

    checkFormValidity();
  });
}

enableValidation(".popup__form", ".popup__input", ".popup__button");
enableValidation(".form-image", ".popup__input", ".popup__button");
