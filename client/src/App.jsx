import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Quiz from './components/Quiz';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Logic & Reasoning Challenge</h1>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App
