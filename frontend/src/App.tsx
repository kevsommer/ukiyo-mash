import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import WelcomePage from './views/WelcomePage';
import RankingPage from './views/RankingPage';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path='/ranking' element={<RankingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
