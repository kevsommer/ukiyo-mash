import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/layout/NavBar';
import WelcomePage from './views/WelcomePage';
import RankingPage from './views/RankingPage';
import theme from './utils/theme';
import ComparisonPage from './views/ComparisonPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path='/ranking' element={<RankingPage />} />
          <Route path='/mash' element={<ComparisonPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
