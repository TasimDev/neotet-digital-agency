import FooterLink from "./footer-link"



const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer__container">
                <div className="footer__top">
                    <span>Are you ready?</span>
                    <div className="title">Let's start</div>
                </div>
                <div className="footer__center">
                    <ul className="footer-list">
                        <li className="services">
                            <header><h2>Services</h2></header>
                            <a href="#">Websites</a>
                            <a href="#">Web Apps</a>
                            <a href="#">E-Commerce</a>
                            <a href="#">Social Media Marketing</a>
                        </li>
                        <li className="about">
                            <header><h2>Neotet</h2></header>
                            <a href="#">About</a>
                            <a href="#">Our Team</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact us</a>
                        </li>
                        <li className="contact">
                            <header><h2>Find us</h2></header>
                            <div className="email">
                                <a href="mailto:neotet.co@gmail.com">hello@neotet.co</a>
                            </div>
                            <div className="place">
                                <p> Ruse, Bulgaria </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="footer__socials">
                    <div>
                        <p>Copyright &copy NEOTET, 2024. All rights reserved.</p>
                    </div>
                    <ul className="socials">
                        <FooterLink />
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer