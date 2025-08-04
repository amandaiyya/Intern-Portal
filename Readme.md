# 🧑‍💻 Intern Portal – Full Stack

This is a basic full stack fundraising intern portal.

---

## 🔧 Tech Stack Used

- **Frontend:** Vite + React.js
- **Backend:** Node.js + Express.js (with dummy JSON data)

---

## 🚀 Live Links

- **(Vercel):** [https://intern-portal-pied.vercel.app](https://intern-portal-pied.vercel.app)

---

## ✨ Features

### 🔐 Frontend

- Dummy Login / Signup page (UI only, no authentication)
- **Dashboard Page** displaying:
  - Intern Name
  - Dummy Referral Code (e.g., `yourname2025`)
  - Total Donations Raised (from backend)
  - Rewards / Unlockables Section (static display only)
- Styled using React and basic CSS (can be enhanced)

### 🔙 Backend

- Built using **Express.js**
- Exposes a simple REST API that returns dummy data:
  - Intern name
  - Referral code
  - Total donations
- Data is statically returned using JSON

### 🏆 Bonus 

- **Leaderboard Page**: Shows static leaderboard with dummy data (to be implemented)
- Backend hosted on Render.com
- Frontend hosted on Vercel

---

## 📦 API Endpoint

| Method | Endpoint        | Description                  |
|--------|------------------|------------------------------|
| GET    | `/api/dashboard`      | Returns intern's dummy data  |
| GET    | `/api/leaderboard`      | Returns leaderboard data  |

**Sample Response:**
```json

"dashboard": {
    "internName": "Megha Sain",
    "internLevel": "Level 2 intern",
    "referralCode": "meghasain2025",
    "donationRaised": 2500
}
```
```json
"leaderboard": [
    { "name": "Megha", "donationsRaised": 2500 },
    { "name": "Aman", "donationsRaised": 1700 },
    { "name": "Akshay", "donationsRaised": 900 }
]
```