import './App.css';
import Header from './components/HeaderComponent/header';
import BlogPage from './components/Pages/blogpage';
import HomePage from './components/Pages/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
