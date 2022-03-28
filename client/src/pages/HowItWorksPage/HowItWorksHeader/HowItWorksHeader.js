import React from 'react';
import styles from './HowItWorksHeader.module.sass';
import { ReactComponent as PhoneImage } from './phoneImage.svg';
import { ReactComponent as PeopleIcon } from './peopleIcon.svg';
import { ReactComponent as MonitorIcon } from './monitorIcon.svg';
import { ReactComponent as LightbulbIcon } from './lightbulbIcon.svg';
import CONSTANTS from '../../../constants';

function HowItWorksHeader () {
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.textContainer}>
          <div className={styles.label}>World's #1 Naming Platform</div>
          <h1 className={styles.header}>How Does Squadhelp Work?</h1>
          <p className={styles.headerText}>
            Squadhelp helps you come up with a great name for your business by
            combining the power of crowdsourcing with sophisticated technology
            and Agency-level validation services.
          </p>
          <a className={styles.playBtn} href={CONSTANTS.MOCK_HREF}>
            <i className='fas fa-play'></i>Play video
          </a>
        </div>
        <div className={styles.phoneImageContainer}>
          <PhoneImage />
        </div>
      </section>
      <section>
        <div className={styles.usage}>
          <div className={styles.label}>Our Services</div>
          <h2 className={styles.subHeader}>3 Ways To Use Squadhelp</h2>
          <p className={styles.usageText}>
            Squadhelp offers 3 ways to get you a perfect name for your business.
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <PeopleIcon />
            </div>
            <h3 className={styles.cardHeader}>Launch a Contest</h3>
            <p className={styles.cardText}>
              Work with hundreds of creative experts to get custom name
              suggestions for your business or brand. All names are auto-checked
              for URL availability.
            </p>
            <a className={styles.cardBtn} href={CONSTANTS.MOCK_HREF}>
              Launch a Contest
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <MonitorIcon />
            </div>
            <h3 className={styles.cardHeader}>Explore Names For Sale</h3>
            <p className={styles.cardText}>
              Our branding team has curated thousands of pre-made names that you
              can purchase instantly. All names include a matching URL and a
              complimentary Logo Design
            </p>
            <a className={styles.cardBtn} href={CONSTANTS.MOCK_HREF}>
              Explore Names For Sale
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <LightbulbIcon />
            </div>
            <h3 className={styles.cardHeader}>Agency-level Managed Contests</h3>
            <p className={styles.cardText}>
              Our Managed contests combine the power of crowdsourcing with the
              rich experience of our branding consultants. Get a complete
              agency-level experience at a fraction of Agency costs
            </p>
            <a className={styles.cardBtn} href={CONSTANTS.MOCK_HREF}>
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorksHeader;
