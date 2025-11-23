import { STATS, TEAM } from "../home.constant";
import Image from "next/image";
import banner from "@/common/assets/img/about.png"
import Banner from "@/common/components/banner/banner";
import about from "@/common/assets/img/about1.jpg"
import styles from './about.module.css';

export default function AboutComponent() {
  return (
    <section id="about" className={styles.aboutSection}>
      <Banner title="About" desc="We turn complex business challenges into opportunities through personalized finance and bookkeeping services. Whether you're at the initial stage of starting your own business or you already have a stable company, we manage accounts and finance with excellence" />
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div>
            <h2 className={styles.aboutTitle}>
              Professional Financial Management and Bookkeeping 
            </h2>
            <p className={styles.aboutText}>
              Lack of professional accounts and Finance management hinders your business achievement. AccureCFO's accounting services include everything that streamlines your business processes. Our experts help you achieve your business vision without incurring any risks to your accounts. We bring profitable solutions with accurate financial reporting. 
            </p>
            <p className={styles.aboutText}>
              We professionally handle your financial data and reports, which helps you maintain the trust of your stakeholders confidently. With AccureCFO, businesses can focus on improvement, while we handle their bookkeeping requirements.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src={about}
              alt="Professional team working"
              className={styles.aboutImageContent}
            />
          </div>
        </div>
      </div>
      <div className={styles.statsSection}>
        {STATS.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={styles.statItem}>
              <div className={styles.statIcon}>
                <IconComponent style={{height: '2rem', width: '2rem', color: '#00A63E'}} />
              </div>
              <div className={styles.statNumber}>
                {stat.number}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className={styles.container}>
        <div className={styles.whyChooseSection}>
          <div className={styles.whyChooseLeft}>
            <h2 className={styles.whyChooseTitle}>Why Choose AccureCFO</h2>
            <p className={styles.whyChooseSubtitle}>
              AccureCFO brings innovation to businesses through talented minds. The possibility of delivering top-notch accounts solutions comes from a dedicated team of experts. 
            </p>
          </div>
          <div className={styles.whyChooseRight}>
            <p className={styles.whyChooseText}>
              We effectively set up accounting objectives, ensuring compliance with regulatory requirements. AccureCFO offers accuracy that sets your accounting objectives up for success. Moreover, AccureCFO identifies the pathway for growth and allocates resources effectively to help you maximize savings.
            </p>
            <p>
              <span className={styles.quoteText}>
                People and the quality of their lives.
              </span>
              <span className={styles.quoteText}>
                That, at its core, is what Bench is about.
              </span>
            </p>
          </div>
        </div>
        <Image src={banner} alt="AccureCFO professional financial management team" className={styles.bannerImage} />
      </div>

        <div className={styles.teamSection}>
            <h3 className={styles.teamTitle}>
            Meet Our Talented Team 
            </h3>
            <p className={styles.teamDescription}>
            AccureCFO's certified team knows how to bring transitions to a business through expertise, the latest tools, and cloud-based software.
            </p>
            <div className={styles.teamGrid}>
            {TEAM?.map((member, index) => (
            <div key={index} className={styles.teamMember}>
                <div className={styles.memberImageContainer}>
                <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className={styles.memberImage}
                />
                </div>
                <h4 className={styles.memberName}>
                {member.name}
                </h4>
                <p className={styles.memberRole}>{member.role}</p>
            </div>
            ))}
        </div>
        </div>
        
    </section>
  );
}
