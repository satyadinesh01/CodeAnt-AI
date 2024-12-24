import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../assets/Subtract2.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { IoMdCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import '../Repository-page/RepositoryPage.css';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='Repository-nav'>
            <div className="Repository-nav-wrapper">
                <div className="Repository-nav-logo">
                    <img src={Logo} alt="Logo" />
                    <h1>CodeAnt AI</h1>
                </div>
                <div className="Repository-nav-menu" onClick={toggleMenu}>
                    <i>
                        {isMenuOpen ? (
                            <IoClose className='menu-nav' />
                        ) : (
                            <IoMenu className='menu-nav' />
                        )}
                    </i>
                </div>
            </div>
            {isMenuOpen &&
                <nav className="NavLinks">
                    <div className="side-bar-select">
                        <select id="options">
                            <option value="option1"><h1>UtkarshDhairyaPanwar</h1></option>
                            <option value="option2"><h1>Option 2</h1></option>
                            <option value="option3"><h1>Option 3</h1></option>
                        </select>
                    </div>
                    <div className="side-bar-options">
                        <button><AiOutlineHome />Repositories</button>
                        <button><HiOutlineCode />AI Code Review</button>
                        <button><IoMdCloudOutline />Cloud Security</button>
                        <button><LuBookText />How to Use</button>
                        <button><FiSettings />Settings</button>
                        <button><IoCallOutline />Support</button>
                        <button><MdLogout />Logout</button>
                    </div>
                </nav>
            }
        </div>
    );
}

export default Nav;
