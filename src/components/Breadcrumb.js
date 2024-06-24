"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumb.module.css';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav className={styles.breadcrumb}>
      <Link legacyBehavior href="/">
        <a className={styles.breadcrumbItem}>Home</a>
      </Link>
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;

        return (
          <span key={index} className={styles.breadcrumbSeparator}>
             &gt;
            {!isLast ? (
              <Link legacyBehavior href={href}>
                <a className={styles.breadcrumbItem}>{capitalize(segment)}</a>
              </Link>
            ) : (
              <span className={styles.breadcrumbItem}><strong>{capitalize(segment)}</strong></span>
            )}
          </span>
        );
      })}
    </nav>
  );
}