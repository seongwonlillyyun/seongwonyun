import '../css/header.css'
import logo from '../assets/logopic.png'
import Toggle from '../function/Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
return(
    <>
      <div id='header'>
        <div className='header_logo'>
          <img src={logo}className='logopic'/>
          <a className='logo_title' href='#home'>SEONGWON YUN</a>
          
          </div>
        <div className='header_container'>
          <ul className='header_list'>
            <li className='header_link header_aboutme header_normal'><a href='#aboutme'>About Me</a></li>
            <li className='header_link header_cv header_normal'><a href='#cv'>CV</a></li>
            <li className='header_link header_project header_normal'><a href='#projects'>Projects</a></li>
            <li className='header_link header_research header_normal'><a href='#research'>Research</a></li>
            <li className='header_link header_contact header_normal'><a href='#contact'>Contact</a></li>
            <li><div className='header_button'><Toggle/></div></li>
          </ul>
        </div>
        <button className='hamburger' onClick={()=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faBars} /></button>
        <nav className={`mobileNav ${isOpen ? "open" : ""}`}>
          <a href='#aboutme' onClick={() => setIsOpen(false)}>About Me</a>
          <a href='#cv' onClick={() => setIsOpen(false)}>CV</a>
          <a href='#projects' onClick={() => setIsOpen(false)}>Projects</a>
          <a href='#research' onClick={() => setIsOpen(false)}>Research</a>
          <a href='#contact' onClick={() => setIsOpen(false)}>Contact</a>
          <div className='header_button ham_toggle'><Toggle/></div>
        </nav>
      </div>
    </>
  );
}
export default Header;
