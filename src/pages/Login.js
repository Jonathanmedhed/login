import React from "react";
//import { useTranslation } from "react-i18next";
import ContainerMain from "../components/ContainerMain";
import Logo from "../components/Logo";

const Login = () => {

  //const { t } = useTranslation();

  return (
    <div className="container --just-align-center">
      <ContainerMain>
        <div className="login">
          <div className="login__logo">
            <Logo wTitle={true} wSub={true}/>
          </div>
          <h1>Login</h1>
        </div>
      </ContainerMain>
    </div>
  );
}

export default Login;