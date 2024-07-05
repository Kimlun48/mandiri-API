import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { AuthProvider } from './context/authProvider';

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<AuthProvider>
		<App />
		</AuthProvider>
	</React.StrictMode>,
);