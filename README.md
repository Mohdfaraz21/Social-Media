# 🌐 Social Media App

A full-stack **Social Media Application** that enables users to connect, share posts, follow others, and interact in real-time. Built with a modern MERN stack architecture, this project demonstrates scalable backend development and sleek frontend design.

---

## 🚀 Features

- 🔐 User Authentication (JWT + bcrypt)
- 📝 Create, Read, Update, Delete (CRUD) posts
- 📷 Image upload with Multer
- 👥 Follow/Unfollow functionality
- 🔎 Search users/posts
- 📈 Secure, Scalable, and Modular Codebase

---

## 🛠️ Tech Stack

### 🖥️ Frontend
| Technology | Description |
|-----------|-------------|
| **ReactJS** | Core UI library for building user interfaces |
| **HTML5 + CSS3 + JavaScript** | Markup, styles, and core scripting |
| **React Router** | Client-side routing |
| **Material-UI** *(Optional)* | Pre-styled component library |

---

### 🌐 Backend
| Technology | Description |
|-----------|-------------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web framework for Node.js |
| **MongoDB** | NoSQL database |
| **Mongoose** | Elegant MongoDB object modeling |
| **JWT (JSON Web Tokens)** | User authentication and session management |
| **bcrypt** | Password hashing |
| **dotenv** | Environment variable management |
| **CORS, Helmet, Morgan** *(Optional)* | Security and logging middleware |

---

## 📁 Folder Structure

```javascript
social-media-app/
│
├── client/ # 💻 React frontend application
│ ├── public/ # Static files (index.html, favicon, etc.)
│ ├── src/ # Source code
│ │ ├── assets/ # Images, icons, and other assets
│ │ ├── components/ # Reusable UI components (Navbar, Post, etc.)
│ │ ├── pages/ # Main pages (Home, Profile, Login, etc.)
│ │ ├── services/ # API calls using Axios/Fetch
│ │ ├── App.js # Root component with routing
│ │ ├── index.js # Entry point of the React app
│ │ └── ... # Other React-specific files
│ └── package.json # Frontend dependencies and scripts
│
├── server/ # 🔧 Express backend application
│ ├── config/ # Configuration files (e.g., DB connection)
│ ├── middleware/ # Custom middleware (auth, error handling)
│ ├── models/ # Mongoose models (User, Post, etc.)
│ ├── routes/ # API routes
│ ├── utils/ # Utility/helper functions
│ ├── .env # Environment variables (should be in .gitignore)
│ ├── app.js # Express app setup
│ ├── server.js # Entry point of the backend
│ └── package.json # Backend dependencies and scripts
│
├── .gitignore # Git ignored files and folders
├── README.md # Project documentation
└── LICENSE # License file
````



---
## ⚙️ Installation & Setup

> Make sure **Node.js**, **npm**, and **MongoDB** are installed on your system.

---

### ✅ Highlights

- Clear separation of **frontend (`client`)** and **backend (`server`)**
- Scalable file structure for components, routes, and models
- `uploads/` handled via **Multer** for image/file storage
- Easily adaptable to add features like notifications, chat, or real-time updates.

### 1. Clone the Repository

````javascript
git clone https://github.com/Mohdfaraz21/Social-Media.git
cd Social-Media
````
### 2. Setup for Frontend

````javascript
cd client
npm install
npm start
````

### 3. Setup for Backend

````javascript
cd server
npm install
npm run dev
````
### 4. Configure Environment Variables
- Create a .env file inside the /server directory:
````javascript
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
````
### 📜 License
````
 This project is licensed under the MIT License.
````
### 🌟 Support
````
If you find this project helpful or inspiring:
Leave a ⭐ on the repo
Share it with others
Follow me on GitHub for more projects
````
