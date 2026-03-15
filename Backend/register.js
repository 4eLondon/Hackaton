import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://nfxjlyhhnayendgyyzeo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_hmr_cm3kO0iU9H8tH9U71w_LM37Q_R7";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

document
  .getElementById("register-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const confirmPassword = document.getElementById("confirm").value.trim();
    const farmType = document.getElementById("r-farm").value;
    const phone = document.getElementById("phone").value.trim();

    // Validate farm type
    if (!farmType) {
      alert("Please select a farm type.");
      document.getElementById("r-farm").focus();
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      document.getElementById("confirm").value = "";
      document.getElementById("confirm").focus();
      return;
    }

    // Sign up with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      // Sign up failed
      alert("Error: " + error.message);
    } else {
      // Sign up succeeded
      await supabase.from("User").insert({
        fullname: name,
        phone: phone,
        email: email,
        farm_type: farmType,
      });

      const msg = document.getElementById("register-only-msg");
      msg.textContent = "Account created successfully! Redirecting to login...";
      msg.style.display = "block";
      e.target.reset();

      setTimeout(() => {
        window.location.href = "Login.html";
      }, 2000);
    }
  });
