# 🧰 Toolbox Project

Este proyecto está dividido en dos partes principales:

- **API (Backend):** Carpeta `api/`
- **Frontend (Cliente):** Carpeta `client/frontend/`

---

## 🚀 Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión **16** o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## ⚙️ Configuración del Backend

1. Entra en la carpeta del backend:
   ```bash
   cd api
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` basado en `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Llena el archivo `.env` con los siguientes valores:
   ```env
   TOOLBOX_BASE_URL=https://echo-serv.tbxnet.com/v1/secret
   TOOLBOX_API_KEY=aSuperSecretKey
   ```

5. Inicia el servidor:
   ```bash
   npm start
   ```

Por defecto, el backend debería correr en:
```
http://localhost:3000
```

---

## 💻 Configuración del Frontend

1. Abre otra terminal y entra en la carpeta del frontend:
   ```bash
   cd client/frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

Por defecto, el frontend se servirá en:
```
http://localhost:5173
```

---

## 🧪 Tests

### Backend:
```bash
cd api
npm test
```

### Frontend:
```bash
cd client/frontend
npm test
```

---

## 🧩 Tecnologías principales

- **Backend:** Node.js, Express  
- **Frontend:** React + Vite  
- **Testing:** Jest, Testing Library  

---

## 🏁 Comandos útiles

| Acción | Comando |
|--------|----------|
| Instalar dependencias backend | `cd api && npm install` |
| Iniciar backend | `cd api && npm start` |
| Instalar dependencias frontend | `cd client/frontend && npm install` |
| Iniciar frontend | `cd client/frontend && npm run dev` |
| Correr tests frontend | `cd client/frontend && npm test` |

