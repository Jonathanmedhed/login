import React, { useState } from "react";
import { GoogleLogin/**, googleLogout */ } from '@react-oauth/google';
import { useTranslation } from "react-i18next";
import ContainerMain from "../components/ContainerMain";
import Logo from "../components/Logo";

const Login = () => {

  const { t } = useTranslation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="container --just-align-center">
      <ContainerMain>
        <div className="login">
          <div className="login__logo">
            <Logo className='--mb-1' wSub={true} wTitle={true}/>
          </div>
            <GoogleLogin
              className="--bg-primay"
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
            <div className="login__text --mt-half">- {t('global.or')} -</div>
            <input 
              className="input-google --mt-half"
              placeholder={t('global.emailLogin')}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input 
              className="input-google --mt-half"
              placeholder={t('global.password')}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              value={password}
            />
            {isRegister ? 
              <input 
                className="input-google --mt-half"
                placeholder={t('global.passwordRepeat')}
                onChange={(e) => setPassword2(e.target.value)}
                type='password'
                value={password2}
              /> : ''}
            <span 
              className="btn --bg-primary --mt-1"
              onClick={() => console.log('continue')} 
              onKeyDown={() => console.log('continue')} 
              tabIndex={0}
              type='button'>
                {t(`global.${isRegister ? 'register' :'signIn'}`)}
            </span>
            <div className="login__text --mt-half">
              {t(`global.${isRegister ? 'accountYes' :'accountNo'}`)}
            </div>
            <span 
              className="link --bg-white --text-primary"
              onClick={() => setIsRegister(!isRegister)} 
              onKeyDown={() => setIsRegister(!isRegister)} 
              tabIndex={0}
              type='button'>
              {t(`global.${isRegister ? 'signIn' :'createAcc'}`)}
            </span>
            {/** <butorn onClick={googleLogout} onKeyDown={googleLogout}>Logout</butorn> */}
        </div>
      </ContainerMain>
    </div>
  );
}

export default Login;
