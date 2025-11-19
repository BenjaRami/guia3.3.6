# Proyecto Login con Reqres  
Guía 3.3.6 – Desarrollo de Aplicaciones y Conexiones API

Aplicación web que implementa un flujo de autenticación real consumiendo la API pública **Reqres**.  
El proyecto demuestra integración API, manejo de token, uso de fetch, manejo de errores y despliegue en entorno web.

---

## 🚀 Funcionalidades principales

- **Login real** contra la API de Reqres (`POST /api/login`)
- **Manejo de token** al iniciar sesión
- **Protección de funcionalidad**: no se pueden cargar usuarios sin haber iniciado sesión
- **Listar usuarios** tras login (`GET /api/users?page=2`)
- **Imágenes de perfil** incluidas desde la API
- **Mensajes dinámicos** de éxito y error
- **Manejo de red con cabeceras especiales** (x-api-key) según restricciones del entorno

---

## 🧰 Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript (Fetch API)  
- API Reqres (https://reqres.in)  
- Live Server / GitHub Pages  

---

## 📡 Endpoints consumidos
POST https://reqres.in/api/login

{
"email": "eve.holt@reqres.in
",
"password": "cityslicka"
}


### 👥 Usuarios  


GET https://reqres.in/api/users?page=2


---

## 🖼 Vista previa de usuarios cargados
(Agrega capturas aquí si la profe las pide)

---

## ▶ Cómo ejecutar el proyecto localmente

### 1. Clonar el repositorio


git clone https://github.com/BenjaRami/guia3.3.6.git

cd guia3.3.6


### 2. Abrir con Live Server  
Recomendado:
- Abrir en **VS Code**
- Clic derecho → **Open with Live Server**

### 3. Usar la aplicación  
1. Iniciar sesión con las credenciales predefinidas  
2. Cargar lista de usuarios con foto y datos  
3. Visualizar resultados de la API

---

## 🌐 Deploy con GitHub Pages  
Una vez activado en Settings → Pages:

**URL del proyecto:**  
https://BenjaRami.github.io/guia3.3.6/

---

## 📁 Estructura del proyecto



guia3.3.6/
│── index.html
│── app.js
│── styles.css
└── README.md


---

## ✨ Autor  
Benjamín Ramírez Garrido  
Duoc UC – Servicios Digitales / Desarrollo de Aplicaciones  
2025


### 🔐 Login  
