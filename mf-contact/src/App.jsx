import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Welcome to Our Contact Page</h1>
      <p>Get in touch with us.</p>
    </main>
  )
}

export default App
