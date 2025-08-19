# 💼 MERN Job Seeker Website

![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)
![Express](https://img.shields.io/badge/Backend-Express.js-lightgrey?logo=express)
![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green?logo=node.js)
![Cloudinary](https://img.shields.io/badge/Cloud-Cloudinary-orange?logo=cloudinary)
![JWT](https://img.shields.io/badge/Auth-JWT-yellow?logo=jsonwebtokens)

-----

## ✨ Features

  - **Secure Authentication:** User registration and login are secured with **JWT** (JSON Web Tokens).
  - **Role-Based Access:** Separate dashboards and functionalities for **Employers** and **Job Seekers**.
  - **Job Management:** Employers can easily **post, edit, and delete** their job listings.
  - **Application Flow:** Job Seekers can **search for jobs** and apply with their resume and cover letter.
  - **Cloud Storage:** Utilizes **Cloudinary** for storing user-uploaded images, such as company logos and resumes.
  - **Responsive Design:** The interface is built with **React.js** and styled with **CSS** to provide a seamless experience on all devices.

-----

## 🛠️ Technologies Used

  - **Frontend:** React.js, JavaScript, HTML, CSS
  - **Backend:** Node.js, Express.js
  - **Database:** MongoDB
  - **Authentication:** JWT (JSON Web Tokens)
  - **Cloud Storage:** Cloudinary

-----

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

  - **[Node.js](https://nodejs.org/):** A JavaScript runtime environment.
  - **[MongoDB](https://www.mongodb.com/):** A NoSQL database (either locally or a cloud service like MongoDB Atlas).
  - **[Cloudinary Account](https://cloudinary.com/):** A free account for image and file storage.

-----

## 🚀 Installation

Follow these steps to set up and run the project locally.

### 1\. Clone the repository

```bash
git clone https://github.com/hrugvedcodes/MERN-job-seeker.git
cd MERN-job-seeker
```

### 2\. Install Dependencies

Install the required packages for both the backend and frontend.

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3\. Setup Environment Variables

Create a `.env` file in the `backend/` directory and add your configuration details.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4\. Run the Application

Launch the backend and frontend in separate terminals.

```bash
# Run backend
cd backend
npm run dev

# Run frontend
cd ../frontend
npm start
```

### 5\. Open in Browser

Once both are running, navigate to `http://localhost:3000` in your web browser.

-----

## 📌 Roadmap

  - [ ] Add advanced job search filters.
  - [ ] Implement email notifications for job applications.
  - [ ] Add an admin panel for managing users and jobs.
  - [ ] Deploy the application to a cloud service (e.g., Vercel + Render/Heroku).

-----

## 🤝 Contributing

Contributions are always welcome\! Feel free to fork this repository, create a feature branch, and submit a pull request.

-----

## 📄 License

This project is licensed under the **MIT License**.

-----

## 👨‍💻 Author

**Hrugved Lakhapati**

  - GitHub: [@hrugvedcodes](https://www.google.com/search?q=https://github.com/hrugvedcodes)
  - Email: hrugvedlakhapati@gmail.com
