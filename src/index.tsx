import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import ConfigureAiChatPage from './Pages/AiChat/ConfigureAiChat';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('Root element not found');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/ai-chat/configure' element={<ConfigureAiChatPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
