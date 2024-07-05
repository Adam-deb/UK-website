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

      <section className={styles.paymentServicesInformation}>
        <div className={styles.paymentServicesHeading}>
          <h2>Why Choose Decimal Factor for Your Card Payment Needs?</h2>
          <div className={styles.paymentServicesSubheading}>
            <p>Whether you need chip & PIN, Contactless PDQ machines, mobile card payment solutions, virtual terminals, or online payment systems, Decimal Factor offers cost-effective payment processing solutions tailored for your business. Contact us today to discuss your needs, and our Merchant Services Managers will ensure you get the most suitable and cost-effective PDQ machine for your operations.</p>
          </div>
        </div>
        <div className={styles.benefits}>
          <h3>Benefits</h3>
          <ul>
            <li><strong>Service Guarantee:</strong> Available around the clock to provide advice, information and support.</li>
            <li><strong>Terminal Guarantee:</strong> Ensure your equipment is working and compliant at all times with free warranty and software upgrades </li>
            <li><strong>Foresight Guarantee: </strong> We will keep you updated on the latest and best technology to ensure your business takes all the right turns</li>
            <li><strong>Pricing Guarantee: </strong> We will aim to meet or beat any lower rate offered by the competition during your contract.</li>
            <li><strong>Value Guarantee: </strong> Use Gift cards, Tax-free, DCC, Reporting and Business Business Funding to grow your business.</li>
          </ul>
        </div>
        <div className={styles.callToAction}>
          <a href="mailto:info@decimalfactor.com?subject=Application%20for%20Payment%20Services&body=Placeholder%20Message">
            <button className={styles.button}>Apply Now for a Terminal</button>
          </a>
        </div>
      </section>
      <Footer />
    </>
    )
}