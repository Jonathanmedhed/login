import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/styles.scss';
import Login from './pages/Login';

const App = () => {

  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </div>)
  ;
}

export default App;
