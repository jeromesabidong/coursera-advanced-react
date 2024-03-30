import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TestExercise from './exercises/TestExercise';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <nav className='nav'>
        <BrowserRouter>
          <Link to={'/test'} className='nav-item'>Test</Link>
          <Routes>
            <Route path='/test' element={<TestExercise />} />
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;
