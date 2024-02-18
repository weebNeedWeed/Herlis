import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssets: ['favicon.png', "apple-touch-icon.png", "maskable_icon.png"],
  manifest: {
    name: "Herlis Chatbot",
    short_name: "Herlis",
    description: "An AI-based psychological Chatbot",
    icons: [{
      src: '/android-chrome-192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/android-chrome-512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
    {
      src: '/maskable_icon.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    }
    ],
    theme_color: '#fff',
    background_color: '#fff',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait'
  }
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugIn)
  ],
})
