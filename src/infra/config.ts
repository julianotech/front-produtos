import { config } from 'dotenv';
config();

export const env = Object.freeze({
  SERVER_ENDPOINT: process.env.VITE_APP_ENDPOINT || 'http://localhost:4000',
});
