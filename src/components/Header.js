"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from "./Header.module.css";

// Define navigation data
const navigationData = [
  {
    title: 'Products',
    href: '/financial-products', // Add href for the main navigation item
    subItems: [
      { title: 'Unsecured business loans', href: '/financial-products#unsecured-business-loan' },
      { title: 'Merchant Cash Advance (Flexi-Funding)', href: '/financial-products#merchant-cash-advance' },
      { title: 'Invoice Financing', href: '/financial-products#invoice-financing' }
    ]
  },
  // {
  //   title: 'Services',
  //   href: '/services', // Add href for the main navigation item
  //   subItems: [
  //     { title: 'Payment services', href: '/services' }
  //   ]
  // },
  {
    title: 'About Us',
    href: '/about-us', // Add href for the main navigation item
    subItems: [
      { title: 'Our Story', href: '/about-us' },
      { title: 'Our Team', href: '/about-us#our-team' },
      { title: 'Careers', href: '/about-us/careers' },
    ]
  },
  {
    title: 'Support',
    href: '/support', // Add href for the main navigation item
    subItems: [
      { title: 'Contact Us', href: '/support#contact-us' },
      { title: 'FAQs', href: '/support' }
    ]
  },
  {
    title: 'Apply/Login',
    href: '#', // Add href for the main navigation item
    subItems: [
      { title: 'Apply', href: "https://portal.decimalfactor.com/request-a-quote" },
      { title: 'Login', href: "https://portal.decimalfactor.com/Login" }
    ]
  },
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
            <Image height="30" width="150" className={styles.logoImage} src="/logo.png" alt="Decimal Factor Logo" />
          </Link>
        </div>
        <nav ref={navRef} className={`${styles.navbar} ${menuOpen ? styles.navOpen : ''}`}>
          <ul>
            {navigationData.map((navItem, index) => (
              <NavItem
                key={index}
                title={navItem.title}
                href={navItem.href} // Pass href to NavItem
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
          <a href="https://portal.decimalfactor.com/login"><button className={styles.loginButton}>Login</button></a>
          <a href="https://portal.decimalfactor.com/request-a-quote"><button className={styles.applyButton}>Apply Now</button></a>
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
          <Image height="20" width="20" className={styles.countryFlag} src="/uk-flag.png" alt="UK Flag" />
          UK
          <Image height="50" width="50" className={styles.arrowIcon} src="/down-arrow.png" alt="Down Arrow" />
        </div>
        {countryMenuOpen && (
          <div className={styles.otherCountriesContainer}>
            <ul>
              <li>
                <a href="https://www.decimalfactor.com/" aria-label="US">
                  <Image height="20" width="20" className={styles.countryFlag} src="/us-flag.png" alt="US Flag" />
                  US
                </a>
              </li>
              <li>
                <a href="https://canada.decimalfactor.com/" aria-label="Canada">
                  <Image height="20" width="20" className={styles.countryFlag} src="/canada-flag.png" alt="Canada Flag" />
                  CA
                </a>
              </li>
              <li>
                <a href="https://www.decimalfactor.ae/" aria-label="UAE">
                  <Image height="20" width="20" className={styles.countryFlag} src="/UAE-flag.png" alt="UAE Flag" />
                  UAE
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

function NavItem({ title, href, activeNavItem, setActiveNavItem, subItems, handleSubItemClick, isMobileView}) {
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

  if (!isMobileView && title === "Apply/Login") {
    return null;
  }

  return (
    <li
      className={`${activeNavItem === title.toLowerCase() ? styles.active : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.navItemTitleContainer}>
        <Link className={styles.mainNavItem} href={href}>{title}</Link>
        {subItems.length > 0 && (
          <Image height="50" width="50" className={styles.arrowIcon} src="/down-arrow.png" alt="Down Arrow" />
        )}
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