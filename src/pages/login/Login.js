import React, { useState } from "react";
import { GoogleLogin/**, googleLogout */ } from '@react-oauth/google';
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";
import ContainerMain from "../../components/container-main/ContainerMain";
import Input from "../../components/input/Input";
import Logo from "../../components/logo/Logo";
import Link from "../../components/link/Link";

const Login = () => {

  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  let disabled = (!isRegister && !email && !password) || (!email && !password & !password2 & isRegister);

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
            <Input 
              className={"input-google --mt-half"}
              onChange={setEmail}
              placeholder={t('global.emailLogin')}
              value={email}
            />
            <Input 
              className={"input-google --mt-half"}
              onChange={setPassword}
              placeholder={t('global.password')}
              type='password'
              value={password}
            />
            {isRegister ? 
              <Input 
                className={"input-google --mt-half"}
                match={password}
                onChange={setPassword2}
                placeholder={t('global.passwordRepeat')}
                type='password'
                value={password2}
              /> : ''}
              <Button
                className="--bg-primary --mt-1"
                disabled={disabled}
                label={t(`global.${isRegister ? 'register' :'signIn'}`)}
                onClick={() => console.log('continue')}
              />
              <div className="login__text --mt-half">
                {t(`global.${isRegister ? 'accountYes' :'accountNo'}`)}
              </div>
              <Link
                className={"--text-primary"}
                label={t(`global.${isRegister ? 'signIn' :'createAcc'}`)}
                onClick={() => setIsRegister(!isRegister)}
              />
            {/** <butorn onClick={googleLogout} onKeyDown={googleLogout}>Logout</butorn> */}
        </div>
      </ContainerMain>
    </div>
  );
}

export default Login;
