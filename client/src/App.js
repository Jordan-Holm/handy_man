import { Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/home/Home';
import Workers from './components/workers/Workers';
import Services from './components/services/Services';
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/workers' element={<Workers />} />
      <Route path='/:workerId/services' element={<Services />} />
      <Route path='/*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;