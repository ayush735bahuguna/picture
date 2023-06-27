import './CSS/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import SearchPage from "./pages/search/SearchPage"
import Header from "./components/Header/Header"
import Error from './pages/404/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:text" element={<SearchPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
