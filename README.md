# 📚 Study Project – MVVM Architecture with Vue.js

## 📌 About the Project

This project was developed with the goal of **understanding in practice how the MVVM (Model-View-ViewModel) architecture works** applied to the front-end using **Vue.js**.

The application consumes an external API using **Axios** and follows a clear separation of responsibilities based on the MVVM pattern.

🔗 Repository:
[https://github.com/Diego-godoi/MVVM-Architecture](https://github.com/Diego-godoi/MVVM-Architecture)

---

## 🧠 Study Goals

- Understand the role of each layer in the **MVVM pattern**
- Separate responsibilities between UI, presentation logic, and business logic
- Improve front-end project organization
- Work with reactive state in Vue.js
- Consume external APIs using Axios

---

## 🏗️ Project Structure

The folder organization is structured as follows:

```
src/
 ├── view/
 │    └── UserView.vue
 │
 ├── viewmodel/
 │    └── UserViewModel.ts
 │
 ├── model/
 │    ├── UserModel.ts
 │    ├── dto/
 │    │    └── User.ts
 │    └── service/
 │         └── userServices.ts
 │
 ├── config/
 │    └── api.ts
```

---

## 🔎 Layer Explanation

### 🎨 View

- Responsible only for the **UI**
- Displays data on the screen
- Interacts with the ViewModel
- Does not contain business logic

In this project, there is a page responsible for:

- Fetching saved users
- Displaying the users on the interface

---

### 🔄 ViewModel

- Contains all **presentation logic**
- Manages **reactive states**
- Handles loading and error states
- Acts as a bridge between View and Model

It does not directly access the API — it communicates with the Model.

---

### 🧩 Model

Responsible for the application's business logic.

#### 📌 UserModel

- Contains the method to fetch users
- Encapsulates domain-related logic for users

#### 🧾 dto/User

- Represents the data typing
- Defines the structure of data received from the API

#### 🌐 service/userServices

- Responsible for API communication
- Uses Axios to perform HTTP requests

---

### ⚙️ Config

#### 📡 config/api.ts

- Creates and configures the Axios instance
- Defines baseURL, headers, and possible interceptors

---

## 🔁 Application Flow

Execution flow:

```
View → ViewModel → Model → Service → API
```

Response flow:

```
API → Service → Model → ViewModel → View
```

---

## 🚀 How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Diego-godoi/MVVM-Architecture.git
cd MVVM-Architecture
```

### 2️⃣ Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3️⃣ Configure the API connection

Go to:

```
src/config/api.ts
```

Update the `baseURL` with your API URL:

```ts
baseURL: 'http://localhost:8080'
```

If your API has different endpoints or response structures, you may need to:

- Adjust methods in `userServices`
- Update `User`
- Modify `UserModel` if necessary

---

### 4️⃣ Run the project

Make sure dependencies are installed:

```bash
npm install
```

Then run:

```bash
npm run dev
```

After that, open in your browser:

```
http://localhost:5173
```

_(Or the port shown by Vite in the terminal)_

---

## 🔧 Adaptations

If you use a different API:

- Check the returned JSON structure
- Update the DTO fields accordingly
- Modify endpoints in the service layer
- Adjust the ViewModel if necessary to handle the data

---

## 🛠️ Technologies Used

- Vue.js
- TypeScript
- Axios
- Vite
- MVVM Architecture

---

## 📖 What I Learned

- Practical application of MVVM in the front-end
- Clear separation of responsibilities
- Layered project organization
- Reactive state management in Vue
- API consumption using Axios
- Proper use of DTOs for data typing

---

## 🎯 Conclusion

This project was built purely for study purposes, focusing on understanding how to apply the MVVM pattern in a Vue.js application that consumes external APIs.

The main goal was to structure the code in a clean, scalable, and well-organized way with clearly defined responsibilities.

---

## 👨‍💻 Author

**Diego Godoi**

📸 Instagram: @_.godoi_
📧 Email: [diegogodoimartins@gmail.com](mailto:diegogodoimartins@gmail.com)

---

## ⭐ Support

If this project was helpful to you, please consider giving it a ⭐ on GitHub!

It helps a lot and motivates me to keep sharing more content 😊
