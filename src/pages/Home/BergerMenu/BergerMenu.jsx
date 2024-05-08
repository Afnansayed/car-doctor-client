
import { slide as Menu } from 'react-burger-menu'
import './Bergarmenu.css'
const BergerMenu = () => {


    return (
        <Menu  className='text-gray-200'>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="services" className="menu-item" href="/services">
          Services
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    );
};

export default BergerMenu;