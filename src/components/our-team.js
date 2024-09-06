"use client"

import Image from 'next/image';
import { useState } from "react";
import styles from "./our-team.module.css";

const teamMembers = [
  {
    name: "Manoj Karkhanis",
    position: "Chief Executive Officer",
    image: "/Manoj.png",
    linkedin: "https://www.linkedin.com/in/manoj-karkhanis-21b392/",
    description: "In 2008, at the height of the financial crisis when no high street bank was willing to help small businesses, Manoj left the position of CEO to create Decimal Factor. Today, Decimal Factor has grown into a leading and recognised Credit Brokerage Firm in the UK & USA, regulated by the Financial Conduct Authority of UK (FCA).",
  },
  {
    name: "Hassan Saduddeen",
    position: "Chief Operations Officer",
    image: "/Hassan.png",
    linkedin: "https://www.linkedin.com/in/mohammed-hassan-saduddeen-5a633949/",
    description: "Hassan brings over 27 years of expertise in digital payments, SMEs lending, and fintech innovation. As co-founder of PayTabs, he helped build a $100M payment gateway startup and has a deep understanding of both lender and broker perspectives. Since joining Decimal Factor, Hassan has focused on enhancing our tech infrastructure and driving business growth.",
  },
  {
    name: "Pallavi Inamdar",
    position: "Director of Service Delivery",
    image: "/pallavi.png",
    linkedin: "https://www.linkedin.com/in/pallavi-inamdar-b9757214/",
    description: "Pallavi joined Decimal Factor in 2012.Prior to this she has worked on several testing projects for Marks & Spencer’s, Sainsbury’s and Ladbrokes, while working with Amsphere. ",
  },
  {
    name: "Adam Debski",
    position: "Product Manager",
    image: "/Adam.jpg",
    linkedin: "https://www.linkedin.com/in/adamadebski/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Riya Gurjar",
    position: "Director of Business Development",
    image: "/riya.png",
    linkedin: "https://www.linkedin.com/in/riya-gurjar-a7ab95173/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className={styles.teamSection}>
      <h2>Our Team</h2>
      <div className={styles.team}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <Image height="150" width="150" src={member.image} alt={member.name} className={styles.teamImage} />
            </div>
            <div className={styles.teamMemberContent}>
              <h3 className={styles.memberName} onClick={() => handleCardClick(member)}>{member.name}</h3>
              <p>{member.position}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                <Image width="24" height="24" src="/linkedinIcon.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className={`${styles.modal} ${selectedMember ? styles.show : ''}`}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            <div className={styles.modalContentInner}>
              <div className={styles.leftContent}>
                <Image height="150" width="150" src={selectedMember.image} alt={selectedMember.name} />
                <h3>{selectedMember.name}</h3>
                <p>{selectedMember.position}</p>
                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                  <Image width="24" height="24" src="/linkedinIcon.png" alt="LinkedIn" />
                </a>
              </div>
              <div className={styles.rightContent}>
                <p className={styles.description}>{selectedMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}