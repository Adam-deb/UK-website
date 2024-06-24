import Header from "../../components/Header"
import OurTeam from "../../components/our-team"
import Breadcrumb from "../../components/Breadcrumb";
import styles from "./page.module.css";

export default function AboutUs() {
  
  
  return (
  <>
    <Header/>
    <main className={styles.main}>
      <Breadcrumb/>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Empowering Small Businesses</h1>
          <p>Tailored Small Business Funding</p>
          <a href="https://portal.decimalfactor.com/login"><button className={styles.ctaButton}>Get Started</button></a>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          At Decimal Factor, we are passionate about empowering small businesses by providing them with the financial support they need to thrive. Regulated and authorized by the Financial Conduct Authority in the UK (FRN: 727177), our mission is to offer responsible funding solutions tailored to the unique needs of small and medium enterprises (SMEs).
        </p>
      </section>

      {/* Our Journey Section */}
      <section className={styles.section}>
        <h2>Our Journey</h2>
        <div className={styles.journeyContent}>
          <img src="./manoj.jpg" alt="Founder Manoj Karkhanis" className={styles.founderImage} />
          <div>
            <p>
              Founded in 2008 by serial entrepreneur Manoj Karkhanis, Decimal Factor emerged as a beacon of hope in the wake of the financial crisis. Witnessing firsthand the struggles that businesses faced in securing funding from traditional high street banks, Manoj was driven to create an alternative finance credit brokerage firm that would bridge this gap.
            </p>
            <p>
              Since our inception, we have successfully helped thousands of SMEs grow and achieve their potential. Our range of cash flow products, including secured and unsecured loans, has enabled businesses to access the funding they need to navigate challenges and seize opportunities.
            </p>
          </div>
        </div>
      </section>s

      {/* Our Commitment Section */}
      <section className={styles.section}>
        <h2>Our Commitment</h2>
        <p>
          We are dedicated to making business loans accessible to small businesses that are often overlooked by conventional lenders. Our tailored funding solutions are designed to meet the specific needs of each business, ensuring they have the financial resources to succeed.
        </p>
      </section>
      <section className="scroll-margin-top" id="our-team">
        <OurTeam/>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Grow Your Business?</h2>
        <button className={styles.ctaButton}>Apply Now</button>
      </section>
    </main>
  </>
  );
}