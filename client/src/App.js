import { Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/home/Home';
import Privacy from './components/shared/footer/Privacy';
import Terms from './components/shared/footer/Terms';
import Team from './components/shared/team/Team';
import Workers from './components/workers/Workers';
import Services from './components/services/Services';
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/team' element={<Team />} />
      <Route path='/workers' element={<Workers />} />
      <Route path='/:workerId/services' element={<Services />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='terms' element={<Terms />} />
      <Route path='/*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;