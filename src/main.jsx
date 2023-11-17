import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//üstte react ın kendi kütüpaneleri var (DOM html e bağlıyor)

ReactDOM.createRoot(document.getElementById('root')).render(
  //getElementById('root')= index.html e müdahale ediyor
  //render= ekranda görntülenme
  // App burada oluşuyor
  //StrictMode hata ayıklamak için
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
