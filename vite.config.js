import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/coffee-shop-landing/",
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096,
  },
})
