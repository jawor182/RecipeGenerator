import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Name from './components/Name'; 
import Form from './components/Form';
import Random from './components/Random';
import NameWithoutLink from './components/NameWithoutLink';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Name />
            <Form />
          </>} />
          <Route path="/random" element={<>
          <NameWithoutLink />
          <Random /></>
          } />
        </Routes>
      </Router>
  );
}

export default App;
