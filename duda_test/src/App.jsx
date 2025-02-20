import './css/App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ReviewProvider } from './services/providers/ReviewContext'
function App() {
  return (
    <div>
      <ReviewProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ReviewProvider>
    </div>
  )
}

export default App
