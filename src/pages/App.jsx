import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Apropos from '../pages/Apropos';
import Error from '../pages/Error';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logements from '../components/LogementsCard';
import LogementID from '../components/LogementID';

function App (){
    return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
        <Accueil />
        <Logements />
        </>} />
        <Route path="/:Logementsid" element={<LogementID />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    )
}
export default App