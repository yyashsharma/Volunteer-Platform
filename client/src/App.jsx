import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import FooterComponent from "./components/Footer";

function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <FooterComponent />
    {/* <ToastContainer position="top-center" /> */}
  </Router>
  )
}

export default App
