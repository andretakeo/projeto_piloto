import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Forms from './components/Forms';
import Dataframe from './components/Dataframe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/Topbar/Topbar';
// import Graficos from './components/Gráficos';
// import Sent from './components/Sent';
function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="all-forms">
                <h2>Faça seu cadastro.</h2>
                <Forms />
              </div>
            }
          />
          <Route path="/lista" element={<Dataframe />} />
          {/* <Route path="/graficos" element={<Graficos />} /> */}
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
