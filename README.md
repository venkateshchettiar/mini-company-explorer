### 📄 **README.md**

# Mini Company Explorer

A simple React + Flask app to test basic front-end skills.

---

## 🎯 Objective

Create a front-end React app that:
- Lets users search for companies
- Lists search results
- Shows details of a selected company

The basic look and feel of the search page and the company
information page can be found in the samples directory.

---

## 🛠 Tech Stack

- Frontend: React (via Vite)
- Backend: Flask (Python 3)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourname/mini-company-explorer.git
cd mini-company-explorer
```

### 2. Start the backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r ../requirements.txt
python app.py
```

The backend runs at:  
**http://127.0.0.1:5000**

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at:  
**http://localhost:5173**

---

## 🧪 What You Need to Build (Frontend)

1. **Search Page**
   - A text input + search button
   - List of companies matching the query

2. **Detail Page**
   - Shows detailed info for the selected company

3. **Routing**
   - Use React Router or a similar library to manage views

4. **Optional Features (Bonus)**
   - Loading and error handling
   - Clean styling using CSS or a UI framework (e.g., Bootstrap or Tailwind)
   - Modular component design

---

## 📬 API Endpoints

### `GET /api/companies?q=term`
- **Description:** Search for companies matching the query string.
- **Returns:** List of `{ id, name, industry }`

### `GET /api/companies/<id>`
- **Description:** Get full details of a single company by ID.
- **Returns:** `{ id, name, industry, description, founded_year, location }`

---

## 📦 Submission Instructions

- Fork this repository
- Complete your implementation
- Push to your forked repo
- Share the link with us

---

## ✅ Evaluation Criteria

- Correctness of functionality
- Code readability and structure
- Use of React best practices
- API integration
- Bonus: UI/UX polish and extra effort
