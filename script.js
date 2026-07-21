const form = document.getElementById("settingsForm");
const errorEl = document.getElementById("error");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(fieldId, message) {
  const el = document.getElementById(fieldId + "Error");
  if (el) el.textContent = message;
}

function clearErrors() {
  errorEl.textContent = "";
  ["name", "email", "password"].forEach((id) => showFieldError(id, ""));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  let isValid = true;

  if (!name) {
    showFieldError("name", "Name is required.");
    isValid = false;
  } else if (name.length < 2) {
    showFieldError("name", "Name must be at least 2 characters.");
    isValid = false;
  }

  if (!email) {
    showFieldError("email", "Email is required.");
    isValid = false;
  } else if (!validateEmail(email)) {
    showFieldError("email", "Please enter a valid email address.");
    isValid = false;
  }

  if (!password) {
    showFieldError("password", "Password is required.");
    isValid = false;
  } else if (password.length < 8) {
    showFieldError("password", "Password must be at least 8 characters.");
    isValid = false;
  }

  if (!isValid) {
    errorEl.textContent = "Please fix the errors above.";
    return;
  }

  // Form is valid — proceed (e.g. send to server or show success)
  errorEl.textContent = "";
  alert("Settings saved!");
});