import React, { useState, useRef, useEffect, useContext } from "react";
import "./Navbar.css";
import logo from '../../assets/chem.png';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const search = searchTerm.toLowerCase().trim();
      const match = products.find(
        (p) =>
          p.name.toLowerCase() === search ||
          (p.cas && p.cas.toLowerCase() === search)
      );

      if (match) {
        navigate(`/products/${match.code}`);
      } else {
        navigate(`/products?q=${encodeURIComponent(searchTerm)}`);
      }
      setSearchTerm('');
    }
  };

  // 👇 Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    <div className="top-bar">
      <div className="scrolling-wrapper">
        <div className="scrolling-text">
          🚚 Free shipping for UK, USA, European countries
        </div>
      </div>
      <div className="contact-info">
        <a href="mailto:info@exeluslabs.com?subject=Inquiry&body=Hello%20Exelus%20Labs,">info@exeluslabs.com</a>
        <a href="tel:+917989540212">☎ +91 79895 40212</a>
      </div>
    </div>

    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li><Link to="/Home" onClick={closeDropdown}>Home</Link></li>
        <li><Link to="/Products" onClick={closeDropdown}>Products</Link></li>

        <li className="dropdown" ref={dropdownRef}>
          <span className="dropdown-toggle" onClick={toggleDropdown}>
            Services
          </span>
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/services" onClick={closeDropdown}>Custom Synthesis</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/About Us" onClick={closeDropdown}>About Us</Link></li>
        <li><Link to="/Contact Us" onClick={closeDropdown}>Contact Us</Link></li>
      </ul>

      <div className="search-box">
  <input
    type="text"
    placeholder="Search by name or CAS"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={handleSearch}
  />
  <button className="search-btn" onClick={() => handleSearch({ key: 'Enter' })}>
    🔍
  </button>
</div>

      {/* Language Bar */}
<div className="language-bar">
  <select defaultValue="">
    <option value="" disabled>SELECT LANGUAGE</option>
    <option value="en">ENGLISH</option>
    <option value="zh">CHINESE</option>
    <option value="ko">KOREAN</option>
    <option value="pt">PORTUGUESE</option>
    <option value="ru">RUSSIAN</option>
    <option value="es">SPANISH</option>
    <option value="he">HEBREW (ISRAEL)</option>
    <option value="it">ITALIAN</option>
  </select>
</div>

    </div>
    </>
  );
};

export default Navbar;
