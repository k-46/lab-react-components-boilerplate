import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],base:"/lab-react-components-boilerplate",
  assetsInclude: ["**/*.jpg", "**/*.JPG"]
})