import documentStyles from '@/utils/assets/styles/document.module.scss'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'

export default function EnTerms() {
    return (<section className={documentStyles.document}>
        <h1>Terms of Use</h1>
        <p>
            Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of Use&quot;) carefully before using the Website operated by
            MISEENSCREEN.
        </p>
        <p>
            This Website provides online access to information about the Company, as well as our products, services, and
            opportunities.
        </p>
        <p>
            Your access to and use of the Website are conditioned upon your acceptance of and compliance with these
            Terms.
            These Terms apply to all visitors, users, and others who access or use the Website.
        </p>
        <b>BY ACCESSING OR USING THE WEBSITE, YOU AGREE TO COMPLY WITH THESE TERMS. IF YOU DO NOT AGREE WITH THEM,
            PLEASE DO NOT USE THE WEBSITE.</b>

        <h1>Content, Copyrights, and Logos</h1>
        <p>
            All texts, materials, data, and information, data files, descriptions of our services and/or products,
            graphics,
            images, user interfaces, visual interfaces, photographs, trademarks, logos, and computer code, etc.
            (&quot;Content&quot;),
            contained on the Website are owned, controlled, or licensed by the Company and are protected by applicable
            intellectual
            property laws and other laws, including trademark and copyright laws. The Company is the owner and holder of
            all copyrights
            on the Content.
        </p>
        <p>
            You acknowledge that the Company makes no representations or warranties regarding the Content to which you
            have access.
            Under no circumstances shall the Company be liable for any Content, including but not limited to: any
            unlawful Content,
            errors or omissions in the Content, or for any damages or losses arising from the use of the Content,
            posted, transmitted,
            provided via links, or otherwise made available through the Website.
        </p>
        <p>
            You agree that you are fully responsible for the reuse of Content available through the Website,
            including providing proper attribution. Before using the Content, you should review the terms of the
            relevant license
            to understand what you are allowed to do and what you are not.
        </p>
        <p>
            Except as expressly provided in these Terms, no part of the Website and no Content may be copied,
            reproduced,
            modified, published, republished, uploaded, publicly displayed, coded, translated, transmitted, or
            distributed in any way
            (including &quot;copying/reproducing&quot;) to any other computer, server, website, or other medium for publication or
            distribution,
            or for any commercial enterprise without the prior written consent of the Company. You also agree not to
            alter, rent, lease,
            sell, distribute, transmit, broadcast, or create derivative works based on the Content or the Website, in
            whole or in part,
            by any means.
        </p>
        <p>
            You may use the Website and/or Content solely for non-commercial, personal purposes and/or to familiarize
            yourself
            with the Company’s products and services, solely in accordance with these Terms, provided that you do not:
        </p>
        <ul>
            <li>remove any proprietary notices in the Content or any part of it;</li>
            <li>
                copy and not publish such Content or any part of the Content on any networked computer or
                transmit it through any media;
            </li>
            <li>make any changes to such Content or any part of the Content;</li>
            <li>make any additional representations or warranties regarding the Website, such Content or its parts, as
                well as the Company’s products and/or services.
            </li>
        </ul>
        <h2>Payment</h2>
        <p>
            If you wish to purchase any of our products or services (&quot;Purchase&quot;), you may
            submit a request in one of the following ways:
        </p>
        <ul>
            <li><Link href={config.routes.header.contactUs}>submit a request through the contact form</Link></li>
            <li>send a request via chat</li>
            <li>
                <Link href={'mailto:' + config.contacts.email}>
                    send a request to {config.contacts.email}
                </Link>
            </li>
            <li>
                <Link href={'tel:' + config.contacts.phone.current}>
                    call us at {config.contacts.phone.display}
                </Link>
            </li>
        </ul>
        <h2>Termination</h2>
        <p>
            We reserve the right to terminate or suspend access to our Website without prior notice or liability,
            for any reason whatsoever, including without limitation if you breach these Terms.
        </p>
        <p>
            All provisions of the Terms which by their nature should survive termination shall survive,
            including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of
            liability.
        </p>
        <h2>Prohibited Use of the Website</h2>
        <p>By accessing the Website, you agree that you will not:</p>
        <ul>
            <li>Use the Website in violation of these Terms;</li>
            <li>
                Copy, modify, create derivative works, reverse engineer, or reverse assemble the Website, or otherwise
                attempt to discover any source code, or allow any third party to do so;
            </li>
            <li>
                Sell, assign, sublicense, distribute, commercially exploit, grant a security interest in, or otherwise
                transfer any rights in the Content or the Website, or make them available to third parties in any way;
            </li>
            <li>
                Use or launch any automated system, including without limitation,
                “deep links,” “page scrapers,” “robots,” “spiders,” or “offline readers,” as well as any other automatic
                device, program, algorithm, or methodology,
                or any similar or equivalent manual process to access, acquire, copy, or monitor any part of the Website
                or any Content, or in any way reproduce
                or circumvent the navigational structure or presentation of the Website or any Content.
            </li>
            <li>
                Use the Website in any way that damages, disables, overburdens, or impairs the Website,
                or interferes with any other party&apos;s use and enjoyment of the Website.
            </li>
            <li>
                Copy or embed the Website or any part of it into another website or webpage.
            </li>
            <li>
                Attempt to gain unauthorized access to the Website.
            </li>
            <li>
                Probe, scan, or test the vulnerability of the Website or any network connected to the Website,
                as well as breach security or authentication measures on the Website or any network connected to it.
            </li>
            <li>
                Take any action that imposes an unreasonable or disproportionately large
                load on the infrastructure of the Website or any systems or networks connected to the Website.
            </li>
            <li>
                Use any device, software, or routine to interfere or attempt to interfere with the proper functioning of
                the Website.
            </li>
        </ul>
        <h2>Privacy Policy</h2>
        <p>
            By using the Website, you accept the terms of the Privacy Policy, which is
            an integral part of these Terms.
        </p>
        <p>
            <Link href={config.routes.privacyPolicy}>
                View our Privacy Policy to learn more: link to the privacy policy
            </Link>
        </p>
        <h2>Links</h2>
        <p>
            Our Website may contain links to third-party websites or services that are not owned
            or controlled by the Company. These links are provided for convenience only.
        </p>
        <p>
            Such links do not imply and should not be interpreted as endorsement, sponsorship,
            or recommendation by the Company of the third party, third-party website, or any
            information contained therein.
        </p>
        <p>
            The Company has no control over and assumes no responsibility for the content,
            privacy policies, or practices of any third-party websites or services,
            or for the availability of any such websites. Furthermore, you acknowledge and agree
            that the Company shall not be held responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in connection with
            the use of or reliance on any such content, goods, or services available on or through
            any such websites or services.
        </p>
        <p>
            The Company does not control and is not responsible for the content, privacy policies,
            or practices of any third-party websites or services, or for their availability.
            Furthermore, you acknowledge and agree that the Company is not liable, directly or indirectly,
            for any loss or damage arising from or alleged to arise from the use of or reliance on
            any content, goods, or services available through such websites or services.
        </p>
        <p>
            No link to our Website may appear on any page of your website or in any context
            containing content or materials that could be interpreted as defamatory, obscene,
            criminal, or which infringes, otherwise violates, or advocates the infringement
            or other violation of any third party rights.
        </p>
        <h2>Changes</h2>
        <p>
            We reserve the right to modify or update these Terms at our sole discretion at any time
            without prior notice. Your continued use of the Website after any changes indicates
            your acceptance of the updated Terms and your obligation to comply with them.
            The date of the last review of these Terms is indicated above.
        </p>
        <h2>Disclaimer; Limitation of Liability</h2>
        <p>
            To the extent permitted by applicable law, the Company disclaims all representations, warranties, and
            conditions
            related to the Website and its use, including but not limited to any warranties of satisfactory quality,
            fitness for a particular purpose, and/or the exercise of reasonable care and skill.
        </p>
        <p>
            To the extent the Website and its Content are provided free of charge, the Company shall not be liable
            for any loss or damage of any kind.
        </p>
        <p><b>
            THE COMPANY MAKES NO REPRESENTATIONS AS TO THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS,
            SECURITY, OR ACCURACY OF THE WEBSITE OR CONTENT FOR ANY PURPOSE. THE WEBSITE AND ITS CONTENT ARE PROVIDED
            ON AN “AS IS” AND “AS AVAILABLE” BASIS. THE CONTENT MAY CONTAIN INACCURACIES OR TYPOGRAPHICAL ERRORS,
            OR OTHER ERRORS, OR MAY BE INCOMPLETE OR OUT OF DATE.
        </b></p>
        <p><b>
            UNDER NO CIRCUMSTANCES SHALL THE COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
            OR EXEMPLARY DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS OR OPPORTUNITIES,
            EVEN IF ADVISED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES, REGARDLESS OF THE CAUSE OF ACTION OR
            BASIS OF LIABILITY.
        </b></p>
        <p><b>
            YOUR SOLE REMEDY AGAINST THE COMPANY IN THE EVENT OF DISSATISFACTION WITH THE WEBSITE OR ANY CONTENT IS
            TO STOP USING THE WEBSITE OR SUCH CONTENT.
        </b></p>
        <p>
            If, notwithstanding the other provisions of these Terms, the Company is found to be liable to you
            for any damage or loss arising out of or connected with your use of the Website or any Content,
            the Company’s liability shall in no event exceed one hundred U.S. dollars (USD $100).
        </p>
        <p>
            The above disclaimer applies to any damages, liability, or injury caused by any failure of performance,
            error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus,
            communication line failure, theft, destruction, or unauthorized access to, alteration of, or use,
            whether for breach of contract, tort, negligence, or any other cause of action.
        </p>
        <h2>Indemnification</h2>
        <p>
            You acknowledge and agree that you are personally responsible for your conduct on the Website.
            You agree to indemnify, defend, and hold harmless the Company, its subsidiaries, employees, agents,
            and third-party information providers from and against any claims, losses, expenses, damages, or costs
            (including direct, indirect, incidental, exemplary, or consequential damages), as well as reasonable
            attorney’s fees, arising out of or resulting from your use, misuse, or inability to use the Website or
            Content, or any violation by you of these Terms.
        </p>

        <h2>Miscellaneous</h2>
        <p>
            These Terms constitute the entire agreement between the parties concerning the subject matter herein.
            The Company&apos;s failure to insist upon or enforce strict performance of any provision of these Terms shall
            not be construed as a waiver of any provision or right.
        </p>
        <p>
            If any part of these Terms is held to be invalid or unenforceable by an arbitrator or a court of
            competent jurisdiction, that part shall be limited or eliminated to the minimum extent necessary so that
            the remaining Terms remain fully enforceable and legally binding.
        </p>
        <p>
            The rights and obligations under these Terms shall be governed by and construed in accordance with the
            laws of the State of California, without reference to its conflict of laws principles. You agree that any
            disputes arising out of or relating to these Terms, the Privacy Policy, your use of the Website or Content
            shall be subject to binding arbitration held in Los Angeles County, California, USA.
        </p>
        <p>
            You are responsible for complying with the laws of the jurisdiction from which you are accessing the
            Website, and you agree not to access or use the information on the Website in violation of such laws.
        </p>

        <h2>Contact Us</h2>
        <p>
            If you have any questions about these Terms, <Link href={'mailto:' + config.contacts.email}>contact us via
            email</Link> or <Link href={'tel:' + config.contacts.phone.current}>call us
            at {config.contacts.phone.display}</Link>.
        </p>
    </section>)
}