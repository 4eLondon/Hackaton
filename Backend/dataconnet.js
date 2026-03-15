import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Connect database
const SUPABASE_URL = "https://nfxjlyhhnayendgyyzeo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_hmr_cm3kO0iU9H8tH9U71w_LM37Q_R7";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

const loginForm = document.getElementById("login-form");
const forgotLink = document.getElementById("forgot-link");
const forgotModal = document.getElementById("forgot-modal");
const forgotClose = document.getElementById("forgot-close");
const forgotForm = document.getElementById("forgot-form");
const forgotMessage = document.getElementById("forgot-message");

function openModal(modal) {
  if (!modal) return;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

if (forgotLink && forgotModal) {
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(forgotModal);
    forgotMessage.style.display = "none";
    forgotForm.reset();
  });
}

if (forgotClose && forgotModal) {
  forgotClose.addEventListener("click", () => closeModal(forgotModal));
}

if (forgotForm) {
  forgotForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    forgotMessage.style.display = "none";

    const email = document.getElementById("forgot-email").value.trim();
    const newPassword = document.getElementById("forgot-password").value.trim();
    const confirmPassword = document.getElementById("forgot-confirm").value.trim();

    if (!email || !newPassword || !confirmPassword) {
      forgotMessage.textContent = "Please fill in all fields.";
      forgotMessage.style.display = "block";
      forgotMessage.style.color = "#dc2626";
      return;
    }

    if (newPassword.length < 8) {
      forgotMessage.textContent = "New password must be at least 8 characters.";
      forgotMessage.style.display = "block";
      forgotMessage.style.color = "#dc2626";
      return;
    }

    if (newPassword !== confirmPassword) {
      forgotMessage.textContent = "Passwords do not match. Please retry.";
      forgotMessage.style.display = "block";
      forgotMessage.style.color = "#dc2626";
      return;
    }

    // Simulated reset/update flow for demo; in production call backend endpoint.
    forgotMessage.textContent =
      "Password reset successful. You can now log in with your updated password.";
    forgotMessage.style.display = "block";
    forgotMessage.style.color = "#047857";

    setTimeout(() => {
      closeModal(forgotModal);
      forgotForm.reset();
    }, 1700);
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("remember").checked;

    const { error } = await supabase
      .from("User")
      .insert({ email, password, remember });

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("User added successfully!");
      e.target.reset();
    }
  });
}

