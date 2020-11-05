import ProfileIcon from './icons/ProfileIcon';
import { FaBars } from 'react-icons/fa'; // icon directly from React
import { FaAt } from 'react-icons/fa'; // icon directly from React
import { FaCopy } from 'react-icons/fa'; // icon directly from React
import { FaChevronRight } from 'react-icons/fa'; // icon directly from React
import { FaChevronLeft } from 'react-icons/fa'; // icon directly from React

import React, {useState, useEffect, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';


function App() {
  return (
    <Navbar>

      <NavItem icon={<FaBars/>}> 
        <DropdownMenu/>
      </NavItem>

    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props){
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}> 
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}




function DropdownMenu (){

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props){
    return(
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>

        <span className="icon-button">{props.leftIcon || props.profileIcon || props.contactIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>

      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition 
        in={activeMenu === 'main'} 
        timeout={500}
        classNames="menu-primary"
        unmountOnExit 
        onEnter={calcHeight}
        >
          {/* MAIN MENU # */}
          <div className="menu">
            <DropdownItem profileIcon={<ProfileIcon/>}>About me</DropdownItem>
              <DropdownItem
              leftIcon={<FaCopy/>}
              rightIcon={<FaChevronRight />}
              goToMenu="subMenu">
              Projects
              </DropdownItem>
            <DropdownItem contactIcon={<FaAt/>}>Contact Me</DropdownItem>
          </div>
      </CSSTransition>

          {/* PROJECTS SUBMENU */}
      <CSSTransition 
        in={activeMenu === 'subMenu'} 
        timeout={500} 
        unmountOnExit 
        classNames="menu-secondary"
        onEnter={calcHeight}
        >
          <div className="menu">
            <DropdownItem leftIcon={<FaChevronLeft />} goToMenu="main" />
            <DropdownItem>Project 1</DropdownItem>
            <DropdownItem>Project 2</DropdownItem>
            <DropdownItem>Project 3</DropdownItem>
            <DropdownItem>Project 4</DropdownItem>
            <DropdownItem>Project 5</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}




export default App;
