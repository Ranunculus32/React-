import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Footer />
      <div>
        <Message welcome="Welcome!" />
        <Message greeting="Dear Visitor" />
      </div>
    </div>
  );
}

export default App;
