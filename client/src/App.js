import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';

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