import './css/App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
function App() {
  return (
    <div>
      <p>hi</p>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
