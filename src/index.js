import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ use this for React 18+
import App from './App';
import '../src/styles.css';
// import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// const clerkFrontendApi = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ClerkProvider publishableKey={clerkFrontendApi}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </ClerkProvider> */}
  </React.StrictMode>
);

reportWebVitals();
