import React, { useState } from 'react';
import './RepositoryPage.css'
import '../Nav-Links/NavLinks'
import Nav from '../Nav-Links/Nav'
import Logo from '../../assets/Subtract2.png'
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { IoMdCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";






function RepositoryPage() {
  const [selectedOption, setSelectedOption] = useState("");
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div className='RepositoryPage'>
        <div className="side-bar">
          <div className="side-bar-main">
            <div className="side-bar-title"> 
              <div className='side-bar-title-content'>
                <img src={Logo} alt="" /> <h1>CodeAnt AI</h1>
              </div>
              <div className="side-bar-select">
                <select id="options" value={selectedOption} onChange={handleChange}>
                  {/* <option value="" disabled>Select one</option> */}
                  <option value="option1"><h1>UtkarshDhairyaPanwar</h1></option>
                  <option value="option2"><h1>Option 2</h1></option>
                  <option value="option3"><h1>Option 3</h1></option>
                </select>
              </div>
            </div>
            <div className="side-bar-options">
              <button className='btn-active'><AiOutlineHome />Repositories</button>
              <button className='btn-inactive'><HiOutlineCode />AI Code Review</button>
              <button className='btn-inactive'><IoMdCloudOutline />Cloud Security</button>
              <button className='btn-inactive'><LuBookText />How to Use</button>
              <button className='btn-inactive'><FiSettings />Settings</button>
            </div>
          </div>
          <div className="side-bar-footer">
            <button><IoCallOutline />Support</button>
            <button><MdLogout />Logout</button>
          </div>
        </div>
        <div className="Repository-container">
          <Nav></Nav>
          <div className="container-wrapper">
            <div className="container-top">
              <div className="container-top-head">
                <div className="top-head-text">
                  <h1>Repositories</h1>
                  <h2>33 total repositories</h2>
                </div>
                <div className="top-head-buttons">
                  <button><FiRefreshCw />Refresh All</button>
                  <button className='add-repo-btn'><MdAdd />Add Repository</button>
                </div>
              </div>
              <div className="container-top-body">
                <input type="text" placeholder='Search Repositories' />
              </div>
            </div>
            <div className="container-bottom">
{/* ================================1 */}
              <div className="container-box">
                  <div className="container-class">
                    <div className="class-top">
                      <h1>design-system</h1>
                      <h2>Public</h2>
                    </div>
                    <div className="class-bottom">
                      <h1>React <i><GoDotFill /></i></h1>
                      <h2><FiDatabase />7320 KB</h2>
                      <h3>Updated 1 day ago</h3>
                    </div>
                  </div>
              </div>
{/* =================2 */}
              <div className="container-box">
                  <div className="container-class">
                    <div className="class-top">
                      <h1>codeant-ci-app</h1>
                      <h2>Private</h2>
                    </div>
                    <div className="class-bottom">
                      <h1>Javascript <i><GoDotFill /></i></h1>
                      <h2><FiDatabase />5871 KB</h2>
                      <h3>Updated 2 day ago</h3>
                    </div>
                  </div>
              </div>
{/* ========================3 */}
              <div className="container-box">
                  <div className="container-class">
                    <div className="class-top">
                      <h1>analytics-dashboard</h1>
                      <h2>Private</h2>
                    </div>
                    <div className="class-bottom">
                      <h1>Python <i><GoDotFill /></i></h1>
                      <h2><FiDatabase />4521 KB</h2>
                      <h3>Updated 5 day ago</h3>
                    </div>
                  </div>
              </div>
{/* ==========================4 */}
              <div className="container-box">
                  <div className="container-class">
                    <div className="class-top">
                      <h1>mobile-appm</h1>
                      <h2>Public</h2>
                    </div>
                    <div className="class-bottom">
                      <h1>Swift <i><GoDotFill /></i></h1>
                      <h2><FiDatabase />3096 KB</h2>
                      <h3>Updated 3 day ago</h3>
                    </div>
                  </div>
              </div>
{/* ================================5 */}
              <div className="container-box">
                  <div className="container-class">
                    <div className="class-top">
                      <h1>e-commerce-platform</h1>
                      <h2>Private</h2>
                    </div>
                    <div className="class-bottom">
                      <h1>Java <i><GoDotFill /></i></h1>
                      <h2><FiDatabase />6210 KB</h2>
                      <h3>Updated 6 day ago</h3>
                    </div>
                  </div>
              </div>
{/* ==================================6 */}
              <div className="container-box">
                  <div className="container-class">
                    <div className="class-top">
                      <h1>blog-website</h1>
                      <h2>Public</h2>
                    </div>
                    <div className="class-bottom">
                      <h1>HTML/CSS <i><GoDotFill /></i></h1>
                      <h2><FiDatabase />1876 KB</h2>
                      <h3>Updated 4 day ago</h3>
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default RepositoryPage