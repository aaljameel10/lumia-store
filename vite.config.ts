import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_PATH = process.env.BASE_PATH || '/lumia-store/'

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
})

