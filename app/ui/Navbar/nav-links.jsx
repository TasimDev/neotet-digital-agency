"use client"
import Link from 'next/link';


const links = [
    { name: 'Projects', href: '/projects', title: 'Projects created by Neotet - Digital Agency' },
    { name: 'Process', href: '/process', title: 'Learn more about the process, and how we work with our clients of out company, Neotet - Digital Agency' },
    { name: 'About', href: '/about', title: "Learn more about our company, Neotet - Digital Agency" }
];
const NavLinks = () => {

    return (
        <>
            {
                links.map((link) => {
                    return (
                        <li key={link.name} className='list-item'>
                            <Link
                                key={link.name}
                                href={link.href}
                                title={link.title}
                                className="links"

                            >{link.name}</Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default NavLinks