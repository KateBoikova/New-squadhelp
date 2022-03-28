import React from 'react';
import styles from './HowItWorksStart.module.sass';
import { ReactComponent as AbstractShape1 } from './abstractShape1.svg';
import { ReactComponent as AbstractShape2 } from './abstractShape2.svg';

function HowItWorksStart () {
  return (
    <div className={styles.startContainer}>
      <AbstractShape1 className={styles.img1} />
      <div className={styles.startBanner}>
        <h2 className={styles.startBannerHeader}>Ready to get started?</h2>
        <p className={styles.startBannerText}>
          Fill out your contest brief and begin receiving custom name
          suggestions within minutes.
        </p>
        <button className={styles.startBannerBtn}>
          <a href='#'>Start A Contest</a>
        </button>
      </div>
      <AbstractShape2 className={styles.img2} />
    </div>
  );
}

export default HowItWorksStart;
