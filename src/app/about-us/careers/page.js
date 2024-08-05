"use client"

import React, { useState } from "react";
import Header from "../../../components/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

// Define available vacancies variable
const availableVacancies = [
  {
    title: "Funding Associate Intern",
    description: "We are seeking a self-motivated and detail-oriented individual to join our team as a Funding Associate Intern. This role offers an excellent opportunity to gain hands-on experience in the UK’s finance sector and to contribute to our mission of providing innovative funding solutions.",
    link: "mailto:info@decimalfactor.com?subject=Funding%20Associate%20Internship%20Application&body=Placeholder%20Message",
    responsibilities: [
      "Conduct research and analysis on funding opportunities and financial trends.",
      "Support the Funding Managers in identifying and reaching out to potential clients.",
      "Help manage the sales pipeline and track progress towards sales targets.",
      "Prepare reports and presentations for internal and external use."
    ],
    educationalBackground: "Undergraduate (UG) or Postgraduate (PG) degree in any subject. A background in finance or related fields is preferred.",
    workEligibility: "Must have the eligibility to work in the UK for at least 10 hours per week.",
    skillsAndCompetencies: [
      "Strong analytical and research skills.",
      "Excellent written and verbal communication abilities.",  
      "Interest in sales and client relationship management.",
      "A proactive and self-motivated approach to work."
    ],
    moreDetails: "Career progression within our company is based purely on performance. Exceptional interns will have the opportunity to transition into full-time roles and advance within the organization.",
    apply: "Please submit your CV to info@decimalfactor.com with the subject line: Funding Associate Internship Application <br><br> Join us and embark on a rewarding career path that offers growth, learning and the chance to make a meaningful impact in the finance industry. We look forward to receiving your application!"
  }
];

export default function Careers() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <Header />
      <Breadcrumb />
      <main className={styles.main}>
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
                  <button onClick={() => openModal(job)}>More Info</button>
                  <a className={styles.applyNow} href={job.link}>Apply Now</a>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {modalIsOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            {selectedJob && (
              <>
                <h2>{selectedJob.title}</h2>
                <p>{selectedJob.description}</p>
                <h3>Responsibilities:</h3>
                <ul>
                  {selectedJob.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
                <h3>Educational Background</h3>
                <p>{selectedJob.educationalBackground}</p>
                <h3>Work Eligibility</h3>
                <p>{selectedJob.workEligibility}</p>
                <h3>Skills and Competencies</h3>
                <ul>
                  {selectedJob.skillsAndCompetencies.map((skills, index) => (
                    <li key={index}>{skills}</li>
                  ))}
                </ul>
                <p>{selectedJob.moreDetails}</p>
                <h3>How to Apply?</h3>
                <p dangerouslySetInnerHTML={{ __html: selectedJob.apply }} />
                <a href={selectedJob.link}><button>Apply Now</button></a>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}