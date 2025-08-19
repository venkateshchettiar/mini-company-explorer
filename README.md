### 📄 **README.md**

# Mini Company Explorer

A modern React + Flask application for exploring company information with a beautiful Tailwind CSS interface.

## 🎯 Features

- **Search Companies**: Search for companies by name with real-time results
- **Company Details**: View comprehensive information about selected companies
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Beautiful interface built with Tailwind CSS
- **Real-time Search**: Instant search results as you type

## 🛠 Tech Stack

- **Frontend**: React 19 + Vite + Tailwind CSS
- **Backend**: Flask (Python 3) + CORS support
- **Routing**: React Router for navigation
- **Styling**: Tailwind CSS for modern, responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Python 3.8+
- npm or yarn

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd mini-company-explorer
```

### 2. Start the Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r ../requirements.txt
python app.py
```

The backend will run at: http://127.0.0.1:5000

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at: http://localhost:5173

## 📱 Usage

1. **Search Page**: Enter a company name in the search box and click "Search"
2. **Results**: View matching companies in a responsive grid
3. **Company Details**: Click on any company card to view detailed information
4. **Navigation**: Use the back button to return to search results

## 🎨 Design Features

- **Gradient Header**: Beautiful blue-to-purple gradient header
- **Card-based Layout**: Clean, modern card design for company information
- **Hover Effects**: Smooth animations and hover states
- **Responsive Grid**: Adapts to different screen sizes
- **Modern Typography**: Clean, readable text with proper hierarchy

## 🔧 API Endpoints

- `GET /api/companies?q=term` - Search companies by name
- `GET /api/companies/<id>` - Get detailed company information

## 📁 Project Structure

```
mini-company-explorer/
├── backend/
│   ├── app.py              # Flask backend server
│   ├── companies.json      # Company data
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchPage.jsx      # Search interface
│   │   │   └── CompanyDetail.jsx   # Company details view
│   │   ├── App.jsx                 # Main app component
│   │   └── main.jsx                # App entry point
│   ├── package.json                # Node.js dependencies
│   └── tailwind.config.js          # Tailwind CSS configuration
└── README.md
```

## 🌟 Bonus Features

- Loading states and error handling
- Responsive design for mobile and desktop
- Smooth transitions and animations
- Clean, modular component architecture
- Professional UI/UX design

## 🚀 Deployment

The app is ready for deployment on platforms like:

- **Frontend**: Vercel, Netlify, or any static hosting
- **Backend**: Heroku, Railway, or any Python hosting service

## 📝 License

This project is open source and available under the MIT License.
