import React, { useState } from 'react';
import './Login.css';
import Logo from '../../assets/Subtract.png';
import LogoSmall from '../../assets/Subtract2.png';
import Graph from '../../assets/Group 4.png';
import Github from '../../assets/github.png';
import fox from '../../assets/fox.png';
import Azure from '../../assets/azure.png';
import BitBucket from '../../assets/bitbucket.png';
import Key from '../../assets/key.png';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('SAAS');

  const handleLogin = () => {
    navigate('/repositories');
  };

  return (
    <div className='login'>
      <div className="login-hero">
        <img src={Logo} className='logo-png' alt="" />
        <div className="achievements">
          <div className="achievements-1">
            <div className="achievements-1-title">
              <img src={LogoSmall} alt="" />
              <h1>AI to Detect & Autofix Bad Code</h1>
            </div>
            <div className="achievements-1-body">
              <div className="achievements-1-body-box">
                <h1>30+</h1>
                <h2>Language Support</h2>
              </div>

              <div className="achievements-1-body-box">
                <h1>10K+</h1>
                <h2>Developers</h2>
              </div>

              <div className="achievements-1-body-box">
                <h1>100K+</h1>
                <h2>Hours Saved</h2>
              </div>
            </div>
          </div>
          <div className="achievements-2">
            <div className="achievements-2-title">
              <img src={Graph} alt="" />
              <div className="achievements-2-title-data">
                <h1>14%</h1>
                <h2>This week</h2>
              </div>
            </div>
            <div className="achievements-2-body">
              <h1>Issues Fixed</h1>
              <h2>500K+</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="login-main">
        <div className="login-main-warper">
          <div className="login-main-head">
            <div className="login-main-head-title">
              <img src={LogoSmall} alt="" />
              <h1>CodeAnt AI</h1>
            </div>
            <div className="login-main-head-quote">
              <h1>Welcome to CodeAnt AI</h1>
            </div>
            <div className="login-main-head-selection">
              <button
                className={activeButton === 'SAAS' ? 'active' : 'inactive'}
                onClick={() => setActiveButton('SAAS')}
              >
                <h1>SAAS</h1>
              </button>
              <button
                className={activeButton === 'Self Hosted' ? 'active' : 'inactive'}
                onClick={() => setActiveButton('Self Hosted')}
              >
                <h1>Self Hosted</h1>
              </button>
            </div>
          </div>
          <div className="login-main-body">
            {activeButton === 'SAAS' && (
              <> 
                <div className="login-main-body-boxes" onClick={handleLogin}>
                  <img src={Github} alt="" />
                  <h1>Sign in with Github</h1>
                </div>
                <div className="login-main-body-boxes"onClick={handleLogin}>
                  <img src={BitBucket} alt="" />
                  <h1>Sign in with Bitbucket</h1>
                </div>
                <div className="login-main-body-boxes" onClick={handleLogin}>
                  <img src={Azure} alt="" />
                  <h1>Sign in with Azure Devops</h1>
                </div>
                <div className="login-main-body-boxes" onClick={handleLogin}>
                  <img src={fox} alt="" />
                  <h1>Sign in with GitLab</h1>
                </div>
              </>
            )}
            {activeButton === 'Self Hosted' && (
              <>
                <div className="login-main-body-boxes" onClick={handleLogin}>
                  <img src={fox} alt="" />
                  <h1>Self Hosted GitLab</h1>
                </div>
                <div className="login-main-body-boxes" onClick={handleLogin}>
                  <img src={Key} alt="" />
                  <h1>Sign in with SSO</h1>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="login-main-footer">
          <h1>By signing up you agree to the <b>Privacy Policy.</b></h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
