import Image from 'next/image';
import Header from "../components/Header"
import Carousel from "../components/Carousel";
import FAQs from "../components/FAQs";
import styles from "./page.module.css";


export default function Home() {
 
  const testimonials = [
    {
      text: `Securing financing for my small business has always been a daunting task until I found Decimal Factor. Their seamless process, coupled with personalized support, made obtaining a business loan a breeze. I appreciate their transparency and dedication to helping businesses thrive. Highly recommended!`,
      author: "- Newsagent Owner",
      image: "/testimonial-1.jpg"
    },
    {
      text: `As a restaurant owner, cash flow fluctuations are common, but thanks to Decimal Factor merchant cash advance solution, we've been able to navigate through rough patches effortlessly. Their flexibility and understanding of our industry's needs set them apart. I couldn't be happier with the results!`,
      author: "- Restaurant Owner",
      image: "/testimonial-2.jpg"
    },
    {
      text: `Invoice financing has transformed the way we manage our finances, and Decimal Factor played a pivotal role in making it happen. From the initial consultation to the funding stage, their team provided invaluable guidance and support. I'm impressed by their professionalism and commitment to client success.`,
      author: "- Logistics Business Owner",
      image: "/testimonial-3.jpg"
    }
  ];

  // FAQ data
  const faqData = [
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
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team via email at info@decimalfactor.com."
    }
  ];
  return (
  <>
    <Header/>
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextContent}> 
            <h1>Fast and Flexible Funding for Small Businesses</h1>
            <p className={styles.appStepsHeadingp}>Whether you&apos;re investing in new Business opportunities, or optimizing cash flow, our specialized financial solutions are designed to accelerate your business forward.</p>
            <a href="https://portal.decimalfactor.com/request-a-quote"><button>Apply Now</button></a>
          </div>
          <div className={styles.heroImage}>
            <Image width="375" height="50" src="/hero-image.png" alt="Hero"/>
          </div>
        </div>
      </section>
      <section className={styles.appSteps}>
        <div className={styles.appStepsHeading}>
          <h2>Receive a tailored quote within 24 hours</h2>
        </div>
        <div className={styles.appContainer}> 
          <div className={styles.appStep1}>
            <div className={styles.step1Icon}></div>
            <div className={styles.appStepContent}>
              <h3>Apply online in just 15 minutes</h3>
              <p>Fill out our simple online application form with basic details about your business and financing needs.</p>
            </div>
          </div>
          <div className={styles.appStep2}>
            <div className={styles.step2Icon}></div>
            <div className={styles.appStepContent}>
              <h3>Review and Approval</h3>
              <p>Our team will promptly review your application and provide a decision.</p>
            </div>
          </div>
          <div className={styles.appStep3}>
            <div className={styles.step3Icon}></div>
            <div className={styles.appStepContent}>
              <h3>Get Funded</h3>
              <p>Upon approval, access funds quickly to support your business growth or cash flow needs.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.financialProducts}>
        <div className={styles.financialProductsHeading}>
          <h2>Discover financial solutions for all your business needs</h2>
          <div className={styles.fpSubheading}>
            <p>At Decimal Factor, we arrange a variety of financial solutions designed to meet the unique needs of small and medium-sized businesses. Whether you&apos;re looking to expand, manage cash flow, or cover operational costs, we&apos;ll arrange the right product for you.</p>
          </div>
        </div>
        <div className={styles.fpContentContainer}>
          <div className={styles.fpCard}>
            <h3>Unsecured Business Loans</h3>
            <h4>£5,000 - £500,000</h4>
            <p>Gain swift access to funds without the need for collateral. Our unsecured business loans offer funding from £5K to £500K, with flexible repayment terms tailored to your business needs.</p>
            <a href="./pages/financial-products.html">Learn more</a>
          </div>
          <div className={styles.fpCard}>
            <h3>Merchant Cash Advances</h3>
            <h4>£10,000 - £100,000</h4>
            <p>Flexi-funding or merchant cash advance (MCA) is ideal for small businesses experiencing fluctuating sales volumes. Receive upfront funding in exchange for a percentage of your future credit card sales.</p>
            <a href="./pages/financial-products.html#merchant-cash-advance">Learn more</a>
          </div>
          <div className={styles.fpCard}>
            <h3>Invoice Financing</h3>
            <h4>£10,000 - £500,000</h4>
            <p>Improve your cash flow by leveraging your outstanding invoices. With invoice financing, you can immediate access up to 90% of the value of your unpaid invoices.</p>
            <a href="./pages/financial-products.html#invoice-financing">Learn more</a>
          </div>
        </div>
      </section>
      <section className={styles.customerTestimonials}>
        <Carousel testimonials={testimonials} />
      </section>
      <section className={styles.deniedCta}>
        <div className={styles.deniedCtaContent}>
          <h2>Have You Been Denied a Small Business Loan in the Past? Don&apos;t Let That Stop You!</h2>
          <p>At Decimal Factor, we provide alternative financing options for UK small businesses that have faced rejection.</p>
          <p>Our team of experienced funding professionals specialise in working with small business owners who have been previously denied loans. We understand your unique situation, assess your current financial health, and develop a personalized funding solution that fits your needs.</p>
          <p>Our initial soft credit checks ensure your credit score stays intact, so there&apos;s no risk in discovering how we can support your business.</p>
          <a><button>Apply Now!</button></a>
        </div>
      </section>
      <section className={styles.faqSection}>
        <FAQs faqData={faqData} />
      </section>
    </main>
  </>
  );
}
