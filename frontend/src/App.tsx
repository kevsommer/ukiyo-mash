import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import WelcomePage from './views/WelcomePage';
import RankingPage from './views/RankingPage';
import ComparisonPage from './views/ComparisonPage';
import AboutPage from './views/AboutPage';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path='/ranking' element={<RankingPage />} />
          <Route path='/mash' element={<ComparisonPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
