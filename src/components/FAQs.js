"use client"

import React, { useState } from "react";
import styles from "./FAQs.module.css";

const FAQs = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleAccordion(index)}
          >
            <span>{faq.question}</span>
            <i
              className={`${styles.chevron} ${
                activeIndex === index ? styles.rotate : ""
              }`}
            >
              &#9660;
            </i>
          </div>
          <div
            className={`${styles.faqAnswer} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQs;