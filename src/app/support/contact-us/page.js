import Header from "@/components/Header"; // Adjust path as per your project structure
import Breadcrumb from "@/components/Breadcrumb"; // Adjust path as per your project structure
import styles from './page.module.css'; // CSS module for page-specific styles

export default function ContactUs() {
    return (
        <>
            <Header /> 
            <main className={styles.main}>
                <Breadcrumb />

                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1>Contact Us</h1>
                        <p>Get in touch with us for any inquiries or support.</p>
                    </div>
                </section>

                

                <section className={styles.contactDetailsSection}>
                    <div className={styles.contactDetails}>
                        <h2>Contact Details</h2>
                        <ul>
                            <li>
                                <strong>Address:</strong> Decimal Factor Limited, Level 39, One Canada Square, Canary Wharf, London E14 5AB, United Kingdom.
                            </li>
                            <li>
                                <strong>Email:</strong> info@decimalfactor.com
                            </li>
                            <li>
                                <strong>Phone:</strong> 0800 612 6961
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.contactSection}>
                    <div className={styles.contactContent}>
                        <h2>Send Us a Message</h2>
                        <form className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>Send Message</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}