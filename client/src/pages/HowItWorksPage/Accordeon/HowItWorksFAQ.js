import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
// import animate from 'animate.css';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import styles from './HowItWorksFAQ.module.sass';
import items from './FAQ.json';

function HowItWorksFAQ () {
  return (
    <section className={styles.faqContainer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li key={uuidv4()} className={styles.navListItem}>
            <a href='#launch' className={styles.navListLink}>
              Launching A Contest
            </a>
          </li>
          <li key={uuidv4()} className={styles.navListItem}>
            <a href='#buy' className={styles.navListLink}>
              Buying From Marketplace
            </a>
          </li>
          <li key={uuidv4()} className={styles.navListItem}>
            <a href='#manage' className={styles.navListLink}>
              Managed Contests
            </a>
          </li>
          <li key={uuidv4()} className={styles.navListItem}>
            <a href='#create' className={styles.navListLink}>
              For Creatives
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <h2 className={styles.faqHeader}>Launching A Contest</h2>
        <Accordion
          preExpanded={[0]}
          allowZeroExpanded
          className={styles.accordion}
        >
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              uuid={index}
              className={styles.accordionItem}
            >
              <AccordionItemHeading className={styles.accordionHeading}>
                <AccordionItemButton className={styles.accordionBtn}>
                  <h3>{item.heading}</h3>
                  <div className='fas fa-arrow-down small'></div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={classNames(
                  styles.accordionContent
                  //animate__animated,
                  //animate__slideInDown
                )}
              >
                {item.content}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default HowItWorksFAQ;
