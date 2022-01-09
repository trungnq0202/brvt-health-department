import "./App.css";
import Footer from "./Components/Footer/Footer";
import Icon from "./Components/Icon/Icon";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import About from "./Pages/AboutPage/About.jsx";
import BlogPage from "./Pages/BlogPage/BlogPage";
import BookingPage from "./Pages/BookingPage/BookingPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Icon />
      <Service />
      <About />
      <BookingPage />
      <BlogPage />
      <Footer />
    </div>
  );
}

export default App;
