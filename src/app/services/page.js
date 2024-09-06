import Image from 'next/image';
import Header from "../../components/Header"
import Breadcrumb from "../../components/Breadcrumb"
import Footer from '@/components/Footer';
import styles from "./page.module.css"

export default function Services() {

    return (
        
    <>
    <Header/>
    <Breadcrumb/>
    <section className={`${styles.serviceDetails} scroll-margin-top`} id="payment-services">
      <div className={styles.container}>
        <div className={styles.serviceInfo}>
          <h2>Payment Services</h2>
          <h3>Searching for the perfect secure payment system solution for your business?</h3>
          <ul>
            <li><strong>Service Guarantee:</strong> Available around the clock to provide advice, information and support.</li>
            <li><strong>Terminal Guarantee:</strong> Ensure your equipment is working and compliant at all times with free warranty and software upgrades</li>
            <li><strong>Foresight Guarantee:</strong> We will keep you updated on the latest and best technology to ensure your business takes all the right turns</li>
            <li><strong>Pricing Guarantee:</strong> We will aim to meet or beat any lower rate offered by the competition during your contract.</li>
            <li><strong>Value Guarantee:</strong> Use Gift cards, Tax-free, DCC, Reporting, and Business Business Funding to grow your business.</li>
          </ul>
          <a href="mailto:info@decimalfactor.com?subject=Application%20for%20Payment%20Services&body=Placeholder%20Message">
            <button className={styles.button}>Apply Now for a Terminal</button>
          </a>
        </div>
        <div className={styles.serviceInfoImage}>
          <Image width="500" height="300" src="/Payment-services-image.jpg" alt="Payment Services" />
        </div>
      </div>
    </section>
      <Footer />
    </>
    )
}