import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://nfxjlyhhnayendgyyzeo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_hmr_cm3kO0iU9H8tH9U71w_LM37Q_R7";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Check session and hide login/register if logged in
const {
  data: { session },
} = await supabase.auth.getSession();

if (session) {
  document
    .querySelectorAll('a[href="register.html"]')
    .forEach((el) => (el.parentElement.style.display = "none"));
  document
    .querySelectorAll('a[href="Login.html"]')
    .forEach((el) => (el.parentElement.style.display = "none"));
}

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    // Login failed
    alert("Wrong email or password");
  } else {
    //Login succeeded
    const msg = document.getElementById("login-message");
    msg.textContent = "Logged in! Redirecting...";
    msg.style.display = "block";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
});
