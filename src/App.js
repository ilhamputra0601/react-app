import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog';
import Notfound from './pages/Notfound';
import Todo from './pages/Todo';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Todo" element={<Todo />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </Router> 
  );
}

export default App;
