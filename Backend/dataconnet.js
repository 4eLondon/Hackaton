import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Connect database
const SUPABASE_URL = "https://nfxjlyhhnayendgyyzeo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_hmr_cm3kO0iU9H8tH9U71w_LM37Q_R7";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
// Handle form submission
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const remember = document.getElementById("remember").checked;
// 
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
