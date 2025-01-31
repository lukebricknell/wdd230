const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const message = document.querySelector("#message");
const rangeAmt = document.querySelector("#range-amt");
const range = document.querySelector("#range");

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

range.addEventListener("input", (event) => {
  rangeAmt.textContent = event.target.value;
});
