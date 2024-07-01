import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <Link href="/">
            <Image height="30" width="150" className={styles.footerLogoImage} src="/logo.png" alt="Decimal Factor Logo" />
          </Link>
        </div>
        <div className={styles.footerNavContainer}>
          {footerNavigationData.map((navItem, index) => (
            <FooterNavItem key={index} title={navItem.title} href={navItem.href} />
          ))}
        </div>
        <div className={styles.footerSocialContainer}>
          <a href="https://www.facebook.com/DecimalFactor" aria-label="Facebook">
            <Image height="30" width="30" src="/facebook-icon.png" alt="Facebook Icon" />
          </a>
          <a href="https://twitter.com/DecimalFactor" aria-label="Twitter">
            <Image height="30" width="30" src="/twitter-icon.png" alt="Twitter Icon" />
          </a>
          <a href="https://www.linkedin.com/company/decimal-factor/" aria-label="LinkedIn">
            <Image height="30" width="30" src="/linkedinIcon.png" alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Decimal Factor. All Rights Reserved.</p>
        <div className={styles.footerBottomLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms and conditions</Link>
          <Link href="/refunds">Refunds</Link>
        </div>
      </div>
    </footer>
  );
}

const footerNavigationData = [
  { title: 'Products', href: '/financial-products' },
  { title: 'Services', href: '/services' },
  { title: 'About Us', href: '/about-us' },
  { title: 'Support', href: '/support' },
];

function FooterNavItem({ title, href }) {
  return (
    <div className={styles.footerNavItem}>
      <Link href={href} className={styles.footerMainNavItem}>{title}</Link>
    </div>
  );
}