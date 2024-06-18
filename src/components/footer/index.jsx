import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  const openPrivacyModal = () => {
    setIsPrivacyModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerColumn}>
          <div className={styles.logoContainer}>
            <Link className={styles.scrolltotop} to="/" onClick={scrollToTop}>
              <img className={styles.logo} src="/header/header.png" alt="Logo" />
            </Link>
          </div>
          <h3>DJ PROBLEMATIC</h3>
        </div>
        <div className={styles.footerColumn}>
          <Link to="/" className={styles.hoverUnderline}>
            Home
          </Link>
          <p className={styles.hoverUnderline}>All Beats</p>
          <Link to="/soundkits" className={styles.hoverUnderline}>
            Sound Kits
          </Link>
        </div>
        <div className={styles.footerColumn}>
          <Link to="/servicespage" className={styles.hoverUnderline}>
            Services
          </Link>
          <Link to="/faq" className={styles.hoverUnderline}>
            Faq
          </Link>
          <Link to="/aboutme" className={styles.hoverUnderline}>
            About Me
          </Link>
          <Link to="/contactme" className={styles.hoverUnderline}>
            Contact Me
          </Link>
        </div>
        <div className={styles.footerColumn}>
          <Link to="/licensinginfo" className={styles.hoverUnderline}>
            Licensing Info
          </Link>
          <p className={styles.hoverUnderline} onClick={openModal}>
            Terms of use
          </p>
          <p className={styles.hoverUnderline} onClick={openPrivacyModal} style={{ cursor: 'pointer' }}>
            Privacy Policy
          </p>
          <a
            className={styles.hoverUnderline}
            href="https://www.youtube.com/t/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Terms of Service
          </a>
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.socialIcons}>
            <a
              href="https://www.youtube.com/channel/UCAqev5VsGcsRzFXw3v5VzEw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/footer/youtube.png" alt="" className={styles.youtube} />
            </a>
            <a href="https://www.instagram.com/djproblematic/" target="_blank" rel="noopener noreferrer">
              <img src="/footer/instagram.png" alt="" className={styles.instagram} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100075971440756" target="_blank" rel="noopener noreferrer">
              <img src="/footer/facebook.png" alt="" className={styles.facebook} />
            </a>
          </div>
        </div>
      </footer>

      {/* Modal for Terms of Use */}
      <div className={`${styles.modalOverlay} ${isModalOpen ? styles.active : ''}`}>
        <div className={`${styles.modal} ${isModalOpen ? styles.active : ''}`}>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
          <div className={styles.modalContent}>
            <h2>Website Terms of Use</h2>
            <p>
              <strong>BeatStars Terms & Conditions</strong>
            </p>
            <p>Effective date: May 25, 2018</p>
            <p>
              BeatStars Inc. ("BeatStars", "us", "we", or "our") operates the BeatStars.com website, BeatStars mobile
              applications and other related websites and applications (the "Service").
            </p>
            <p>
              Set forth below are the terms and conditions governing the Service, which may expand or change from time
              to time. As used herein, the term "you" or "your" refers to an individual, representing yourself or, if
              applicable, acting as legal representative for a group, business entity or corporation.
            </p>
            <p>
              <strong>
                CAREFULLY READ THESE TERMS AND CONDITIONS. BY AVAILING YOURSELF OF THE WEBSITE OR RELATED SERVICES, YOU
                ARE CONSENTING TO BE BOUND BY THESE TERMS AND CONDITIONS AS SUCH TERMS MAY BE MODIFIED FROM TIME TO TIME
                AS DESCRIBED BELOW.
              </strong>
            </p>
            <p>
              <strong>Use of Materials Found on the Website:</strong> The information, artwork, text, video, audio,
              pictures, software and other intellectual property (collectively, "Materials") contained on the Website
              are protected by copyright and international laws. You may only access and use the Materials for personal
              or educational purposes or as expressly provided for in applicable BeatStars.com program terms and
              conditions. You may not otherwise reproduce, distribute, publicly perform, publicly display, modify or
              create derivative works of the Materials, unless authorized by the appropriate copyright owner(s). In the
              event that you print Materials found on the Website, you must include any copyright notice originally
              included with the Materials on all copies. You may not link directly to any media file located on a
              BeatStars.com server, except where explicitly allowed to do so. You should not attempt to claim any
              Materials as your own work. Any computer software downloadable or otherwise available on the Website is
              provided subject to the terms of the applicable license agreement. Before using any BeatStars.com logo or
              trademark, please contact BeatStars.com.
            </p>
            <p>
              <strong>Copyright and Trademark Infringement Policy and Notification Procedure:</strong> BeatStars.com
              does not own the musical compositions, sound recordings, art or other written or visual images
              (collectively, the "Content") posted by third parties to the Website. All Content is posted by an
              individual, group or company (collectively, the "Artist") who has represented and warranted to
              BeatStars.com that, among other things, neither the Content nor the names, trademarks and service marks
              under which Content is promoted (collectively, the "Name") infringes any third party's copyright, patent,
              trademark, trade secret or other proprietary rights, rights of publicity or privacy, or moral rights (see
              the section titled 'Representations and Warranties' of the current BeatStars.com Music Submission
              Agreement at <a href="https://beatstars.zendesk.com/hc/en-us">https://beatstars.zendesk.com/hc/en-us</a>).
              Buyers are subject to clear any samples on any composition purchased.
            </p>
            <p>
              Since BeatStars.com is not in a position to determine who has the prevailing claim to use any particular
              Content or Name posted to the Website, its policy on such matters is that they be resolved directly by the
              parties alleging misuse of their Content and/or Name (the "Complainants") and the Artists. We recommend
              that Complainants immediately notify Artists about allegations of infringement by going to the Artist's
              page on the Website, clicking the Contact link and contacting the Artist directly. It has been
              BeatStars.com's experience that most Artists are honest and responsible citizens who may not realize they
              are engaged in infringing activities. Typically, once notified of a claim, Artists voluntarily cease using
              such infringing Content and/or Name on the Website and elsewhere.
            </p>
            <p>
              Complainants may notify BeatStars.com concerning any Content and/or Name being used on the Website in
              violation of their rights by sending an email to info@BeatStars.com. BeatStars.com only shall use
              information provided by Complainants in accordance with its then-current Privacy Policy and as reasonably
              necessary to address any allegations contained therein, which may include disclosing some or all of the
              information to Artists. In most cases, soon after receiving written notice alleging infringement,
              BeatStars.com either will remove the allegedly infringing Content and/or Name from those web pages
              identified or, at its election, remove those web pages.
            </p>
            <p>
              <strong>Refund policy:</strong> BeatStars.com does not offer refunds. If there are any issues with a
              premium service or an ordered item please contact BeatStars.com immediately, we aim to solve any issue
              amicably. Premium services (recurring billings) can be cancelled anytime for any reason. Cancellations by
              the individual, group or company that signed up for the premium service (collectively, the "Subscriber")
              will be effective after the paid period. In case of cancellation by the Subscriber the period that is
              already paid for will not be reimbursed. The premium service will then remain active until the end of the
              paid period. BeatStars.com reserves the right to cancel premium services for any reason at any time
              without notification. If BeatStars.com cancels a premium service before its expiration date, Subscriber
              might be entitled to a pro-rated refund of the last payment. No refund will be given if user violated the
              Terms and Conditions of Web Site Use, or the Music Submission Agreement.
            </p>
            <p>
              Premium service can be cancelled by emailing info@BeatStars.com with cancellation request and artist name
              or order ID. Cancellation will be confirmed by email.
            </p>
            <p>
              <strong>Your Conduct:</strong> You shall use the Website for lawful purposes only. You shall not post or
              transmit via the Website any material which violates or infringes in any way upon the rights of others,
              which is unlawful, threatening, abusive, defamatory, invasive of privacy or publicity rights, vulgar,
              obscene, profane or otherwise objectionable, which encourages conduct that would constitute a criminal
              offense, give rise to civil liability or otherwise violate any law, or which, without BeatStars.com's
              express prior approval, contains advertising or any solicitation with respect to products or services.
            </p>
            <p>
              In addition, if we feel that a user abuses the BeatStars.com site in any way, we reserve the right to
              share certain information with third parties. Abuses include (but are not limited to) possible copyright
              infringement, possible libel and slander, possible credit card fraud. BeatStars.com reserves the right to
              refuse service, terminate accounts, and/or cancel orders at its sole discretion and without notification.
            </p>
            <p>
              <strong>Content:</strong> The Website offers a wide selection and variety of content to our members and
              users. Content may contain profanity or otherwise inappropriate or offensive material for children or
              other members and/or users. Members and/or users must evaluate and bear the risk associated with the use
              of the Website and related services. BeatStars.com suggests that parents should supervise their children's
              on-line activities and consider using parental control tools available to help provide an appropriate
              on-line environment for their children. Users are also encouraged to contact BeatStars.com for evaluation
              of possible offensive material. BeatStars.com reserves the right to act on such notices at its sole
              discretion.
            </p>
            <p>
              <strong>Warranty Disclaimer:</strong> YOU EXPRESSLY AGREE THAT USE OF THE WEBSITE AND RELATED SERVICES IS
              AT YOUR SOLE RISK. THE WEBSITE, MATERIALS AND RELATED SERVICES ARE PROVIDED ON AN "AS IS" AND "AS
              AVAILABLE" BASIS. BEATSTARS.COM INC MAKES NO REPRESENTATIONS OR WARRANTIES WITH REGARD TO THE WEBSITE OR
              ANY MATERIALS THEREIN, WHETHER EXPRESS OR IMPLIED, ARISING BY LAW OR OTHERWISE, INCLUDING, WITHOUT
              LIMITATION, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT
              OR ANY IMPLIED WARRANTY ARISING OUT OF COURSE OF PERFORMANCE, COURSE OF DEALING OR USAGE OF TRADE. IN
              ADDITION, BEATSTARS.COM INC MAKES NO REPRESENTATION THAT THE OPERATION OF THE WEBSITE WILL BE
              UNINTERRUPTED OR ERROR-FREE. BEATSTARS.COM INC WILL NOT BE LIABLE FOR THE CONSEQUENCES OF ANY
              INTERRUPTIONS OR ERRORS ON THE WEBSITE. IT IS YOUR RESPONSIBILITY TO EVALUATE THE ACCURACY, COMPLETENESS
              OR USEFULNESS OF ANY OPINION, ADVICE, INFORMATION OR OTHER CONTENT OR MATERIALS PROVIDED IN CONNECTION
              WITH OR OTHERWISE AVAILABLE THROUGH THE WEBSITE. PLEASE SEEK THE ADVICE OF PROFESSIONALS, AS APPROPRIATE,
              REGARDING THE EVALUATION OF ANY SUCH OPINION, ADVICE, INFORMATION OR OTHER CONTENT. UNDER NO CIRCUMSTANCE
              WILL BEATSTARS.COM INC BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY YOUR RELIANCE ON INFORMATION OBTAINED
              THROUGH THE WEBSITE, OTHER THAN AS REQUIRED UNDER APPLICABLE CONSUMER-PROTECTION LAW. SOME JURISDICTIONS
              DO NOT ALLOW THE DISCLAIMER OF CERTAIN WARRANTIES OR LIMITATION OF CERTAIN TYPES OF DAMAGES, SO SOME OF
              THE ABOVE DISCLAIMER MAY NOT APPLY TO YOU AND NOTHING CONTAINED HEREIN SHOULD BE CONSTRUED AS EXCLUDING OR
              LIMITING ANY LIABILITY BEYOND WHAT IS PERMITTED UNDER APPLICABLE LAW.
            </p>
            <p>
              <strong>Limitation of Liability:</strong> By availing yourself of the Website, Materials or related
              services, you agree to release and hold BeatStars.com and the employees, officers, directors,
              shareholders, agents, representatives of BeatStars.com, its affiliates, subsidiaries, advertising,
              promotion and fulfillment agencies, any entity controlling, controlled by or under common control with
              BeatStars.com, any third-party providers or sources of information or data and legal advisers
              (collectively, "BeatStars.com Affiliates") harmless from any and all losses, damages, rights, claims and
              actions of any kind arising from or related to the Website, Materials or related services including but
              not limited to: (a) telephone, electronic, hardware or software, network, Internet or computer
              malfunctions, failures or difficulties of any kind; (b) failed, incomplete, garbled or delayed computer
              transmissions; (c) any condition caused by events beyond the control of BeatStars.com that may cause the
              Website or related services to be disrupted or corrupted; (d) any injuries, losses or damages of any kind
              arising in connection with or as a result of your use of the Website, Materials or related services; or
              (e) any printing or typographical errors in any materials associated with the Website, Materials or
              related services. In addition, you agree to defend, indemnify and hold BeatStars.com Affiliates harmless
              from any claim, suit or demand, including reasonable attorney's fees, made by a third party due to or
              arising out of your utilizing the Website, Materials or related services, your violation or breach of
              these Terms and Conditions, your violation of any rights of a third party, or any other act or omission by
              you. IN NO EVENT WILL BEATSTARS.COM BE LIABLE FOR ANY INDIRECT, STATUTORY, INCIDENTAL, SPECIAL OR
              CONSEQUENTIAL DAMAGES OR ANY LOSS OF REVENUE ARISING OUT OF YOUR AVAILMENT OF MATERIALS (HOWEVER ARISING,
              INCLUDING NEGLIGENCE), EVEN IF BEATSTARS.COM WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              <strong>General Provisions:</strong> You agree to comply with all applicable laws regarding the
              transmission of technical data exported from the United States or the country in which you reside. Your
              correspondence or business dealings with, or participation in promotions of or with parties found on or
              through the Website, including payment and delivery of related goods or services, and any other terms,
              conditions, warranties or representations applicable to such dealings, are solely between you and such
              parties. These Terms and Conditions are governed in all respects by the laws of the State of Texas as such
              laws are applied to agreements entered into and to be performed entirely within Texas between Texas
              residents. Legal proceedings related to the matters herein shall be brought in and adjudicated solely in
              the courts of Austin, Texas, United States of America. Both parties consent to extra-territorial service
              of process and submit to the jurisdiction of said courts. If any provision of these Terms and Conditions
              is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall
              be enforced. BeatStars.com's failure to act with respect to a breach by you or others does not waive its
              right to act with respect to subsequent or similar breaches. These Terms and Conditions set forth the
              entire understanding and agreement of the parties as to the subject matter hereof and supersede all prior
              proposals, discussions or agreements with respect thereto. A printed version of these Terms and Conditions
              and of any notice given in electronic form shall be admissible in judicial or administrative proceedings
              based upon or relating to these Terms and Conditions to the same extent and subject to the same conditions
              as other business documents and records originally generated and maintained in printed form.
            </p>
            <p>
              <strong>YouTube:</strong> By accessing and/or using the Website, You agree to YouTube's Terms of Service.
            </p>
            <p>
              <strong>Age requirements for use of the Service:</strong> This Service is available for individuals aged
              13 years or older. If you are 13 or older but under the age of 18, you should review these terms and
              conditions with your parent or guardian to make sure that you and your parent or guardian understand these
              terms and conditions.
            </p>
            <p>
              <strong>Modification of Terms and Conditions:</strong> From time to time BeatStars.com may modify these
              Terms and Conditions in its sole discretion. When such modification is made, BeatStars.com will post a
              revised version of these Terms and Conditions on the Website. Modifications will be effective when they
              are posted. BeatStars.com is not required to provide you with notification that any such modification has
              been made. It is your responsibility to review these Terms and Conditions from time to time to be aware of
              any such modifications. Each time you log on to the Website, you will be deemed to have accepted any such
              modifications.
            </p>
            <p>
              <strong>Music Distribution Agreement</strong>
            </p>
            <p>
              <strong>1) Term and Territory</strong>
            </p>
            <p>
              The term of this Agreement shall be for one (1) year (the “Initial Term”). The Initial Term shall
              automatically renew for successive one (1) year periods (the “Renewal Term”). The Initial Term and Renewal
              Term(s), if any, are collectively referred to as the “Term.” Either party may terminate this Agreement
              during the Term subject to the provisions outlined below. The territory for this Agreement shall be the
              world (the “Territory”). Licensor may indicate any territorial restrictions regarding specific “Content”
              (as defined below) on Content Submission Form A, attached to this Agreement.
            </p>
            <p>
              <strong>2) Content</strong>
            </p>
            <p>
              <strong>Sound Recordings.</strong> Licensor owns and/or controls one hundred percent (100%) of the sound
              recordings as well as the copyrights in and to the sound recordings listed on the attached Content
              Submission Form (the “Masters”).
            </p>
            <p>
              <strong>Compositions.</strong> Licensor either: owns and/or controls the compositions embodied on the
              Masters (the “Compositions”) as well as the copyrights in and to the Compositions; or has mechanical
              licenses and all other permissions required to use the Compositions as contemplated in this Agreement.
              Licensor may have other works whether audiovisual, visual or otherwise which Licensor would like Licensee
              to include in this Agreement. In this Agreement, the Masters and the Compositions and the Additional
              Works, if any, are collectively referred to as the “Content.”
            </p>
            <p>
              <strong>3) Grant of Rights</strong>
            </p>
            <p>
              Licensor hereby licenses the Content to Licensee for distribution and exploitation as follows: The
              non-exclusive electronic, digital, and mobile rights in the Content to create digital and/or electronic
              copies and compilations, to distribute, to sell, and to publicly perform the Content via all electronic,
              digital, and mobile platforms owned and/or controlled by third parties with whom Licensee has or enters
              into agreements with during the Term (“Licensee Partners”). Licensor will have an online account with
              Licensee known as the “Dashboard.” The Dashboard enables Licensor to see its activities with Licensee
              Partners. The right to: perform the Content in streaming format on Licensee’s website or other websites
              owned and/or controlled by Licensee Partners; publicly display and make available for download as part of
              the sale of the Masters, the lyrics of the Compositions; collect monies for the playing of the Masters on
              non-interactive webcasts and streaming of the Masters (payable by SoundExchange in the USA). This
              collection right is only for Licensor’s Masters. Any monies collected on behalf of Licensor for webcasts
              or streams are included in “Revenue” (defined below) and are subject to the payment provisions of this
              Agreement; with prior written approval from Licensor, include the Content in audio and/or audiovisual
              compilation(s) for sale via physical distribution, and in such cases, to manufacture, make copies of,
              distribute, and sell physical embodiments of the Content; release, advertise, and sell electronic files or
              equivalent electronic form(s) of the Content and to permit others to do so under the trademark “BeatStars”
              or under any trademark used by Licensee; sub-license the rights granted by Licensor to Licensee in this
              Agreement as necessary to Licensee Partners, solely to fulfill the purposes of this Agreement including
              but not limited to those rights necessary to promote, market, advertise, distribute and sell the Content
              to consumers. Licensee’s grant of rights to Licensee Partners for use of the Content shall always be
              subject to the terms and limitations of this Agreement.
            </p>
            <p>
              <strong>4) Promotional & Other Rights</strong>
            </p>
            <p>
              Unless otherwise instructed in writing by Licensor, Licensee shall have the non-exclusive right, in its
              sole discretion and in line with customary practices, to market the Masters and other Content as
              applicable, for promotional purposes and without compensation to Licensor. In order for Licensee to
              provide marketing and licensing services under this Agreement, Licensor grants Licensee the right to:
              publicly perform the Masters (and other Content as applicable) on Licensee’s websites and permit Licensee
              Partners to publicly perform the Masters on their website(s) on a gratis basis for the purposes of
              promoting the sale of the Content. Licensor hereby acknowledges that Licensee and Licensee Partners shall
              be exempt from any payments of performance royalties otherwise due to owners of sound recordings for
              digital performances of the same if the use is for promotional purposes. Licensee shall require Licensee
              Partners to pay any public performance royalties which may be due to publishers/writers of the
              Compositions for promotional uses of the Compositions; include the Masters in one or more streaming
              electronic radio formats to promote and market the Masters; print, publish, disseminate, and otherwise use
              and permit others to use the “NIL Materials” (defined below) for the purposes of trade, advertising, and
              other exploitations solely in connection with the marketing, sale, and exploitation of the Content. The
              “NIL Materials” are defined as the approved likeness, approved biography, approved photos, and other
              approved promotional material provided by Licensor, including the name, both legal and professional,
              whether presently or hereafter used by Licensor, and name(s) of others whose work is embodied on the
              Content including the “Performer” (as defined below). All NIL Materials provided by Licensor to Licensee
              shall be deemed approved. All material provided by Licensor to Licensee may be edited to fit the format of
              the specific use without further approval from Licensor. Licensee shall have the right to permit Licensee
              Partners, successors and designees the right to use the approved NIL Materials as outlined in this
              subparagraph. “Performer(s)” as used in this Agreement means any person whose musical, vocal or production
              services are embodied on the Content.
            </p>
            <p>
              <strong>5) Payment</strong>
            </p>
            <p>
              Licensee shall pay Licensor the percentages of “Revenue” as outlined on Revenue Shares in Appendix A of
              this Agreement and forming a part of it. “Revenue” means income actually received by or credited to
              Licensee that is derived solely from the exploitation of the Content less mechanical royalties, if any.
              Income received by Licensee may be subject to taxes, surcharges or fees imposed by government agencies or
              Licensee Partners before payment is sent to Licensee. Licensee shall have no obligation to pay Licensor
              Revenue which Licensee has not actually received until such time as Licensee receives such Revenue. In
              certain emerging digital media markets (“New Territories”), Licensee has entered into an agreement with
              one or more Licensee Partner(s) to manage the distribution and appropriate marketing of the Content in
              that specific New Territory. As such these particular Licensee Partners retain a higher percentage of the
              income from the distribution, marketing and sales of the Content than is typically maintained in developed
              digital media markets prior to paying Licensee. Licensor shall always have the option to withhold or
              withdraw Content from New Territories. Revenue shall be paid monthly on the 15th of each month or the
              following business day if such date occurs on a weekend or holiday. Each payment will be accompanied by a
              detailed statement showing all sales and other Revenue-generating exploitations of the Content. If
              Licensor has not received payment or a statement indicating that no payment is due by the 20th day of the
              month, Licensor shall promptly advise Licensee that Licensor has not received payment or a statement.
              Licensee shall investigate the situation and assure that payment and/or a statement are sent to Licensor.
              In no event shall Licensee be deemed in breach of its payment obligations under this Agreement if Licensor
              has not received payment or a statement on the 15th of the month. However, Licensee may be deemed in
              breach of its payment obligations if Licensee fails to make payments or provide a statement thirty (30)
              days after receiving notice from Licensor as outlined above. No payment shall be made to Licensor in any
              month when less than one hundred fifty U.S. dollars ($150) is due and payable to Licensor via paper check
              or Paypal. In the event payment is not made to Licensor for this reason, such amounts below one hundred
              fifty U.S. dollars ($150) as applicable, will accrue to Licensor’s account and shall be paid in the first
              month in which Licensor’s account reflects a balance greater than one hundred fifty U.S. dollars ($150) as
              applicable. All payments to Licensor from Licensee under this Agreement shall be made via paper check or
              Paypal. Licensor hereby acknowledges that in the United States among the ways that mechanical royalties
              for digital sales are customarily paid include: (i) payment directly to the publishers/writers by the
              music services/retailers, and (ii) an all-in payment as part of the fee paid by the music
              services/retailers to Licensee and are not paid separately to the publishers/writers of compositions. In
              those instances when Licensee receives what is considered the mechanical royalty as part of the fee from
              Licensee Partners, the portion deemed the mechanical payment shall be included in Revenue paid to
              Licensor. Licensor shall be fully and solely responsible for paying the mechanical royalty to the
              appropriate publishers/writers for use of the Compositions under this Agreement.
            </p>
            <p>
              <strong>6) Accountings & Audits</strong>
            </p>
            <p>
              All statements shall be binding upon Licensor and not subject to objection by Licensor unless specific
              objection in writing, stating the basis thereof, is given to Licensee within two (2) years from the date
              the statement is rendered, viewed, and/or downloaded. Licensor shall have two (2) years from the date each
              statement is rendered, viewed and/or downloaded to conduct an inspection of Licensee’s books and records
              specifically relating to Licensor’s sales and payment activity. Such inspection shall take place at the
              location where Licensee normally keeps such books and records and shall be conducted during normal
              business hours. All such inspections shall be made upon prior written notice to Licensee at least thirty
              (30) days prior to the date Licensor intends to conduct such inspection. Licensor may only inspect records
              relating to each statement once and may only conduct such an inspection once a year. Licensee shall have
              the absolute right in accounting to Licensor to rely upon the statements received by Licensee from third
              parties and shall not be liable in any manner whatsoever for any error, omission, or other inaccuracy of
              any such statement(s) or information received by Licensee. However, if Licensee knows or has a reliable
              business reason to know of an error, omission or other inaccuracy in such third party statement or
              information, Licensee shall promptly act to correct it and when corrected, Licensee shall appropriately
              correct Licensor’s statement and Revenue.
            </p>
            <p>
              <strong>7) Confidentiality</strong>
            </p>
            <p>
              Licensee and Licensor shall keep the terms and conditions of this Agreement confidential both during the
              Term and thereafter, and shall not disclose any information concerning the terms and conditions of this
              Agreement to any other person or entity. Each party may refer generally to the existence of this Agreement
              but shall not reveal the terms of this Agreement, including but not limited to the payment provisions,
              other confidential information, proprietary information, business plans, business models, customers,
              clients, technology, products, or any other information which either party identifies as confidential
              (collectively, the “Confidential Information”) without the prior written consent of the other party.
              Either party may disclose the Confidential Information on a “need to know” basis to its attorneys,
              financial, and other advisors who are under a duty of confidentiality to the disclosing party without the
              prior written consent of the other party so long as those agents are informed of this Confidentiality
              provision and agree to be bound by it and maintain the Confidential Information confidential. If required
              by law or governmental regulation, either party may disclose the Confidential Information only after it
              provides the other party with notice of the potential disclosure and the other party has the opportunity
              to narrow the information to be disclosed or dispute the disclosure. Nothing in this provision shall
              prohibit either party from disclosing that an agreement exists between Licensor and Licensee so long as
              the terms and conditions of this Agreement are not disclosed.
            </p>
            <p>
              <strong>8) Representations and Warranties</strong>
            </p>
            <p>
              <strong>A. Licensor’s representations and warranties.</strong>
            </p>
            <p>
              Licensor warrants, represents, and agrees that: unless otherwise noted, Licensor possesses all rights in
              and to the Content to enable Licensee to use the Content as contemplated in this Agreement. In the event
              Licensor does not possess all of the full and exclusive rights to the Content, Licensor shall inform
              Licensee upon delivery of the Content, which right(s) Licensor does not own or control. Licensor shall
              provide Licensee with any documentation requested by Licensee evidencing rights to use the Content
              intended under this Agreement; Licensor has the full right, power, and authority to enter into and fully
              perform this Agreement and all of Licensor’s obligations under this Agreement and to grant Licensee the
              rights granted in this Agreement. Licensor has not granted and will not grant or attempt to grant to any
              other person, firm, corporation or entity, rights of any kind which are inconsistent with the grant of
              rights to Licensee or which would in any way impair the rights granted to Licensee under this Agreement
              during the Term. Licensor explicitly warrants and represents that: the Content contains NO unauthorized
              “Samples.” “Samples” as used herein means any portion(s) or interpolation(s) of third party master
              recording(s) and/or composition(s), video(s) and/or other material(s), or portions thereof whether
              musical, lyrical or otherwise, not owned and/or controlled by Licensor. Licensor explicitly warrants and
              represents that the Content, the sale, distribution, and exploitation of the Content, or any uses of the
              Content contemplated herein shall not violate any law or infringe upon any common law or statutory rights
              of any person, corporation, or entity, including without limitation contractual rights, copyrights,
              trademarks, and rights of privacy or publicity; as required for use of the Compositions contemplated under
              this Agreement, except for those Compositions subject to paragraph 5 above, Licensor has obtained
              mechanical licenses for all Compositions and that Licensor shall administer and pay all mechanical royalty
              payments to the publishers/writers of the Compositions. Licensor shall make any and all payments, which
              may be due to artists, producers, musicians, Performers, writers and publishers when not otherwise
              addressed in this Agreement and all others whose work and/or performances are embodied on the Content
              and/or all artwork submitted by Licensor.
            </p>
            <p>
              <strong>B. Licensee representations and warranties.</strong>
            </p>
            <p>
              Licensee warrants, represents, and agrees that: Licensee has the right, power, and authority to enter into
              and fully perform this Agreement and all of its obligations under this Agreement; Licensee shall, at its
              sole cost and expense, encode and deliver the Content to Licensee Partners.
            </p>
            <p>
              <strong>9) Indemnification</strong>
            </p>
            <p>
              Each party (the “Indemnifying Party”) will indemnify, defend, and hold harmless the other party and its
              affiliates, their respective officers, directors, employees, and agents (“Indemnified Party”) from and
              against any and all losses, liabilities, claims, obligations, costs, and expenses (including reasonable
              attorney’s fees) which result from or arise in connection with or are related in any way to a breach by
              the Indemnifying Party of any of its representations and warranties in this Agreement. If a third party
              asserts a claim or allegation which, if proven, would constitute a breach by the Indemnifying Party of any
              of its representations, warranties, covenants and or obligations under this Agreement, the Indemnified
              Party shall promptly notify the Indemnifying Party in writing. The Indemnifying Party shall have the right
              at its own expense to participate in the defense thereof with counsel of its own choosing, provided
              however that the Indemnified Party’s decision in connection with the defense or settlement of any such
              claim or demand shall be final. No Indemnified Party shall effect any settlement of any pending or
              threatened proceeding with respect to which indemnity could have been sought under this Agreement by the
              Indemnified Party without the prior written consent of the Indemnifying Party. Licensor shall indemnify
              Licensee, its officers, directors, employees, and agents from and against all third party claims, actions
              or demands against Licensee for use of the Content as granted in this Agreement which may constitute
              infringement of copyright and/or trademark, and violate rights of privacy and/or publicity. Licensor
              explicitly indemnifies Licensee from and against any and all actions, demands, or claims brought against
              Licensee for non-payment or insufficient payment of mechanical royalties.
            </p>
            <p>
              <strong>10) Termination</strong>
            </p>
            <p>
              After the Initial Term, Licensor may terminate this Agreement upon sixty (60) days written notice to
              Licensee and Licensee must confirm in writing receipt of such notice. Upon termination or expiration of
              this Agreement, the rights granted to Licensee hereunder shall automatically revert to Licensor.
              Additionally, Licensor may, upon sixty (60) days written notice to Licensee, terminate this Agreement with
              respect to any particular Master, Composition or Additional Work without effecting this Agreement for the
              remaining Masters, Compositions and/or Additional Works. After the Initial Term, Licensee has the right to
              terminate this Agreement upon sixty (60) days written notice to the Licensor. Notwithstanding the
              foregoing, should Licensee file for chapter 7 or chapter 11 bankruptcy proceeding, termination of this
              Agreement is immediate and all Content shall be returned to the Licensor. Upon termination or expiration
              of this Agreement for any reason, Licensee shall cease all use and distribution of the Content and shall
              demand that Licensee Partners cease all use and distribution of the Content. Licensee shall promptly
              delete all forms of the Content from its website and demand that Licensee Partners delete all forms of
              Content from their websites within sixty (60) days of termination of this Agreement.
            </p>
            <p>
              <strong>11) Survival of Revenues</strong>
            </p>
            <p>
              Upon expiration or termination of this Agreement, all Revenues received by Licensee for the Content shall
              continue to be subject to the payment provisions outlined in paragraph 5 above for so long as Licensee
              receives such Revenues. After termination or expiration of this Agreement, the minimum payment threshold
              referenced in paragraph 5 shall not apply and Licensee shall pay Licensor its percentage of all Revenues
              received regardless of the amount payable.
            </p>
            <p>
              <strong>12) Mediation & Arbitration</strong>
            </p>
            <p>
              If a dispute arises out of or relates to this Agreement, or if there is a breach of this Agreement, and
              the dispute cannot be settled or resolved, then the dispute or breach shall be settled by arbitration
              administered by the American Arbitration Association under its Commercial Arbitration Rules. The
              controversy or claim shall be settled by three (3) arbitrators, and all hearings shall be held in Austin,
              Texas. Judgment on the award rendered by the arbitrators may be entered in any court having jurisdiction.
              In rendering the award, the arbitrators shall interpret this Agreement in accordance with the substantive
              laws of Texas without regard to its conflict of laws rule. Notwithstanding the foregoing, if a third party
              claim is brought against Licensee for copyright infringement, violation of rights of publicity, rights of
              privacy, or other unauthorized use of Content which is contrary to the rights granted by Licensor to
              Licensee in this Agreement, Licensee shall not be bound by this Arbitration provision and may defend
              itself and make a claim against Licensor in the appropriate court of law and/or equity.
            </p>
            <p>
              <strong>13) Miscellaneous</strong>
            </p>
            <p>
              Under no situation or circumstance shall Licensee be required to accept any or all Content submitted by
              Licensor. Licensor has none of the rights granted under this Agreement unless Licensee officially accepts
              Content in writing (including via e-mail). Licensee will use reasonable efforts to make the Content
              available for sale on third party services, carriers, websites, and/or other platforms but makes no
              guarantee as to the timeliness of such availability or the manner in which it is presented by Licensee
              Partners to the public. Licensor understands and agrees that Licensee shall not be liable for any actual
              or potential lost revenue due to a delay or failure to have the Content available via third party
              services, carriers, websites, and/or other platforms. However, Licensee will work with Licensor and
              Licensee Partners to facilitate as many of Licensor’s preferences as possible. If any part of this
              Agreement is deemed invalid or unenforceable, it shall not affect the validity or enforceability of the
              remainder of this Agreement, which shall remain in full force and effect as if such invalid or
              unenforceable provision(s) were not a part hereof. This Agreement shall be binding upon and shall inure to
              the benefit of the parties and their respective heirs, executors, successors in interest, and assigns. In
              entering into and performing this Agreement, Licensor and Licensee each have the status of independent
              contractors. This Agreement shall not be deemed to create a partnership or joint venture between the
              parties and neither is the other’s partner or employee. This Agreement and the document at{' '}
              <a href="https://beatstars.zendesk.com/hc/en-us">https://beatstars.zendesk.com/hc/en-us</a> contain the
              entire understanding between the parties with respect to the subject matter hereof and may only be
              modified, altered, or amended by a written agreement signed by all parties. For purposes of this
              provision, a written modification, alteration, or amendment shall include e-mail transmission with proof
              of receipt and acceptance by the receiving party. Licensor agrees that it enters into this Agreement with
              all knowledge of its terms, freely and voluntarily, and with a complete understanding of all the
              consequences of entering into this Agreement. Licensor acknowledges that it has been represented in the
              negotiation and execution of this Agreement by an independent attorney of Licensor’s choice who is
              familiar with the practices of the entertainment industry or Licensor has willingly refrained from so
              doing. Subject to and in accordance with paragraph 12 above, this Agreement shall be governed by and
              construed in accordance with the laws of the State of without giving effect to any choice of law
              principles. All notices and communication desired or required between the parties may be made via e-mail
              transmission, provided however that the sending party obtain proof of receipt of such communication by the
              recipient either by return e-mail, follow up telephone call, or facsimile. Notices that pertain to any
              claim referenced in paragraph 9 shall be given in writing and delivered in any of the following ways:
              personally, via a commercial carrier which provides proof of delivery whether or not such delivery is made
              overnight with the postage prepaid. The Parties have entered into this Agreement on the date first written
              above.
            </p>
          </div>
        </div>
      </div>
      {/* Modal for Privacy Policy */}
      <div className={`${styles.modalOverlay} ${isPrivacyModalOpen ? styles.active : ''}`}>
        <div className={`${styles.modal} ${isPrivacyModalOpen ? styles.active : ''}`}>
          <span className={styles.close} onClick={closePrivacyModal}>
            &times;
          </span>
          <div className={styles.modalContent}>
            <h2>Privacy Policy</h2>
            <p>Effective date: May 25, 2018</p>
            <p>
              BeatStars Inc. is committed to protecting your privacy online. We are also committed to providing you with
              the very best experience we can on our website. In order to enhance your experience at our site we gather
              certain personal information about you that helps us customize our content to your tastes and preferences.
              Please read the following policy to understand how your personal information will be treated as you make
              full use of our website.
            </p>
            <p>
              BeatStars Inc. ("BeatStars", "us", "we", or "our") operates the BeatStars.com website, BeatStars mobile
              applications and other related websites and applications (the "Service").
            </p>
            <p>
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when
              you use our Service and the choices you have associated with that data.
            </p>
            <p>
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and
              use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms
              used in this Privacy Policy have the same meanings as in our Terms and Conditions.
            </p>
            <h3>Definitions</h3>
            <p>
              <strong>Personal Data</strong>
              <br />
              Personal Data means data about a living individual who can be identified from those data (or from those
              and other information either in our possession or likely to come into our possession).
            </p>
            <p>
              <strong>Usage Data</strong>
              <br />
              Usage Data is data collected automatically either generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </p>
            <p>
              <strong>Cookies</strong>
              <br />
              Cookies are small pieces of data stored on a User's device.
            </p>
            <p>
              <strong>Data Controller</strong>
              <br />
              Data Controller means a person who (either alone or jointly or in common with other persons) determines
              the purposes for which and the manner in which any personal data are, or are to be, processed. For the
              purpose of this Privacy Policy, we are a Data Controller of your data.
            </p>
            <p>
              <strong>Data Processor (or Service Providers)</strong>
              <br />
              Data Processor (or Service Provider) means any person (other than an employee of the Data Controller) who
              processes the data on behalf of the Data Controller. We may use the services of various Service Providers
              in order to process your data more effectively.
            </p>
            <p>
              <strong>Data Subject</strong>
              <br />
              Data Subject is any living individual who is the subject of Personal Data.
            </p>
            <p>
              <strong>User</strong>
              <br />
              The User is the individual using our Service. The User corresponds to the Data Subject, who is the subject
              of Personal Data.
            </p>
            <h3>Information Collection and Use</h3>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>
            <h4>Types of Data Collected</h4>
            <p>
              <strong>Personal Data</strong>
              <br />
              While using our Service, we may ask you to provide us with certain personally identifiable information
              that can be used to contact or identify you ("Personal Data"). Personally identifiable information may
              include, but is not limited to:
            </p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <p>
              We may use your Personal Data to contact you with newsletters, marketing or promotional materials and
              other information that may be of interest to you. You may opt out of receiving any, or all, of these
              communications from us by following the unsubscribe link or instructions provided in any email we send or
              by contacting us.
            </p>
            <p>
              <strong>Usage Data</strong>
              <br />
              We may also collect information that your browser sends whenever you visit our Service or when you access
              the Service by or through a mobile device ("Usage Data").
            </p>
            <p>
              This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP
              address), browser type, browser version, the pages of our Service that you visit, the time and date of
              your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            <p>
              When you access the Service by or through a mobile device, this Usage Data may include information such as
              the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device,
              your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and
              other diagnostic data.
            </p>
            <p>
              <strong>Location Data</strong>
              <br />
              We may use and store information about your location if you give us permission to do so ("Location Data").
              We use this data to provide features of our Service, to improve and customize our Service. You can enable
              or disable location services when you use our Service at any time, through your device settings.
            </p>
            <p>
              <strong>Tracking Cookies Data</strong>
              <br />
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain
              information.
            </p>
            <p>
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are
              sent to your browser from a website and stored on your device. Tracking technologies also used are
              beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            <p>Examples of Cookies we use:</p>
            <ul>
              <li>
                <strong>Session Cookies.</strong> We use Session Cookies to operate our Service.
              </li>
              <li>
                <strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various
                settings.
              </li>
              <li>
                <strong>Security Cookies.</strong> We use Security Cookies for security purposes.
              </li>
            </ul>
            <h4>Use of Data</h4>
            <p>
              Our primary goal in collecting personal information is to provide you, the user, with a customized
              experience on our website. We use the collected data for various purposes including:
            </p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service or updates to our website</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>
                To monitor the usage of our Service, estimate the size of our audience and measure certain traffic
                patterns
              </li>
              <li>To detect, prevent and address technical issues</li>
              <li>
                To provide you with news, special offers and general information about other goods, services and events
                which we offer that are similar to those that you have already purchased or enquired about unless you
                have opted not to receive such information
              </li>
              <li>
                To provide such capabilities as personalization services, interactive communications, online shopping,
                and personalized communication between you and the artists you prefer.
              </li>
              <li>To track the progress and number of entries in our promotions and contests</li>
              <li>To track visits to and business conducted at our online store</li>
              <li>
                To contact you on behalf of certain artists, other third parties, deliver targeted advertisements that
                may be of interest to you and information regarding special events at BeatStars.
              </li>
            </ul>
            <p>
              In addition, if we feel that a user abuses the BeatStars.com site in any way, we reserve the right to
              share certain information with third parties. Abuses include (but are not limited to) possible copyright
              infringement, possible libel and slander, possible credit card fraud.
            </p>
            <h4>Sharing of Data</h4>
            <p>
              BeatStars does not sell, rent, or trade your personal information with others. However, when one or more
              of our business partners co-sponsor a service, promotion and/or contest, we may share some or all of the
              information collected in connection with such service, promotion or contest with the co-sponsor(s). If you
              do not want your information to be shared, you will be able to choose not to allow the transfer by not
              using or signing up for that particular service, promotion or contest.
            </p>
            <p>
              In addition, when you make a purchase through our online store, or sign up to receive promotional items
              from us, we may share some of your personal information with third parties helping us to complete your
              transaction or send you the items you signed up to receive. When we share your information with such third
              parties, we will work to ensure that only the information necessary to complete your transaction is
              disclosed. This privacy policy does not apply to such third parties.
            </p>
            <h4>Social Media</h4>
            <p>
              If you share our content through social media, for example by liking us on Facebook, following or tweeting
              about us on Twitter, or giving us a '+1' via Google Plus, those social networks will record that you have
              done so and may set a cookie for this purpose.
            </p>
            <p>
              In some cases, where a page on our website includes content from a social network, such as a Twitter feed,
              or Facebook comments box, those services may set a cookie even where you do not click a button. As is the
              case for all cookies, we cannot access those set by social networks, just as those social networks cannot
              access cookies we set ourselves.
            </p>
            <h4>Third Party Platform Advertising</h4>
            <p>
              We may share your information with third party platform providers (such as Facebook, Google, Twitter and
              Datacrushers) to serve targeted advertising/content to you via the relevant third-party platform based on
              your profile/interests. Your information is used by the third-party platform provider to identify your
              account and serve advertisements to you.
            </p>
            <h4>Facebook Conversion Tracking Pixel</h4>
            <p>
              Our website utilizes the Conversion Tracking Pixel service of Facebook. This tool allows us to follow the
              actions of users after they are redirected to a provider's website by clicking on a Facebook
              advertisement. We are thus able to record the efficiency of Facebook advertisements for statistical and
              market research purposes. The collected data remain anonymous and we cannot see the personal data of any
              individual user, however the collected data is saved and processed by Facebook. Facebook is able to
              connect this data with your Facebook account and the data is used for their own advertising purposes in
              accordance with their policy found under: https://www.facebook.com/about/privacy. Please click here if you
              would like to revoke your permission: https://www.facebook.com/ads/website_custom_audiences/.
            </p>
            <h4>Datacrushers</h4>
            <p>
              Datacrushers is a revenue discovery platform and global leader in site-wide revenue, shopping cart
              abandonment recovery, and acceleration. Shopping cart data and email addresses are shared with the
              BeatStars producers that have opted in for the service. BeatStars producers are bound by their terms and
              conditions located at: https://www.datacrushers.com/terms-and-conditions.
            </p>
            <h4>YouTube</h4>
            <p>
              You acknowledge and agree that this Website uses YouTube API Services. By accessing and/or using the
              Website, You agree to YouTube's Terms of Service and the YouTube Privacy Policy.
            </p>
            <h4>Retention of Data</h4>
            <p>
              We will retain your Personal Data only for as long as is necessary for the purposes set out in this
              Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal
              obligations (for example, if we are required to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <p>
              We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
              shorter period of time, except when this data is used to strengthen the security or to improve the
              functionality of our Service, or we are legally obligated to retain this data for longer time periods.
            </p>
            <h4>Transfer of Data</h4>
            <p>
              Your information, including Personal Data, may be transferred to - and maintained on - computers located
              outside of your state, province, country or other governmental jurisdiction where the data protection laws
              may differ than those from your jurisdiction.
            </p>
            <p>
              If you are located outside United States and choose to provide information to us, please note that we
              transfer the data, including Personal Data, to United States and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of such information represents your
              agreement to that transfer.
            </p>
            <p>
              BeatStars will take all steps reasonably necessary to ensure that your data is treated securely and in
              accordance with this Privacy Policy and no transfer of your Personal Data will take place to an
              organization or a country unless there are adequate controls in place including the security of your data
              and other personal information.
            </p>
            <h4>Disclosure of Data</h4>
            <p>
              <strong>Business Transaction</strong>
              <br />
              If BeatStars Inc. is involved in a merger, acquisition or asset sale, your Personal Data may be
              transferred. We will provide notice before your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>
            <p>
              <strong>Disclosure for Law Enforcement</strong>
              <br />
              Under certain circumstances, BeatStars Inc. may be required to disclose your Personal Data if required to
              do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
            </p>
            <p>
              <strong>Legal Requirements</strong>
              <br />
              BeatStars Inc. may disclose your Personal Data in the good faith belief that such action is necessary to:
            </p>
            <ul>
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of BeatStars Inc.</li>
              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>To protect the personal safety of users of the Service or the public</li>
              <li>To protect against legal liability</li>
            </ul>
            <h4>Security of Data</h4>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the
              Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            <h4>"Do Not Track" Signals</h4>
            <p>
              We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to
              inform websites that you do not want to be tracked. You can enable or disable Do Not Track by visiting the
              Preferences or Settings page of your web browser.
            </p>
            <h4>Your Rights</h4>
            <p>
              BeatStars Inc. aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of
              your Personal Data.
            </p>
            <p>
              Whenever made possible, you can update your Personal Data directly within your account settings section.
              If you are unable to change your Personal Data, please contact us to make the required changes.
            </p>
            <p>
              If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our
              systems, please contact us.
            </p>
            <p>In certain circumstances, you have the right:</p>
            <ul>
              <li>To access and receive a copy of the Personal Data we hold about you</li>
              <li>To rectify any Personal Data held about you that is inaccurate</li>
              <li>To request the deletion of Personal Data held about you</li>
            </ul>
            <p>
              You have the right to data portability for the information you provide to BeatStars Inc.. You can request
              to obtain a copy of your Personal Data in a commonly used electronic format so that you can manage and
              move it.
            </p>
            <p>Please note that we may ask you to verify your identity before responding to such requests.</p>
            <h4>Service Providers</h4>
            <p>
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to
              provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how
              our Service is used. These third parties have access to your Personal Data only to perform these tasks on
              our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <h4>Analytics</h4>
            <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
            <p>
              <strong>Google Analytics</strong>
              <br />
              Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.
              Google uses the data collected to track and monitor the use of our Service. This data is shared with other
              Google services. Google may use the collected data to contextualize and personalize the ads of its own
              advertising network. For more information on the privacy practices of Google, please visit the Google
              Privacy Terms web page: http://www.google.com/intl/en/policies/privacy/
            </p>
            <h4>Payments</h4>
            <p>
              We may provide paid products and/or services within the Service. In that case, we use third-party services
              for payment processing (e.g. payment processors). We will not store or collect your payment card details.
              That information is provided directly to our third-party payment processors whose use of your personal
              information is governed by their Privacy Policy. These payment processors adhere to the standards set by
              PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa,
              Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment
              information. The payment processors we work with are:
            </p>
            <ul>
              <li>
                <strong>PayPal or Braintree</strong>
                <br />
                Their Privacy Policy can be viewed at https://www.paypal.com/webapps/mpp/ua/privacy-full
              </li>
              <li>
                <strong>Stripe</strong>
                <br />
                Their Privacy Policy can be viewed at https://stripe.com/us/privacy
              </li>
            </ul>
            <h4>Links to Other Websites</h4>
            <p>
              Our Service may contain links to other websites that are not operated by us. If you click on a third-party
              link, you will be directed to that third party's website. We strongly advise you to review the Privacy
              Policy of every site you visit. We have no control over and assume no responsibility for the content,
              privacy policies or practices of any third-party websites or services.
            </p>
            <h4>Children's Privacy</h4>
            <p>
              Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect
              personally identifiable information from anyone under the age of 18. If you are a parent or guardian and
              you are aware that your Children has provided us with Personal Data, please contact us. If we become aware
              that we have collected Personal Data from children without verification of parental consent, we take steps
              to remove that information from our servers.
            </p>
            <h4>Changes to This Privacy Policy</h4>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service,
              prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>
            <h4>Contact Us</h4>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: sales@beatstars.com</li>
              <li>By visiting this page on our website: https://www.beatstars.com/sell-music/about/contact-us</li>
            </ul>
            <p>Previous Privacy Policies</p>
            <p>Privacy Policy 2015/06/01</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
