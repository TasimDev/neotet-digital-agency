import Link from "next/link"
import FooterLink from "./footer-link"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__top">
                    <span>Are you ready?</span>
                    <div className="title">Let's start</div>
                </div>
                <div className="footer__center">
                    <ul className="footer-list">
                        <li className="email">
                            <Link href="mailto:neotet.co@gmail.com" rel="noopener noreferrer" title='Drop a message to Neotet | Digital Agency'>neotet.co@gmail.com</Link>
                        </li>
                        <li className="quote">
                            <Link href="/contact" title="Contact with our Company, Neotet | Digital Agency">Get a quote</Link>
                        </li>
                        <li className="place">
                            <p title="Where we are from, Neotet | Digital Agency">Ruse, Ruse, Bulgaria 7000</p>
                        </li>
                    </ul>
                </div>
                <div className="footer__socials">
                    <ul className="socials">
                        <FooterLink />
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer