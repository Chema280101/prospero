import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
// import Login   from './pages/Login'    // ← descomenta cuando tengas el admin
// import Admin   from './pages/Admin'    // ← descomenta cuando tengas el admin

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"      element={<Landing />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </BrowserRouter>
  )
}