import React, { createContext, useContext, useState, useEffect } from 'react'

const ChatContext = createContext()

export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}

export const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null)
  const [chats, setChats] = useState([])
  const [messages, setMessages] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Sample chat data
  useEffect(() => {
    const sampleChats = [
      {
        id: '1',
        name: 'Virat Kohli',
        avatar: '/images/dev.png',
        lastMessage: 'Kya india team ki jeet hogi? 😊',
        time: '2:35 PM',
        unreadCount: 2,
        isOnline: true,
        lastSeen: 'online'
      },
      {
        id: '2',
        name: 'Arjun Kapoor',
        avatar: '/images/amit.jpg',
        lastMessage: 'Thanks for the help with the project!',
        time: '1:15 PM',
        unreadCount: 0,
        isOnline: false,
        lastSeen: '2 hours ago'
      },
      {
        id: '3',
        name: 'Design Team',
        avatar: '/images/ankit.jpg',
        lastMessage: 'Let me know your feedback',
        time: '11:45 AM',
        unreadCount: 3,
        isOnline: true,
        lastSeen: 'online'
      },
      {
        id: '4',
        name: 'Ankit Sharma',
        avatar: '/images/tyagi.jpg',
        lastMessage: 'See you tomorrow!',
        time: 'Yesterday',
        unreadCount: 0,
        isOnline: false,
        lastSeen: 'yesterday'
      }
    ]

    const sampleMessages = {
      '1': [
        { id: '1', type: 'received', text: 'Kya india team ki jeet hogi? 😊', time: '2:30 PM' },
        { id: '2', type: 'sent', text: 'nhi buddy india team to gyo', time: '2:32 PM', status: 'read' },
        { id: '3', type: 'received', text: 'ha Ben Stokes kaisa khel rhe hai', time: '2:35 PM', translated: true },
        { id: '4', type: 'sent', text: 'yha pr thala hi jaan bacha skte hai', time: '2:38 PM', status: 'read' }
      ],
      '2': [
        { id: '1', type: 'received', text: 'Hey! How\'s the project going?', time: '1:10 PM' },
        { id: '2', type: 'sent', text: 'It\'s going well, almost done!', time: '1:12 PM', status: 'read' },
        { id: '3', type: 'received', text: 'Thanks for the help with the project!', time: '1:15 PM' }
      ],
      '3': [
        { id: '1', type: 'received', text: 'New mockups are ready for review', time: '11:40 AM', sender: 'Shakti Kapoor' },
        { id: '2', type: 'sent', text: 'Great! I\'ll check them out', time: '11:42 AM', status: 'read' },
        { id: '3', type: 'received', text: 'Let me know your feedback', time: '11:45 AM', sender: 'Shakti Kapoor' }
      ],
      '4': [
        { id: '1', type: 'received', text: 'Meeting at 3 PM tomorrow', time: 'Yesterday' },
        { id: '2', type: 'sent', text: 'Sounds good!', time: 'Yesterday', status: 'read' },
        { id: '3', type: 'received', text: 'See you tomorrow!', time: 'Yesterday' }
      ]
    }

    setChats(sampleChats)
    setMessages(sampleMessages)
  }, [])

  const selectChat = (chat) => {
    setSelectedChat(chat)
    // Mark as read
    setChats(prevChats => 
      prevChats.map(c => 
        c.id === chat.id ? { ...c, unreadCount: 0 } : c
      )
    )
  }

  const sendMessage = (text) => {
    if (!selectedChat || !text.trim()) return

    const newMessage = {
      id: Date.now().toString(),
      type: 'sent',
      text: text.trim(),
      time: getCurrentTime(),
      status: 'sent'
    }

    setMessages(prevMessages => ({
      ...prevMessages,
      [selectedChat.id]: [...(prevMessages[selectedChat.id] || []), newMessage]
    }))

    // Update chat list with new message
    setChats(prevChats =>
      prevChats.map(chat =>
        chat.id === selectedChat.id
          ? { ...chat, lastMessage: text.trim(), time: getCurrentTime() }
          : chat
      )
    )

    // Simulate typing response
    setTimeout(() => {
      simulateTypingResponse()
    }, 2000)
  }

  const simulateTypingResponse = () => {
    if (!selectedChat) return

    setIsTyping(true)
    
    setTimeout(() => {
      const responses = [
        "That's interesting! 🤔",
        "I see what you mean 👍",
        "Thanks for sharing that! 😊",
        "Let me think about it...",
        "Great point! 💯"
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      
      const newMessage = {
        id: Date.now().toString(),
        type: 'received',
        text: randomResponse,
        time: getCurrentTime()
      }

      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedChat.id]: [...(prevMessages[selectedChat.id] || []), newMessage]
      }))

      setChats(prevChats =>
        prevChats.map(chat =>
          chat.id === selectedChat.id
            ? { ...chat, lastMessage: randomResponse, time: getCurrentTime() }
            : chat
        )
      )

      setIsTyping(false)
    }, 1500)
  }

  const getCurrentTime = () => {
    const now = new Date()
    let hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    return `${hours}:${minutes} ${ampm}`
  }

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const value = {
    selectedChat,
    chats: filteredChats,
    messages: selectedChat ? messages[selectedChat.id] || [] : [],
    searchTerm,
    isTyping,
    selectChat,
    sendMessage,
    setSearchTerm,
    getCurrentTime
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}
