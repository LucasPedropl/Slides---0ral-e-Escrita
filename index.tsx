
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SpeakerView from './components/SpeakerView';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Simple routing based on query parameter
const urlParams = new URLSearchParams(window.location.search);
const isSpeakerView = urlParams.get('view') === 'speaker';

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isSpeakerView ? <SpeakerView /> : <App />}
  </React.StrictMode>
);
