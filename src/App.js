import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { HomePage } from './pages/home';
import { Portfolio } from './pages/portfolio';
import { AboutMe } from './pages/aboutme';
import { NavHead, TitleUpdater } from './components/utilities';

function App() {
  return (
    <div className="App">
        <NavHead/>
        <TitleUpdater/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/About-Me" element={<AboutMe/>}/>
        </Routes>
    </div>
  );
}

export default App;