import './App.css';
import Header from './components/HeaderComponent/header';
import BlogPage from './components/Pages/blogpage';
import Homepage from './components/Pages/homepage';

function App() {
  return (
    <div className="App">
      <Header />

      <Homepage />
      <BlogPage />
    </div>
  );
}

export default App;
