import Link from "next/link"


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
                            <p>Ruse, Ruse, Bulgaria 7000</p>
                        </li>
                    </ul>
                </div>
                <div className="footer__socials">
                    <ul className="socials">
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer