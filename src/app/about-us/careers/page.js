import Header from "../../../components/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import styles from "./page.module.css";

// Define available vacancies variable
const availableVacancies = [];

export default function Careers() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Breadcrumb />

        <section className={`${styles.heroSection} ${styles.redBackground}`}>
          <div className={styles.heroContent}>
            <h1>Join Our Team</h1>
            <p>Explore exciting career opportunities at Decimal Factor.</p>
          </div>
        </section>

        {availableVacancies.length === 0 ? (
          <section className={`${styles.section} ${styles.greyBackground} Jobs`}>
            <p>No current job openings. Please check back later for opportunities or for speculative applications, email your CV to info@decimalfactor.com.</p>
          </section>
        ) : (
          <section className={`${styles.section} ${styles.greyBackground} Jobs`}>
            <h2>Current Openings</h2>
            <div className={styles.jobListing}>
              {availableVacancies.map((job, index) => (
                <div key={index} className={styles.jobItem}>
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <a href="#">Apply Now</a>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
