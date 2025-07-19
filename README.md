# 📝 ZDATA Two-Step Registration Form

A responsive, client-side validated two-step registration form built with **React**, **Vite**, **Tailwind CSS**, and **Axios** — developed as part of the frontend intern assessment for ZDATA Innovation.

---

## 🔧 Features

- ✅ Two-step registration with step indicator
- ✅ Real-time form validation (name, email, password match, etc.)
- ✅ Responsive design with Tailwind CSS
- ✅ Axios-based API submission
- ✅ Success message popup with close button
- ✅ Environment variable for API base URL
- ✅ Smooth transitions between steps using Framer Motion

---

## 🔠 Technologies Used

- React
- Vite
- Tailwind CSS
- Axios
- Framer Motion
- React Icons

---

## 📁 Folder Structure

```
src/
├── api/               # Axios instance (optional)
├── components/        # UI components (InputField, Button, StepIndicator, etc.)
├── context/           # Global form state context
├── pages/             # RegistrationForm page
├── services/          # API call to /api/register
├── utils/             # Validation logic
├── App.jsx
├── main.jsx
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/malindubandara/Registration-Form.git
cd registration-form
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment

Create a `.env` file in the root:

```env
VITE_API_BASE_URL=https://your-api-endpoint.com
```

> Replace with your actual backend API URL.

### 4. Run the app locally

```bash
npm run dev
```

---

## 📆 API Endpoint

The form submits a POST request to:

```
POST /api/register
```

### Payload Example:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "yourpassword"
}
```

---

## ✅ Assumptions & Notes

- Phone number is optional
- Password must be at least 6 characters
- Confirm Password must match Password
- `.env` is used for base API URL for flexibility
- Success modal allows closing and resetting the form

---
