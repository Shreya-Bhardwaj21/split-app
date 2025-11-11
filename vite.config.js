import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 👈 ADD THIS 'server' BLOCK
  server: {
    // This often fixes HMR/live reload issues on Windows/WSL
    watch: {
      usePolling: true,
    },
  },
})