# 🍽️ Eat, Split & Have Fun  
### A Simple Bill Splitting App Built with React

This project allows users to manage friends, split bills, track who owes whom, and maintain the data even after a page refresh using **localStorage**.

---

## 🚀 Features

✅ Add new friends  
✅ Select a friend and split a bill  
✅ Auto-calculate expenses (your expense & friend’s expense)  
✅ Update balance based on who paid  
✅ Highlight color based on balance:
- 🔴 Friend owes you  
- 🟠 You owe friend  
- 🟢 Settled  

✅ Show/hide forms dynamically  
✅ LocalStorage support (data remains even after refreshing the page)  
✅ Clean UI built with Bootstrap  

---

## 📂 Project Structure

├─ index.html
│
├─ src/
│ ├─ components/
│ │ ├─ Dashboard.jsx
│ │ ├─ Friendslist.jsx
│ │ ├─ Splitform.jsx
│ │ ├─ Addfriend.jsx
│ │
│ ├─ data/
│ │ └─ friendsdata.js
│ │
│ ├─ App.jsx
│ └─ main.jsx
│
├─ package.json
├─ README.md
└─ vite.config.js (if using Vite)

---

## 🛠️ Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **Bootstrap 5**
- **LocalStorage for Data Persistence**

---

## ✅ How It Works

### 1️⃣ **Add Friend**
- Opens a form to add a new friend  
- Adds default avatar  
- Saved instantly to localStorage  

### 2️⃣ **Split Bill**
- Select any friend  
- Enter total expenses + your expense  
- Select who paid  
- Balance updates automatically  
- Form closes after split  

### 3️⃣ **Dashboard**
- Shows list of all friends  
- Shows colored balance messages  
- Split button toggles form visibility  

---

## 💾 LocalStorage Usage

The app stores:
- ✅ Friends list  
- ✅ Updated balances  
- ✅ Added friends  

```js
localStorage.setItem("friends", JSON.stringify(friendList));
