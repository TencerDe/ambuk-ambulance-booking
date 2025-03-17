# Ambuk - Ambulance Booking System

Ambuk is an **ambulance booking web application** designed to help users book emergency medical transport efficiently. The project follows a **React.js frontend and Django backend with PostgreSQL**. Users can **book an ambulance without logging in**, while login/signup is optional for additional features.

## Features

### Frontend (React.js)
- **Home Page** with an intuitive UI.
- **Signup & Login Pages** (optional for booking an ambulance).
- **Profile Page** for registered users.
- **Ride Booking System** (Popup Modal):
  - Name
  - Address
  - Age
  - Ambulance Type (With/Without Medical Assistance)
  - Vehicle Type (Van, Mini Bus)
  - Any other necessary details
- **Fully Responsive UI** (to be implemented step by step).
- **Hamburger Menu** for mobile view.
- **Gradient-style Theme** (planned styling improvement).
- **Pure CSS only** (No CSS frameworks like Tailwind or Bootstrap).
- **Single `components/` folder** structure (No `utils/` or `services/` folders for now).

### Backend (Django + PostgreSQL)
- **User Authentication (Custom + Google Login)**
- **Ambulance Booking API** (Handles ride requests)
- **Hospital Selection API** (To be later integrated with Maps API)
- **Ride History & Status Tracking**
- **Admin Panel** for managing ride requests
- **Database Management using PostgreSQL**

## Technologies Used
### Frontend:
- **React.js** (Core React, No frontend libraries like Redux, Material UI, etc.)
- **Pure CSS**

### Backend:
- **Django** (Python)
- **PostgreSQL** (Database)
- **Django REST Framework** (For API)

## Installation & Setup

### Backend (Django + PostgreSQL)
```bash

# Clone the repository
git clone https://github.com/TencerDe/ambuk-ambulance-booking.git
cd ambuk/backend

# Create virtual environment and install dependencies
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

pip install -r requirements.txt

# Setup database
python manage.py migrate

# Create superuser (optional, for admin panel)
python manage.py createsuperuser

# Run the development server
python manage.py runserver
```

### Frontend (React.js)
```bash
cd ambuk/frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

## Folder Structure
```
ambuk/
│── ambuk-backend/               # Django Backend
│   ├── manage.py          # Django Project Entry Point
│   ├── ambuk/             # Django App Config
│   ├── api/               # API Endpoints
│   ├── users/             # Authentication System
│   ├── rides/             # Ride Booking Logic
│   ├── templates/         # Django Templates
│   ├── static/            # Static Files
│
│── ambuk-frontend/              # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # All UI Components
│   │   ├── App.js         # Main React Component
│   │   ├── index.js       # React Entry Point
│   │   ├── styles.css     # Pure CSS Stylesheet
│   │   ├── api.js         # API Calls (if needed)
│
│── README.md              # Project Documentation
│── requirements.txt       # Backend Dependencies
│── package.json           # Frontend Dependencies
```

## Roadmap
- ✅ Basic React UI Implementation
- ✅ Ride Booking Feature (Popup Modal)
- ✅ Django Backend with API
- ⏳ Hospital Selection (Maps API Integration)
- ⏳ User Dashboard & Ride History
- ⏳ Advanced UI Styling & Responsiveness
- ⏳ Deployment

## Contributing
Contributions are welcome! Please follow these steps:
1. **Fork** the repository.
2. **Create a new branch** (`git checkout -b feature-name`).
3. **Commit your changes** (`git commit -m 'Add new feature'`).
4. **Push to the branch** (`git push origin feature-name`).
5. **Submit a pull request**.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, reach out at: **tsharma2907@gmail.com**

