import Image from 'next/image';
import Header from "../../components/Header"
import Breadcrumb from "../../components/Breadcrumb";
import styles from './page.module.css';


export default function Products() {

    return (
    <>
        <Header/>
        <Breadcrumb/>
        <main className={styles.page}> 
            <section className={`${styles.productDetails} scroll-margin-top`} id="unsecured-business-loan">
                <div className={styles.container}>
                    <div className={styles.productInfo}>
                        <h1>Unsecured Business Loans</h1>
                        <h2>Gain swift access to funds without the need for collateral.</h2>
                        <ul>
                            <li><strong>Funding Amount:</strong> £5,000 to £500,000</li>
                            <li><strong>Repayment Terms:</strong> Flexible repayment terms tailored to your business's needs</li>
                            <li><strong>Interest Rates:</strong> Competitive rates based on your business's creditworthiness</li>
                            <li><strong>Usage:</strong> Ideal for business expansion, purchasing inventory, or investing in new opportunities</li>
                        </ul>
                        <button>Apply Now</button>
                    </div>
                    <div className={styles.productInfoImage}>
                        <Image width="500" height="300" src="/Business-loan-image.jpg" alt="Unsecured Business Loans" />
                    </div>
                </div>
            </section>

            <section className={`${styles.productDetails} scroll-margin-top`} id="merchant-cash-advance">
                <div className={styles.container}>
                    <div className={styles.productInfo}>
                        <h1>Merchant Cash Advance</h1>
                        <h2>Ideal for small businesses experiencing fluctuating sales volumes.</h2>
                        <ul>
                            <li><strong>Funding Amount:</strong> Flexible funding tailored to your business's cash flow</li>
                            <li><strong>Repayment Method:</strong> Percentage of future credit card sales</li>
                            <li><strong>Flexibility:</strong> Repayments adapt to your business volumes, making them more manageable</li>
                            <li><strong>Usage:</strong> Ideal for businesses with fluctuating sales volumes</li>
                        </ul>
                        <button>Apply Now</button>
                    </div>
                    <div className={styles.productInfoImage}>
                        <Image width="500" height="300" src="/mca-image.jpg" alt="Flexi-Funding - Merchant Cash Advance" />
                    </div>
                </div>
            </section>

            <section className={`${styles.productDetails} scroll-margin-top`} id="invoice-financing">
                <div className={styles.container}>
                    <div className={styles.productInfo}>
                        <h1>Invoice Financing</h1>
                        <h2>Improve your cash flow by leveraging your outstanding invoices.</h2>
                        <ul>
                            <li><strong>Funding Amount:</strong> Up to 90% of the value of your outstanding invoices</li>
                            <li><strong>Repayment Terms:</strong> Flexible repayment terms based on your invoice payment cycles</li>
                            <li><strong>Usage:</strong> Ideal for businesses with extended payment cycles and creditworthy clients</li>
                        </ul>
                        <button>Apply Now</button>
                    </div>
                    <div className={styles.productInfoImage}>
                        <Image width="500" height="300" src="/invoice-finance-image.jpg" alt="Invoice Financing" />
                    </div>
                </div>
            </section>
        </main>
    </>
    );
}
