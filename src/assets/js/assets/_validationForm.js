export default function validationForm() {
  const errors = {
    name: {
      pattern: "[A-Za-z]{3}",
      messsage: "El nombre debe contener solo letras y 3 digitos",
    },

    surname: {
      pattern: "[A-Za-z]{3}",
      messsage: "El apellido debe contener solo letras y 3 digitos",
    },
  };

  document.addEventListener("submit", (event) => {
    event.preventDefault();

    const $form = event.target;

    const $formFields = $form.querySelectorAll(".form__field");

    $formFields.forEach((field) => {
      const input = field.querySelector("input");

      const pattern = new RegExp(errors[input.name].pattern);

      const $span = document.createElement("span");
      $span.innerText = errors[input.name].messsage;

      if (!pattern.test(input.value)) {
        field.insertAdjacentElement("beforebegin", $span);
      } else {
      }
    });
  });
}
