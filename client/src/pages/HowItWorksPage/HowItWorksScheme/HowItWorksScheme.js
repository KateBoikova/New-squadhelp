import React from 'react';
import styles from './HowItWorksScheme.module.sass';
import { ReactComponent as PrizeIcon } from './prize.svg';
import { ReactComponent as WorkingImage } from './personWorking.svg';

function HowItWorksScheme () {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.prizeIcon}>
          <PrizeIcon />
        </div>
        <h2 className={styles.header}>How Do Naming Contests Work?</h2>
      </div>
      <div className={styles.workingImage}>
        <WorkingImage />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.number}>1.</span>Fill out your Naming Brief
          and begin receiving name ideas in minutes
        </li>
        <li className={styles.listItem}>
          <span className={styles.number}>2.</span>Rate the submissions and
          provide feedback to creatives. Creatives submit even more names based
          on your feedback.
        </li>
        <li className={styles.listItem}>
          <span className={styles.number}>3.</span>Our team helps you test your
          favorite names with your target audience. We also assist with
          Trademark screening.
        </li>
        <li className={styles.listItem}>
          <span className={styles.number}>4.</span>Pick a Winner. The winner
          gets paid for their submission.
        </li>
      </ul>
    </section>
  );
}

export default HowItWorksScheme;
