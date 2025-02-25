import React from 'react';
import { useState, useEffect } from 'react';
const chatApi = async (message) => {
  const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({ message })
  });
}

const App = () => {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedConversation = localStorage.getItem('conversation');
    if (storedConversation) {
      setConversation(JSON.parse(storedConversation));
    }
  }, []);

  const askQuestion = async () => {
    if (question.trim() === '') {
      return;
    }
    setLoading(true);
    const response = await chatApi(question);
    // setConversation([
    //   ...conversation, 
    //   { role: 'user', content: question }, 
    //   { role: 'assistant', content: response }
    // ]);
    setConversation((prev) => [
      ...prev,
      { role: 'user', content: question },
      { role: 'assistant', content: response }
    ]);
    setQuestion('');
  }

  return (
    <div className="chat-container" style={{ width: '500px', height: '500px', border: '1px solid #ccc' }}>
      <p className="chat-title">Chat with DeepSeek</p>
      <div className="chat-input">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter' && askQuestion) {
              handleSend();
            }
          }}
          style={{ width: '80%' }}
        />
        <button onClick={askQuestion}>Send</button>
      </div>
      {loading && <div>Loading...</div>}
      {!loading && conversation.map((message, index) => (
        <div key={index}>
          <p>{message.role === 'user' ? 'You' : 'DeepSeek'}: {message.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;