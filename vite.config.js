import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server : {
    watch : {
      usePolling : true,
    }
  //   port : 8000,
  //   host : "127.0.0.1"
   }
})
