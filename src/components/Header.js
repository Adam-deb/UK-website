"use client"

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from "./Header.module.css";

// Define navigation data
const navigationData = [
  {
    title: 'Products',
    subItems: [
      { title: 'Unsecured business loans', href: '/financial-products#unsecured-business-loan' },
      { title: 'Merchant Cash Advance (Flexi-Funding)', href: '/financial-products#merchant-cash-advance' },
      { title: 'Invoice Financing', href: '/financial-products#invoice-financing' }
    ]
  },
  {
    title: 'Services',
    subItems: [
      { title: 'Payment services', href: '/services' }
    ]
  },
  {
    title: 'About Us',
    subItems: [
      { title: 'Our Story', href: '/about-us' },
      { title: 'Our Team', href: '/about-us#our-team' },
      { title: 'Careers', href: '/about-us/careers' },
      { title: 'Blogs', href: '/blogs' }
    ]
  },
  {
    title: 'Support',
    subItems: [
      { title: 'Contact Us', href: '/support/contact-us' },
      { title: 'FAQs', href: '/support/faq' }
    ]
  }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const navRef = useRef();
  const countrySelectorRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = () => {
    setCountryMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setCountryMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      (navRef.current && !navRef.current.contains(event.target)) &&
      (countrySelectorRef.current && !countrySelectorRef.current.contains(event.target))
    ) {
      setActiveNavItem(null); // Close sub-menu when clicking outside the navigation area
      setCountryMenuOpen(false); // Close country sub-menu when clicking outside the navigation area
    }
  };

  const handleSubItemClick = () => {
    setActiveNavItem(null); // Close sub-menu when a sub-item is clicked
  };

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 970);
    };

    updateView();
    window.addEventListener('resize', updateView);

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', updateView);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoNavContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <img className={styles.logoImage} src="/logo.png" alt="Decimal Factor Logo" />
          </Link>
        </div>
        <nav ref={navRef} className={`${styles.navbar} ${menuOpen ? styles.navOpen : ''}`}>
          <ul>
            {navigationData.map((navItem, index) => (
              <NavItem
                key={index}
                title={navItem.title}
                activeNavItem={activeNavItem}
                setActiveNavItem={setActiveNavItem}
                subItems={navItem.subItems}
                handleSubItemClick={handleSubItemClick}
                isMobileView={isMobileView}
              />
            ))}
          </ul>
        </nav>
        <div className={styles.headerButtonsContainer}>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.applyButton}>Apply Now</button>
        </div>
        <button className={styles.menuToggle} aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}></span>
        </button>
      </div>
      <div 
        className={styles.countrySelectorContainer} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        ref={countrySelectorRef}
      >
        <div className={styles.defaultCountry}>
          <img className={styles.countryFlag} src="/uk-flag.png" alt="UK Flag" />
          UK
        </div>
        {countryMenuOpen && (
          <div className={styles.otherCountriesContainer}>
            <ul>
              <li>
                <a href="https://www.decimalfactor.com/" aria-label="US">
                  <img className={styles.countryFlag} src="/us-flag.png" alt="US Flag" />
                  US
                </a>
              </li>
              <li>
                <a href="https://canada.decimalfactor.com/" aria-label="Canada">
                  <img className={styles.countryFlag} src="/canada-flag.png" alt="Canada Flag" />
                  CA
                </a>
              </li>
              <li>
                <a href="https://www.decimalfactor.ae/" aria-label="UAE">
                  <img className={styles.countryFlag} src="/UAE-flag.png" alt="UAE Flag" />
                  UAE
                </a>
              </li>
              <li>
                <a href="https://corporate.decimalfactor.com/" aria-label="Corporate">
                  <img className={styles.countryFlag} src="/international-logo.png" alt="Corporate Logo" />
                  Corp
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

function NavItem({ title, activeNavItem, setActiveNavItem, subItems, handleSubItemClick, isMobileView }) {
  const handleMouseEnter = () => {
    if (!isMobileView) {
      setActiveNavItem(title.toLowerCase());
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileView) {
      setActiveNavItem(null);
    }
  };

  const handleClick = () => {
    if (isMobileView) {
      setActiveNavItem(activeNavItem === title.toLowerCase() ? null : title.toLowerCase());
    }
  };

  return (
    <li
      className={`${activeNavItem === title.toLowerCase() ? styles.active : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.navItemTitleContainer}>
        {title}
        <img className={styles.arrowIcon} src="/down-arrow.png" alt="Down Arrow" />
      </div>
      {activeNavItem === title.toLowerCase() && (
        <ul className={styles.subMenu}>
          {subItems.map((item, index) => (
            <li key={index} onClick={handleSubItemClick}>
              <Link href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
