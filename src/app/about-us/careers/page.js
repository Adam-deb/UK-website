"use client"

import React, { useState } from "react";
import Header from "../../../components/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

// Define available vacancies variable
const availableVacancies = [
  {
    title: "Software Engineer",
    description: "We are looking for a skilled Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining software solutions that drive our business forward. Proficiency in JavaScript, React, and Node.js is required.",
    link: "#",
    responsibilities: [
      "Develop and maintain software applications",
      "Collaborate with cross-functional teams",
      "Participate in code reviews and technical discussions",
      "Troubleshoot and debug issues",
      "Continuously improve code quality and performance"
    ]
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
                <button href={selectedJob.link}>Apply Now</button>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}