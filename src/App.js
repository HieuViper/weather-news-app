import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/Contact.js';
import NewsPage from './pages/News.js';
import AboutPage from './pages/About.js';
import NavBar from './pages/Nav.js';
import Home from './pages/Home.js';
import ErrorPage from './pages/Error.js';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:somestring" element={<ErrorPage />} />
        </Routes>
    </>
  )
}

export default App;
