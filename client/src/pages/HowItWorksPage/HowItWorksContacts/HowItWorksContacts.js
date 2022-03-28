import React from 'react';
import styles from './HowItWorksContacts.module.sass';

function HowItWorksContacts () {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsA}>
        <div className={styles.arrow}>
          <i class='fas fa-angle-right btn-icon__inner'></i>
        </div>
        <h4 className={styles.contactsHeader}>
          Pay a Fraction of cost vs hiring an agency
        </h4>
        <p>
          For as low as $199, our naming contests and marketplace allow you to
          get an amazing brand quickly and affordably.
        </p>
      </div>
      <div className={styles.contactsC}>
        <div className={styles.arrow}>
          <i class='fas fa-angle-right btn-icon__inner'></i>
        </div>
        <h4 className={styles.contactsHeader2}>Satisfaction Guarantee</h4>
        <p>
          Of course! We have policies in place to ensure that you are satisfied
          with your experience.
        </p>
        <a href='#'>Learn more</a>
      </div>
      <div className={styles.contactsB}>
        <h3 className={styles.questionsHeader}>Questions?</h3>
        <p>
          Speak with a Squadhelp platform expert to learn more and get your
          questions answered.
        </p>
        # (877) 355-3585 <p>Call us for assistance</p>
      </div>
    </div>
  );
}

export default HowItWorksContacts;
