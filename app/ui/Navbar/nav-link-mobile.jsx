"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/', title: 'Neotet | Digital Agency' },
    { name: 'Services', href: '/services', title: 'Learn more about Services to our comoany, Neotet - Digital Agency.' },
    { name: 'Projects', href: '/projects', title: 'Projects created by Neotet - Digital Agency' },
    { name: 'Process', href: '/process', title: 'Learn more about the process, and how we work with our clients of out company, Neotet - Digital Agency' },
    { name: 'About', href: '/about', title: 'Learn more about our company, Neotet - Digital Agency' },
    { name: 'Contact', href: '/contact', title: 'Contact with Agency, Neotet - Digital Agency' }
];
const NavLinksMobile = () => {
    const pathname = usePathname();
    return (
        <>
            {
                links.map((link) => {
                    return (
                        <li key={link.name}>
                            <Link
                                key={link.name}
                                href={link.href}
                                title={link.title}
                                className='header_list-item'
                            >{link.name}</Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default NavLinksMobile