# Police Service Portal

A comprehensive web application for police services including lost and found, women companion, loud speaker permissions, and more.

## 🚀 Features

- Lost and Found Service
- Women Companion Service
- Loud Speaker Permission Service
- Locked House Monitoring
- Anonymous Complaints
- Senior Citizen Registration
- Beat Police Information
- Real-time Updates and Announcements
- Email Notifications
- OTP Verification
- File Upload Support
- Interactive Chatbot

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Email Service**: Nodemailer (Gmail)
- **File Storage**: Local Storage
- **Authentication**: OTP-based Email Verification

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- Gmail account (for email notifications)

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd police-service-portal
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Create environment files:

In the `server` directory, create a `.env` file:
```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority&appName=<appName>

# Server Configuration
PORT=5001

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# API URL (for frontend)
NEXT_PUBLIC_API_URL=http://localhost:5001
```

In the `client` directory, create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5001
```

## 🔐 MongoDB Atlas Setup

1. Create a MongoDB Atlas account at https://cloud.mongodb.com
2. Create a new cluster (free tier is sufficient for development)
3. Create a database user with appropriate permissions
4. Add your IP address to the IP whitelist in Network Access
5. Get your connection string and update the `MONGODB_URI` in your `.env` file

## 📧 Email Setup

1. Use a Gmail account for sending emails
2. Enable 2-factor authentication
3. Generate an App Password:
   - Go to Google Account Settings
   - Security > 2-Step Verification > App Passwords
   - Generate a new app password for "Mail"
4. Update the `EMAIL_USER` and `EMAIL_PASS` in your `.env` file

## 🚀 Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm run dev
```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run start:all` - Start both frontend and backend concurrently

## 🔍 API Endpoints

### Service Forms
- `POST /api/service-forms/submit` - Submit a service form
- `POST /api/service-forms/send-otp` - Send OTP for verification
- `POST /api/service-forms/verify-otp` - Verify OTP

### Updates
- `GET /api/updates` - Get all updates
- `POST /api/updates` - Create a new update

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Submit a testimonial

### Beat Police
- `GET /api/beat-police` - Get beat police information

## 📁 Project Structure

```
police-service-portal/
├── client/                 # Frontend Next.js application
│   ├── components/        # React components
│   ├── pages/            # Next.js pages
│   ├── public/           # Static files
│   └── styles/           # CSS styles
├── server/                # Backend Express application
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── uploads/          # File uploads
│   └── index.js          # Server entry point
└── README.md             # Project documentation
```

## 🔒 Security Considerations

- All sensitive data is stored in environment variables
- Email verification required for form submissions
- File upload size limits and type restrictions
- MongoDB connection string is secured
- API endpoints are protected with appropriate validation

## 🐛 Troubleshooting

1. MongoDB Connection Issues:
   - Verify MongoDB Atlas cluster is running
   - Check IP whitelist in MongoDB Atlas
   - Verify connection string in .env file
   - Ensure database user has correct permissions

2. Email Sending Issues:
   - Verify Gmail credentials
   - Check if 2-factor authentication is enabled
   - Ensure app password is correctly set
   - Check email service logs

3. File Upload Issues:
   - Verify upload directory permissions
   - Check file size limits
   - Ensure correct file types

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. Please contact the project maintainers for contribution guidelines.

## 📞 Support

For support, please contact the project maintainers or raise an issue in the repository. 