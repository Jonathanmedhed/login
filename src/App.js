import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './scss/styles.scss';
import Login from './pages/Login';

const App = () => {

  return (
    <GoogleOAuthProvider clientId="195899302217-08jumh12lv0ucuvqnmr2l71pj633dpef.apps.googleusercontent.com">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
     </div>
    </GoogleOAuthProvider>)
  ;
}

export default App;
