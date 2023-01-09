import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Message from "./components/Message";
import Navigation from "./components/navigation";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" exact element={<About />}></Route>
          <Route path="/Contact" exact element={<Contact />}></Route>
        </Routes>

        <Footer />
        <div>
          <Message welcome="Welcome!" />
          <Message greeting="Dear Visitor" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
