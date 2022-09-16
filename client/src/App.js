import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Workers from './components/workers/Workers';
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/workers' element={<Workers />} />
      <Route path='/*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;