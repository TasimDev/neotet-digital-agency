
import { IoIosStar } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
export default function Home() {

  return (
    <main>
      <section className="home flex">
        <div className="container">
          <div className="home__title">
            <header>
              <span className="text-gray">New Generation Digital Agency.</span><br /><br />
              <h1>With <span className="neotet">NEOTET <IoIosStar className="fa-star star-1" /><IoIosStar className="fa-star star-2" /><IoIosStar className="fa-star star-3" /></span> It's
                possible.</h1>
              <p>Reach perfection and create culture with new
                generation web products to determine the future.</p>

            </header>
          </div>
        </div>
      </section>
      <section id="image" style={{ backgroundImage: 'url(/Home6.png)' }}></section>
      <section id="quote">
        <header><div className="title">We Make New Generation</div>
          <div className="text">
            {'\u00A0'}{'\u00A0'}{'\u00A0'}Websites{'\u00A0'}{'\u00A0'}{'\u00A0'}Web Apps{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Products{'\u00A0'}{'\u00A0'}{'\u00A0'}
            E-Commerce{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}Social Media Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}
            Saas{'\u00A0'}{'\u00A0'}{'\u00A0'}Websites{'\u00A0'}{'\u00A0'}{'\u00A0'}Web Apps{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Products{'\u00A0'}{'\u00A0'}{'\u00A0'}
            E-Commerce{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}Social Media Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}
            Saas{'\u00A0'}{'\u00A0'}{'\u00A0'}Websites{'\u00A0'}{'\u00A0'}{'\u00A0'}Web Apps{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Products{'\u00A0'}{'\u00A0'}{'\u00A0'}
            E-Commerce{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}Social Media Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}
            Saas{'\u00A0'}{'\u00A0'}{'\u00A0'}Websites{'\u00A0'}{'\u00A0'}{'\u00A0'}Web Apps{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Products{'\u00A0'}{'\u00A0'}{'\u00A0'}
            E-Commerce{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}Social Media Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}
            Saas
          </div>

        </header>

      </section>
      <section id="about">
        <div className="container">
          <span className="text-gray">
            WHO WE ARE
          </span>
          <p>
            We are <span className="neotet">Neotet</span> a new genereation digital creative agency focused on crafting
            digital experiences that transcend expectations. Established with a vision for digital excellence.
          </p>
          <a href="contact-page.html" className="btn"><div className="text">Read More</div> <span className="icon"><FaAngleRight /></span></a>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <header className="text-header">
            <div className="text-gray">
              OUR SKILL & SERVICES
            </div>
          </header>
          <main>
            <ul className="services-body">
              <li className="service">
                <header className="service-title">
                  <h2>01. Website Design &
                    Development</h2>
                </header>
                <main className="service-body">
                  At Neotet, we don't just build websites, we craft immersive digital experiences that resonate with your audience. Our website design and development services are a fusion of creativity, technology, and strategic thinking. We are not just in the business of coding; we are in the business of turning dreams into digital reality.
                </main>
                <button>
                  <Link href="#" className="btn"><div className="text">Read More </div><span className="icon"><FaAngleRight /></span></Link>
                </button>
              </li>
              <li className="service">
                <header className="service-title">
                  <h2>02. Web Applications</h2>
                </header>
                <main className="service-body">
                  At Neotet, we're architects of dynamic and functional web applications. Our team specializes in transforming your business processes and ideas into seamless, interactive digital solutions.
                </main>
                <button>
                  <Link href="#" className="btn"><div className="text">Read More </div><span className="icon"><FaAngleRight /></span></Link>
                </button>
              </li>
              <li className="service">
                <header className="service-title">
                  <h2>03. SEO & Marketing</h2>
                </header>
                <main className="service-body">
                  At Neotet, we understand that a stunning digital presence is only effective when it's seen by the right audience. That's where our expertise in SEO (Search Engine Optimization) and marketing comes into play – to elevate your brand, drive organic traffic, and foster meaningful connections with your target audience.
                </main>
                <button>
                  <Link href="#" className="btn"><div className="text">Read More </div><span className="icon"><FaAngleRight /></span></Link>
                </button>
              </li>
              <li className="service">
                <header className="service-title">
                  <h2>04. E-Commerce</h2>
                </header>
                <main className="service-body">
                  At Neotet, we specialize in bringing your business online with seamless and tailored E-Commerce solutions. Our team crafts personalized online shops that not only showcase your products but elevate your entire digital retail experience. From user-centric design to secure transactions, we're here to turn your vision into a thriving online store.
                </main>
                <button>
                  <Link href="#" className="btn"><div className="text">Read More</div> <span className="icon"><FaAngleRight /></span></Link>
                </button>
              </li>
            </ul>
          </main>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="wrapper">
            <header>
              <h3>Let us take your business
                further than it has ever been.
              </h3>
            </header>

            <Link href="/contact" className="btn contact-btn"><div className="text">Contact Us</div> <span className="icon"><FaAngleRight /></span></Link>

          </div>

        </div>
      </section>
      <footer id="footer"></footer>
    </main>
  )
}
