import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from '../src/context/AuthProvider.jsx'
import $ from 'jquery'


// Ejemplo de uso de jQuery
// $(document).ready(function() {
//   console.log('jQuery está funcionando');
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
