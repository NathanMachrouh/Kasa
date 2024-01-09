import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Logements from '../components/Logements';
import Apropos from '../pages/Apropos';
import Logement from '../pages/Logement';
import Error from '../pages/Error';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App (){
    return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
        <Accueil />
        <Logements />
        </>} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    )
}
export default App