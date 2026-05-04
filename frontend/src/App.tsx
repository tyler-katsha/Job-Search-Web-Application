import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { JobListing } from './pages/JobListing'
import { Hire } from './pages/HireForm'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joblisting" element={<JobListing />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
