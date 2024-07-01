import Header from "@/components/Header"; 
import Breadcrumb from "@/components/Breadcrumb"; 
import FAQs from "@/components/FAQs";
import styles from './page.module.css'; 

export default function FAQsPage() {

    const generalFaqs = [
        {
          question: "What is Decimal Factor?",
          answer: "Decimal Factor is a financial services company that provides alternative financing options to small businesses in the UK."
        },
        {
          question: "How can I apply for a loan?",
          answer: "You can apply for a loan through our website by filling out the application form. Our team will then review your application and get in touch with you."
        },
        {
          question: "What types of financing do you offer?",
          answer: "We offer various financing options including unsecured business loans, merchant cash advances, and invoice financing."
        },
        {
          question: "What are the eligibility criteria?",
          answer: "Eligibility criteria vary depending on the type of financing. Generally, you need to have been in business for a certain period and demonstrate the ability to repay the loan."
        },
        {
          question: "How long does the approval process take?",
          answer: "The approval process typically takes a few days, but it can vary depending on the completeness of your application and the type of financing."
        },
        {
          question: "Are there any upfront fees?",
          answer: "No, we do not charge any upfront fees for our loan services. Any fees associated with the loan will be clearly communicated to you during the application process."
        }
      ];

      const contactInfo = [
        {
            question: "By Telephone",
            answer: "You can call us at: 0800 612 6961 between x and x"
        },
        {
            question: "By Email",
            answer: "You can email us at: info@decimalfactor.com"
        },
        {
            question: "By Post",
            answer: "You can write to us at: <br /><br />Decimal Factor Limited,<br /> Level 39, One Canada Square,<br /> Canary Wharf,<br /> London E14 5AB,<br /> United Kingdom."
        }
      ]

    return (
        <>
            <Header /> 
            <Breadcrumb />
            <main className={styles.main}>
                <section className={styles.headingSection}>
                    <h1>Frequently Asked Questions</h1>
                    <p>Find answers to common questions here, or scroll down to see how to get in touch with us.</p>
                </section>
            
                <section className={styles.generalFaqs}>
                   <FAQs faqData={generalFaqs} />
                </section>
                <section className={styles.contactSection} id="contact-us">
                    <h2>Contact us</h2>
                    <p>If you&apos;re unable to find an answer to your question, please find our contact information below.</p>
                    <FAQs faqData={contactInfo} />
                </section>
            </main>
            <Footer />
        </>
    );
}