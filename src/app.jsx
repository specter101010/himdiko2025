// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import Home from './home';
import Sejarah from './pages/Sejarah';


export default function App() {

  return (
    <Router>
     <ScrollToHash />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sejarah" element={<Sejarah />} />
      </Routes>
    </Router>
  )
}
