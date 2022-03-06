import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/layout/NavBar';
import WelcomePage from './views/WelcomePage';
import RankingPage from './views/RankingPage';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path='/ranking' element={<RankingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
