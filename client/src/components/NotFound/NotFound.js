import React from 'react';
import styles from './NotFound.module.sass';

function NotFound (props) {
  const { history } = props;
  setTimeout(() => {
    history.push('/');
  }, 3000);
  return (
    <div className={styles.container}>
      <span>Not Found</span>
    </div>
  );
}

export default NotFound;
