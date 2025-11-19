const form = document.getElementById("login-form");
const mensaje = document.getElementById("mensaje");
const btnUsuarios = document.getElementById("btnUsuarios");
const usuariosDiv = document.getElementById("usuarios");

let token = null;

// Login
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  mensaje.textContent = "Iniciando sesión...";
  mensaje.style.color = "black";

  try {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"   // Header exigido por tu red
      },
      body: JSON.stringify({ email, password: pass })
    });

    const data = await res.json();

    if (!res.ok) {
      mensaje.textContent = "Error: " + data.error;
      mensaje.style.color = "red";
      return;
    }

    token = data.token;
    mensaje.textContent = "Login exitoso. Token: " + token;
    mensaje.style.color = "green";
    btnUsuarios.disabled = false;

  } catch (err) {
    mensaje.textContent = "Error de conexión";
    mensaje.style.color = "red";
  }
});

// Cargar usuarios
btnUsuarios.addEventListener("click", async () => {
  if (!token) {
    alert("Debes iniciar sesión primero");
    return;
  }

  usuariosDiv.innerHTML = "Cargando usuarios...";

  try {
    const res = await fetch("https://reqres.in/api/users?page=2", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "x-api-key": "reqres-free-v1"   // Lo mismo aquí
      }
    });

    const data = await res.json();

    let html = "<ul>";
data.data.forEach(u => {
  html += `
    <li style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
      <img src="${u.avatar}" alt="${u.first_name}" width="48" height="48" style="border-radius:50%;">
      <span>
        <strong>${u.first_name} ${u.last_name}</strong><br>
        ${u.email}
      </span>
    </li>
  `;
});
html += "</ul>";


    usuariosDiv.innerHTML = html;

  } catch (error) {
    usuariosDiv.innerHTML = `<p style="color:red">Error al cargar usuarios</p>`;
  }
});

