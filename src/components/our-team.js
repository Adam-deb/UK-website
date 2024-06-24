"use client";

import { useState } from "react";
import styles from "./our-team.module.css";

const teamMembers = [
  {
    name: "Manoj Karkhanis",
    position: "CEO",
    image: "./manoj.jpg",
    linkedin: "",
    description: "",
  },
  {
    name: "Mohammed Hassan Saduddeen",
    position: "COO",
    image: "./Hassan.jpg",
    linkedin: "",
    description: "",
  },
  {
    name: "Pallavi Inamdar",
    position: "Service Delivery Expert",
    image: "./pallavi.jpg",
    linkedin: "",
    description: "",
  },
  {
    name: "Adam Debski",
    position: "Product Manager",
    image: "Adam.jpg",
    linkedin: "",
    description: "",
  },
  {
    name: "Riya Gurjar",
    position: "Business Development Manager",
    image: "./riya.jpg",
    linkedin: "",
    description: "",
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
          <div key={index} className={styles.teamMember} onClick={() => handleCardClick(member)}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className={`${styles.modal} ${selectedMember ? styles.show : ''}`}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            <img src={selectedMember.image} alt={selectedMember.name} />
            <h3>{selectedMember.name}</h3>
            <p>{selectedMember.position}</p>
            <p>{selectedMember.description}</p>
            <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </section>
  );
}