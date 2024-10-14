import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './sidebar.module.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={styles.toggleButton}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                概要
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.navLink}>
                サービス
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
