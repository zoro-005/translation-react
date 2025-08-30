import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { ChatProvider } from './context/ChatContext'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import HelpPage from './pages/HelpPage'
import PrivacyPage from './pages/PrivacyPage'
import FeedbackPage from './pages/FeedbackPage'
import NewChatPage from './pages/NewChatPage'
import FriendProfilePage from './pages/FriendProfilePage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ChatProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/new-chat" element={<NewChatPage />} />
                <Route path="/friend-profile" element={<FriendProfilePage />} />
                <Route path="/terms" element={<TermsPage />} />
              </Routes>
            </div>
          </Router>
        </ChatProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
