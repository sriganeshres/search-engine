import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'; // Import the dotenv package

// Load environment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_RAPID_API_KEY': JSON.stringify(process.env.REACT_APP_RAPID_API_KEY),
    'process.env.REACT_APP_RAPID_HOST': JSON.stringify(process.env.REACT_APP_RAPID_HOST),
  },
});
