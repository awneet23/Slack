# Slack Pro - Real-time Chat Application

🔗 **Live Demo:** https://slack-frontend-roan.vercel.app/

---

## Overview

Slack Pro is a modern, full-stack real-time chat application built with React, Node.js, and Stream Chat. It provides users with a seamless communication platform featuring channels, direct messaging, user authentication, and real-time message streaming.

## Features

- **Real-time Messaging** - Instant message delivery using Stream Chat API
- **Channel Management** - Create, manage, and join channels
- **User Authentication** - Secure authentication with Clerk
- **Direct Messaging** - One-on-one conversations
- **User Presence** - See who's online in real-time
- **Pinned Messages** - Save important messages
- **Member Management** - Invite and manage channel members
- **Video Calls** - Voice and video calling capabilities
- **Error Tracking** - Application monitoring with Sentry
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend

- **React 19** - Modern UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Stream Chat React SDK** - Real-time messaging components
- **Clerk** - Authentication and user management
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Stream Chat SDK** - Messaging infrastructure
- **Clerk Express** - Authentication middleware
- **Inngest** - Job queue and workflows
- **Sentry** - Error tracking and monitoring
- **CORS** - Cross-origin resource sharing

## Project Structure

```
new_slack_pro/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js          # Database configuration
│   │   │   ├── env.js         # Environment variables
│   │   │   ├── ingest.js      # Inngest configuration
│   │   │   └── stream.js      # Stream Chat configuration
│   │   ├── controllers/
│   │   │   └── chat.controller.js
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js
│   │   ├── models/
│   │   │   └── user.model.js
│   │   ├── routes/
│   │   │   └── chat.route.js
│   │   └── server.js          # Express server entry point
│   ├── instrument.js          # Sentry instrumentation
│   ├── package.json
│   └── vercel.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreateChannelModal.jsx
│   │   │   ├── CustomChannelHeader.jsx
│   │   │   ├── CustomChannelPreview.jsx
│   │   │   ├── InviteModal.jsx
│   │   │   ├── MembersModal.jsx
│   │   │   ├── PageLoader.jsx
│   │   │   ├── PinnedMessagesModal.jsx
│   │   │   └── UsersList.jsx
│   │   ├── hooks/
│   │   │   └── useStreamChat.js
│   │   ├── lib/
│   │   │   ├── api.js         # API utilities
│   │   │   ├── AuthProvider.jsx
│   │   │   └── axios.js       # Axios configuration
│   │   ├── pages/
│   │   │   ├── AuthPage.jsx
│   │   │   ├── CallPage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── styles/
│   │   │   ├── auth.css
│   │   │   └── stream-chat-theme.css
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # React entry point
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB database
- Stream Chat API keys
- Clerk API keys

### Installation

#### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
CLIENT_URL=http://localhost:5173
SENTRY_DSN=your_sentry_dsn
INNGEST_EVENT_KEY=your_inngest_event_key
```

#### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend` directory:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_BASE_URL=http://localhost:3000
VITE_SENTRY_DSN=your_sentry_dsn
```

## Running the Application

### Development Mode

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:3000`

### Production Build

**Frontend:**

```bash
cd frontend
npm run build
npm run preview
```

**Backend:**

```bash
cd backend
npm start
```

## API Endpoints

### Chat Routes

- `GET /api/chat` - Get all channels
- `POST /api/chat` - Create a new channel
- `GET /api/chat/:id` - Get channel details
- `POST /api/chat/:id/members` - Add members to channel
- `DELETE /api/chat/:id` - Delete a channel

## Environment Variables

### Backend

- `MONGODB_URI` - MongoDB connection string
- `CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key
- `STREAM_API_KEY` - Stream Chat API key
- `STREAM_API_SECRET` - Stream Chat API secret
- `CLIENT_URL` - Frontend URL for CORS
- `SENTRY_DSN` - Sentry error tracking DSN
- `INNGEST_EVENT_KEY` - Inngest event key

### Frontend

- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk public key
- `VITE_API_BASE_URL` - Backend API base URL
- `VITE_SENTRY_DSN` - Sentry error tracking DSN

## Deployment

This project is configured for deployment on Vercel with `vercel.json` files in both frontend and backend directories.

### Deploy Backend

```bash
cd backend
vercel deploy
```

### Deploy Frontend

```bash
cd frontend
vercel deploy
```

## Features in Detail

### Authentication

- Clerk integration for secure user authentication
- Middleware-based authorization
- Protected API routes

### Real-time Chat

- Stream Chat integration for real-time messaging
- Automatic message synchronization
- Typing indicators
- Message reactions and replies

### Channel Management

- Create and delete channels
- Add/remove members
- Channel permissions
- Admin controls

### Error Handling

- Comprehensive error tracking with Sentry
- Try-catch error handling in API routes
- User-friendly error messages

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the repository or contact the development team.

## Live Demo

🔗 **Visit the live application:** https://slack-frontend-roan.vercel.app/

---

**Happy chatting! **
