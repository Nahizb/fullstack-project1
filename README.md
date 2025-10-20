# 🌤️ Visualización de Predicción Meteorológica

**Autor:** Nahizbeth Zerpa Alvarez  
**Correo:** nahizbeth.zerpa95@gmail.com  

## 🚀 Instrucciones para lanzar la aplicación

La aplicación web de visualización de predicción meteorológica fue desarrollada utilizando **Angular** y **TypeScript**, siguiendo un enfoque modular y basado en componentes reutilizables. El sistema integra un **backend** encargado de procesar los datos contenidos en un archivo YAML y un **frontend** dinámico que consume dichos datos y los representa visualmente mediante la librería **Chart.js**.

### 📦 Requisitos previos

- Node.js v18 o superior
- npm o yarn
- Angular CLI (`npm install -g @angular/cli`)

### 🛠️ Instalación de dependencias

1. Clonar o descargar el repositorio.
2. Instalar dependencias en cada módulo:

   ```bash
   # En la carpeta backend
   npm install

   # En la carpeta frontend
   npm install
    Backend: Ejecutar con npm run start. Expone una API REST que lee datos desde un archivo YAML.

    Frontend: Ejecutar con ng serve. Disponible en http://localhost:4200.

    Por defecto, el backend corre en el puerto 3000.
   Acceso a la aplicación

Una vez iniciados ambos servicios, se puede acceder a la interfaz desde el navegador. La visualización se actualiza automáticamente cada cinco segundos, mostrando:

    El último valor recibido en tiempo real.

    Un gráfico lineal que representa la evolución de la temperatura media (°C) y la energía producida (kWh) en intervalos minutales.

📊 Características destacadas

    Actualización progresiva de datos

    Visualización en tiempo real

    Representación gráfica eficiente Chart.js

    <img width="1882" height="1070" alt="Screenshot 2025-10-19 195135" src="https://github.com/user-attachments/assets/fc72ae0d-e7ce-4349-b939-d1307bfce8e3" />




    
