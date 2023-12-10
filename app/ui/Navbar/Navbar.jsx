'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './nav-links'
import NavLinksMobile from './nav-link-mobile'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const width = window.innerWidth;
            const headerNav = document.querySelector('#header');

            if (width > 1200) {
                if (scrollTop > lastScrollTop) {
                    headerNav.style.top = '-90px';
                } else {
                    headerNav.style.top = '0';
                }
                setLastScrollTop(scrollTop);
            } else {
                headerNav.style.top = '0';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const handleToggleMenu = () => {
        const headerMenu = document.querySelector('#header-menu');
        const headerBtn = document.querySelector('#header-btn');
        const headerNav = document.querySelector('#header');
        const headerListItem = document.querySelectorAll('.header_list-item');

        headerMenu.classList.toggle('active');
        headerBtn.classList.toggle('active');
        headerNav.classList.toggle('active');

        headerListItem.forEach((item) => {
            item.addEventListener('click', () => {
                headerMenu.classList.toggle('active');
                headerBtn.classList.toggle('active');
                headerNav.classList.toggle('active');
            });
        });
    };

    return (
        <header className="header" id="header">
            <div className="container header__container flex">
                <Link href="/" className="header__logo flex">
                    <Image
                        src='/logo/neotet-logo.png'
                        width={110}
                        height={45}
                        alt='Logo for Neotet Digital Agency'
                        id="logo"
                    />
                    <span>NEOTET</span>
                </Link>
                <ul className="header__menu flex">
                    <NavLinks />
                </ul>
                <Link
                    href="/contact"
                    title='Contact with Agency, Neotet - Digital Agency'
                >
                    <button className="btn header__button">Contact Us</button>
                </Link>

                {/* <!--Mobile and Tablet Media--> */}
                <div className="header__button-mobile" id="header-btn" onClick={handleToggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <ul className="header__menu-mobile flex" id="header-menu">
                    <NavLinksMobile />
                    <li className="social">
                        <p>Drop us a line </p>
                        <Link href="mailto:neotet.co@gmail.com" rel="noopener noreferrer" title='Drop a message to Neotet | Digital Agency'>neotet.co@gmail.com</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar