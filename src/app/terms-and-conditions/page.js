import Image from 'next/image';
import Header from "../../components/Header"
import Breadcrumb from "../../components/Breadcrumb"
import Footer from '@/components/Footer';
import styles from "./page.module.css"

export default function Services() {

    return (
        
    <>
    <Header/>
    <Breadcrumb/>
    <main className={styles.main}>
    <section className={styles.terms}>
      <div className={styles.termsContainer}>
        <h1 className={styles.termsTitle}>Terms & Conditions</h1>

        <h2>Introduction</h2>
        <p>This Web Site Use Agreement ("Agreement") is entered into by you and Decimal Factor Limited of 2nd Floor, 145-157 St John Street, London, EC1V 4PY.</p>
        <p>This Agreement sets forth the terms and conditions under which you use the Decimal Factor Limited and its products WebSite and under which Decimal Factor Limited agrees to your use of the Decimal Factor Limited Web Site. By using the Decimal Factor Limited Web Site, you agree to be bound by the terms of this Agreement.</p>

        <h2>Affiliated Businesses</h2>
        <p>Decimal Factor Ltd (UK) is affiliated with Cash on Mobile (UK), Decimal Factor Inc (US) and Cash on Mobile Inc (US).</p>

        <h2>The Website</h2>
        <p>By accessing the content of this Website you agree to be bound by the terms and conditions (the "Terms") and disclaimers set out herein and you accept our privacy policy available at this site. If you object to any of the terms and conditions set out in this agreement you should not use any of the products or services on the Website and leave immediately.</p>
        <p>All our products and services are subject to the Ts&Cs and disclaimers of the applicable agreement governing their use.</p>

        <h2>No Offer</h2>
        <p>Neither the information on, nor any opinion contained in, our Website constitutes an offer to sell or solicitation or an offer to buy any financial instruments or any advice or recommendation with respect to such financial instruments.</p>

        <h2>Users</h2>
        <p>You are wholly responsible for the use of the Website by any person using your computer and you must ensure that any such person complies with these Terms.</p>
        <p>The Website is currently intended for those who access it from within the UK and who are 18 and over. Because of this, we can't guarantee that the Website or the information thereon complies with or is appropriate for use in other places.</p>
        <p>To register with us, you must be over eighteen (18) years of age. You must make sure the details provided by you on registration or at any time are correct and complete. You must inform us immediately of any changes to the information that you provided when registering by updating your personal details.</p>
        <p>You won't knowingly transmit any virus or other harmful matter to the Website. You may not use any device, software or routine to interfere or attempt to interfere with the proper working of the Website nor may you attempt to decipher, de-compile, disassemble or reverse engineer any of the software comprising or in any way making up the Website or any part of it.</p>

        <h2>Disclaimers and Limitation of Liability</h2>
        <p>Whilst we've taken reasonable steps to ensure the accuracy, currency, availability correctness and completeness of the information contained on the Website, information is provided on an "as is", "as available" basis and we don't give or make any warranty or representation of any kind, whether express or implied. The use of the Website and the materials contained in it are entirely at your own risk. We won't be liable for any losses or damages, whether direct or indirect, consequential or otherwise that you may suffer as a result of your use of the Website, including but not limited to computer service or system failure, access delays or interruption, data non-delivery or mis-delivery, computer viruses or other harmful components, breaches of security or unauthorised use of the system arising from "hacking" or otherwise or your reliance on the information contained on the Website.</p>
        <p>We don't represent or warrant that the Website will be available and meet your requirements, that access will be uninterrupted, that there will be no delays, failures, errors or omissions or loss of transmitted information, that no viruses or other contaminating or destructive properties will be transmitted or that no damage will occur to your computer system. You have sole responsibility for adequate protection and back up of data and/or equipment and for undertaking reasonable and appropriate precautions to scan for computer viruses or other destructive properties.</p>
        <p>We make no representations or warranties regarding the accuracy, functionality or performance of any third party software that may be used in connection with the Website.</p>
        <p>Nothing in these Terms or in the pages of the Website shall limit our liability for death or personal injury arising out of our negligence, or for fraud, or for any other liability, which cannot be excluded or limited under applicable law.</p>
        <p>The information, material and content provided in the pages of the Website may be changed at any time without notice. Changes may be made to the Terms at any time without notice by updating this posting. Any revised term shall take effect as at the date when the change is made to the Website. You agree to review the Terms regularly and your continued access to or use of the Website will mean that you agree to any changes.</p>

        <h2>Third Party Websites</h2>
        <p>Links contained in the Website might lead to other websites not under our control, and we accept no liability for the content or availability of any linked site which is not operated by us or any link contained in a linked site not operated by us. Links on the Website are provided to you only as a convenience and the inclusion of any link does not imply reliability and we don't necessarily endorse any pages linked to the Website. Accordingly, you should read the terms and conditions of those websites before using them and direct any questions or comments about the linked website's contents to the relevant website provider.</p>
        <p>You're not entitled (nor will you assist others) to set up links from your own websites to the Website (whether by hypertext linking, deep-linking, framing, toggling or otherwise) without our prior written consent, which we may grant or withhold at our absolute discretion. You are also not entitled to direct link (also known as "Hot Link") any images or content without our prior written authorisation.</p>

        <h2>Email</h2>
        <p>Messages sent over the Internet cannot be guaranteed to be completely secure as they are subject to possible interception, loss or alteration. We're not responsible for any message lost, intercepted or altered by third parties and will not be liable to you or anyone else for any damages or otherwise in connection with any message sent by you to us or any message sent by us to you over the Internet.</p>
        <p>Email Disclaimer: The information contained in communications from Decimal Factor Limited is confidential and may be legally privileged. It is intended solely for use of the addressee and others authorised to receive it. If you are not the named addressee (or person responsible for forwarding the email to the addressee) please let us know immediately by return email and destroy the copy you have received. Any disclosure, copying, distribution or taking action in reliance on the contents of this information is strictly prohibited and may be unlawful.</p>

        <h2>Trademarks and Copyright</h2>
        <p>All copyright, trademarks and all other intellectual property rights in the Website and its content (including without limitation the pages screens, information and material) included in the Website and all software and source codes connected with the Website is owned by or licensed to Decimal Factor Limited unless otherwise noted.</p>
        <p>Our logos and all brands and products referred to or detailed in the Website are the trademarks of, or licensed to, Decimal Factor Limited. No rights are granted in respect of any of the above trademarks. If you are in doubt whether an item is our trademark or that of any Decimal Factor Limited business, please contact us for clarification.</p>
        <p>You may imprint, copy, download or temporarily store extracts from our Website for your personal information or when you use our products and services. You may not republish, retransmit, redistribute or otherwise make such information or pages available to any other party or available on any website, on-line service or bulletin board of your own or of any other party or make the same available in hard copy or on any other media without our express prior written consent.</p>

        <h2>Governing Law</h2>
        <p>The Terms are governed by and interpreted in accordance with the laws of England and Wales and the courts of the above jurisdiction will have non-exclusive jurisdiction in respect of any dispute, which may arise.</p>
      </div>
    </section>
    </main>
    <Footer />
    </>
    )
}