import React from 'react'
import MainLayout from './components/layout/MainLayout'
import Inventory from './pages/supply-chain/Inventory'
import { ThemeProvider } from './components/theme/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <MainLayout>
        <Inventory />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
