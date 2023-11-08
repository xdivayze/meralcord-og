import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import Register from "./Components/Register/Register"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
