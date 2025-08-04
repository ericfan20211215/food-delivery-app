# Food Delivery App

Full-stack food ordering platform with 6 categories and 30+ preloaded dishes. Users can browse menus, create accounts, manage profiles, and place orders with integrated mock payments. Admins have full control over dish listings, categories, and order tracking through a dedicated dashboard — built for a seamless multi-role experience.

# Structure Overview

### **Frontend**
Built with **React** and styled using **CSS**, the frontend utilizes reusable **JSX components** to create an interactive and modular user experience. It manages tasks such as browsing dishes, handling user sessions, and placing orders, all within a responsive UI.

### **Admin Panel**
Also developed with **React**, the admin interface is tailored for content and order management. It provides streamlined access to menu control and order updates through clearly defined components.

### **Backend**
The backend manages how data is handled and how different parts of the app connect behind the scenes. It uses a set of organized controllers and middleware to handle tasks like login, cart updates, and orders. All data is stored and accessed through **MongoDB**.

# Setup Instructions

### Step 1: Clone the repository
Clone the project to your local machine and enter the directory
```bash
git clone https://github.com/yourusername/food-delivery-app.git
```
```bash
cd food-delivery-app
```

### Step 2: Install dependencies
Install packages for backend, frontend, and admin
```bash
npm install
```

### Step 3: Configure environment variables
Create a `.env` file inside the backend folder and add your own secrets:
```bash
JWT_SECRET="your_jwt_secret_here"
STRIPE_SECRET_KEY="your_stripe_secret_key_here"
```

### Step 4: Set up your MongoDB database
Create a database in MongoDB Atlas or use your own MongoDB instance. After that, update your .env file with your connection string:
```bash
MONGODB_URL="your_mongodb_connection_string"
```

### Step 5: Start the backend server
```bash
cd backend
```
```bash
npm run server
```

### Step 6: Start the frontend server
```bash
cd ../frontend
```
```bash
npm run dev
```

### Step 7: Start the admin panel server
```bash
cd ../admin
```
```bash
npm run dev
```
