# Chatbot-Integrated Website

A modern web application with an integrated chatbot, built with Next.js, React, and Material-UI, featuring a robust frontend and backend architecture.

## 🚀 Features

- Modern UI components using Material-UI and Radix UI
- Responsive design with Tailwind CSS
- Form handling with React Hook Form and Zod validation
- Real-time notifications with Sonner
- Data visualization with Recharts
- Authentication and authorization
- Theme support with next-themes
- Intelligent chatbot integration for enhanced user interaction

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 15.1.0
- **UI Libraries:** 
  - Material-UI
  - Radix UI
  - Tailwind CSS
- **State Management:** React Hooks
- **Form Handling:** React Hook Form with Zod validation
- **Styling:** Tailwind CSS with PostCSS
- **Animations:** Framer Motion
- **Notifications:** Sonner
- **Charts:** Recharts

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd chatbot-website
```

2. Install dependencies:
```bash
npm install
```

3. Install server dependencies:
```bash
cd server
npm install
cd ..
```

## 🚀 Running the Application

### Development Mode

To run both frontend and backend concurrently:
```bash
npm run start:all
```

Or run them separately:

Frontend:
```bash
npm run dev
```

Backend:
```bash
cd server
npm start
```

### Production Build

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── server/          # Backend server code
├── public/          # Static assets
├── styles/          # Global styles
├── utils/           # Utility functions
├── hooks/           # Custom React hooks
├── lib/             # Library configurations
└── data/            # Data files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run start:all` - Start both frontend and backend concurrently

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Add your environment variables here
```

## 📝 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. Please contact the project maintainers for contribution guidelines. 