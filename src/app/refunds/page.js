import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from '@/components/Footer';
import styles from "./page.module.css";

export default function Refunds() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className={styles.main}>
        <section className={styles.refunds}>
          <div className={styles.refundsContainer}>
            <h1 className={styles.refundsTitle}>Refunds Policy</h1>

            <h2>Refund Terms</h2>
            <p>If you purchase any of our products from this website, you may request a 100% refund at any time within 15 days of the original purchase.</p>

            <h2>Merchant Account Activation</h2>
            <p>Once your merchant account is activated, you have thirty (30) days from the date of purchase to determine that the Product/Services do not meet your needs.</p>
            <p>If the Product/Services do not meet your needs, you must notify Decimal Factor Limited in writing within thirty (30) days from the original purchase to terminate the Product/Services provided and receive a refund of the corresponding fee paid by you, less the cost of any service(s) provided prior to such cancellation based on Decimal Factor Limited's fees in effect at the time of cancellation.</p>
            <p>Once the written cancellation notice is received by Decimal Factor Limited, you will receive a refund within 30 days thereafter. Decimal Factor Limited reserves the right to deduct any administrative and handling costs from such principal sum of money.</p>

            <h2>Exclusions from Refund</h2>
            <ul>
              <li>You may not be entitled to a refund for a major failure and compensation for any other reasonably foreseeable loss or damage caused to you by your negligent act, which is not caused by Decimal Factor Limited.</li>
              <li>You are entitled to have the services replaced if there has been any connection failure(s), but not amounting to a major failure, by Decimal Factor Limited.</li>
              <li>You shall not receive any credit or refund under this clause in connection with any failure or deficiency caused by or associated with any of the following:</li>
              <ul>
                <li>Circumstances beyond Decimal Factor Limited's reasonable control, including, but not limited to, war, insurrection, sabotage, terrorism, armed conflict, embargo, fire, flood, earthquake, Internet virus, or denial of service attacks;</li>
                <li>Major telecommunications or Internet failure outside of Decimal Factor Limited's control;</li>
                <li>Acts or omissions of You, your employees, or its agents, including, without limitation, custom scripting or coding, any negligence, wilful misconduct, or use of the service outside the scope of this Agreement; and</li>
                <li>Any Schedule Maintenance conducted in the Greenwich Mean Time Zone and You are notified in advance of such Schedule Maintenance.</li>
              </ul>
            </ul>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}