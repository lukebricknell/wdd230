const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");

passwordConfirm.addEventListener("focusout", onSubmit);

function onSubmit() {
  if (password.value != passwordConfirm.value) {
    message.textContent = "Passwords do not match";
    message.style.color = "red";
    message.style.visibility = "show";
    passwordConfirm.value = "";
  } else {
    message.style.visibility = "none";
  }
}
