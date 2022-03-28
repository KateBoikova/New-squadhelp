import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Stars } from './stars.svg';
import { ReactComponent as SharingFiles } from './sharingFiles.svg';
import img from './peopleAvatars.png';
import styles from './HowItWorksRatings.module.sass';

function HowItWorksRatings () {
  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.ratingsItem}>
        <Stars className={styles.img} />
        <span className={styles.emphasis}>4.9 out of 5</span> stars from 25,000+
        customers.
      </div>
      <div className={styles.ratingsItem}>
        <img
          src={img}
          alt='people avatars'
          className={classNames(styles.img, styles.peopleAvatars)}
        />
        Our branding community stands
        <span className={styles.emphasis}> 200,000+</span> strong.
      </div>
      <div className={styles.ratingsItem}>
        <SharingFiles className={styles.img} />
        <span className={styles.emphasis}> 140+ Industries</span> supported
        across more than
        <span className={styles.emphasis}> 85 countries</span> – and counting.
      </div>
    </div>
  );
}

export default HowItWorksRatings;
