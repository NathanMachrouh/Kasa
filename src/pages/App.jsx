import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Apropos from '../pages/Apropos';
import Error from '../pages/Error';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LogementID from '../components/LogementID';
import Logements from '../components/LogementsCard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Accueil />
          <Logements />
        </>} />
        <Route path="/:id" element={<LogementID />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App