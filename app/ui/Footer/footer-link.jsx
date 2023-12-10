
import Link from 'next/link';
import { FaLinkedinIn, FaBehance, FaDribbble, FaInstagram, FaFacebookF } from "react-icons/fa";
const links = [
    { name: 'Linkedin', href: '/', title: 'Linkedin account for Neotet - Digital Agency.', icon: <FaLinkedinIn className='icon' /> },
    { name: 'Behance', href: '/', title: 'Behance account for Neotet - Digital Agency', icon: <FaBehance className='icon' /> },
    { name: 'Dribbble', href: '/', title: 'Dribbble account Neotet - Digital Agency', icon: <FaDribbble className='icon' /> },
    { name: 'Instagram', href: '/', title: "Instagram account for Neotet - Digital Agency", icon: <FaInstagram className='icon' /> },
    { name: 'Facebook', href: '/', title: "Facebook account for Neotet - Digital Agency", icon: <FaFacebookF className='icon' /> }
];
const FooterLink = () => {
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
                            >{link.icon}</Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default FooterLink;