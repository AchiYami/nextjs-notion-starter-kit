import { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const links: { href: string, text: string }[] = [
    { href: '/about', text: 'About' },
    { href: '/social', text: 'Social' },
    { href: '/blog', text: 'Blog' },
];

const Navbar: FunctionComponent = () => (
    <div className={styles.navbar}>
        <Link key="/" href="/">
            <img
                src="/images/starpoint-logo-updated.png"
                alt="Starpoint Studios"
                className={styles.homeicon}
            />
        </Link>
        <nav>
        <Link key="a" href="/games">Games</Link>
         <Link key="a" href="/blog">Blog</Link>
         <Link key="a" href="/about">About</Link>
        </nav>
    </div>
);

export default Navbar;
