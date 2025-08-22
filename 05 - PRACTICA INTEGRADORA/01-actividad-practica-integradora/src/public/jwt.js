const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.value = "";
passwordInput.value = "";

form.onsubmit = async (e) => {
  try {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    if (!response.ok) throw new Error("Error en el login");
    window.location.replace("/users/current");
  } catch (error) {
    alert("Login failed!");
    window.location.reload();
  }
};
