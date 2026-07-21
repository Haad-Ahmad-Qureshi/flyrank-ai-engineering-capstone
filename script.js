document.getElementById("settingsForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("error").innerText = "";
});
const form = document.getElementById("settingsForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function showError(errorElement, message) {
  errorElement.textContent = message;
}
function clearError(errorElement) {
  errorElement.textContent = "";
}
function validateName() {
  if (nameInput.value.trim() === "") {
    showError(nameError, "Name is required.");
    return false;
  }
  clearError(nameError);
  return true;
}
function validateEmail() {
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailError, "Please enter a valid email address.");
    return false;
  }
  clearError(emailError);
  return true;
}
function validatePassword() {
  if (passwordInput.value.length < 6) {
    showError(passwordError, "Password must be at least 6 characters.");
    return false;
  }
  clearError(passwordError);
  return true;
}
function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  return isNameValid && isEmailValid && isPasswordValid;
}
form.addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);