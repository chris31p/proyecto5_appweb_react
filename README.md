# PROYECTO 5: Aplicación Web con React

DESCRIPCIÓN:
Construir una aplicación web con React que consuma datos de una API pública. Los datos que obtenga de la API se mostrarán en una interfaz de usuario.

Este proyecto es una aplicación web interactiva desarrollada con React + Vite y Material-UI (MUI). Su propósito principal es mostrar información detallada de los personajes del universo de Harry Potter utilizando datos obtenidos de una API pública. 
Los usuarios pueden explorar y navegar entre diferentes personajes entre ellos constan el "Staff" y "Estudiantes" de Hogwarts y sus "Casas". La aplicación también permite acceder a una vista detallada de cada personaje.

CARACTERÍSTICAS:
- Consumo de API: Obtiene datos de la API de Harry Potter (https://hp-api.herokuapp.com/).
- Interfaz moderna: Utiliza Material-UI (MUI) para componentes estilizados.
- Navegación dinámica: Integración con React Router para una experiencia de navegación fluida.
- Paginación: Visualización de personajes en grupos de 10 por página.
- Soporte multilenguaje: Traducción de términos clave como "pure-blood" a "Sangre pura".
- Vista responsiva: Optimizada para dispositivos móviles y escritorio.

TECNOLOGÍAS UTILIZADAS:

* React: Framework para construir interfaces de usuario.
* Material-UI (MUI): Framework para componentes estilizados.
* React Router: Navegación en una SPA.
* JavaScript: Lógica del cliente.
* API pública de Harry Potter: Fuente de datos de personajes.

INSTALACIÓN:

1) Clonar el repositorio
  git clone https://github.com/chris31p/proyecto5_appweb_react.git
  cd <NOMBRE-DEL-PROYECTO>

2) Instalar dependencias
  Asegúrate de tener Node.js instalado. Luego, ejecuta:
  -> npm install

3) Iniciar el servidor de desarrollo con el comando:
  -> npm run dev
  La aplicación estará disponible en: localhost:5173

4) Despliegue
   Mostrar el proyecto a través de una URL, usando un servicio de terceros en este caso Render.

# Resultados de la API

HOME:
![image](https://github.com/user-attachments/assets/61d4063d-9d21-4717-b255-45d5e7e9c212)

PERSONAJES:
![image](https://github.com/user-attachments/assets/f6c2c4a8-49db-4d39-a56c-28b38fafa47d)
![image](https://github.com/user-attachments/assets/4b49e20c-dfcf-40aa-9f58-7d4b90539026)

DETALLES DE UN PERSONAJE:
![image](https://github.com/user-attachments/assets/fd4f2e42-865e-4346-b1f7-9352f1f5473b)
![image](https://github.com/user-attachments/assets/dffa15b0-bbaa-4726-87d3-3c253ee80839)


CASAS:
![image](https://github.com/user-attachments/assets/f8e4eeaa-5b5c-4380-b8f4-a88aed807df4)

ABOUT:
![image](https://github.com/user-attachments/assets/5b9eef57-aa42-4be6-a6fd-bb216487050b)

# DESPLIEGUE EN RENDER
Desplegar la API en Render.com como un sitio estático.
  Para ello modificamos el archivo vite.config.js ya que Render necesita una "base" para crear el despliegue:
![image](https://github.com/user-attachments/assets/7912d066-b40e-4b2f-aa02-53ed6c4866d7)

  En la configuración de Render colocamos:
    - Build Command: npm run build
    - Publish Directory: dist

![image](https://github.com/user-attachments/assets/43915850-203e-4368-8a96-beabbfe889cf)

![image](https://github.com/user-attachments/assets/054f7f27-4ff6-4a7b-8eb5-bbe80966df16)

# RESULTADO: 
LINK -> https://proyecto5-appweb-react.onrender.com/
![image](https://github.com/user-attachments/assets/033bdc1e-4ada-4339-88ec-44c7e6665996)

![image](https://github.com/user-attachments/assets/383c1855-e615-464f-a5c1-ba6162699286)
