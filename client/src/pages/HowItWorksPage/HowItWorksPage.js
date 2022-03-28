import React from 'react';
import HowItWorksFAQ from './Accordeon/HowItWorksFAQ';
import HowItWorksHeader from './HowItWorksHeader/HowItWorksHeader';
import HowItWorksUsage from './HowItWorksUsage/HowItWorksUsage';
import HowItWorksScheme from './HowItWorksScheme/HowItWorksScheme';
import HowItWorksRatings from './HowItWorksRatings/HowItWorksRatings';
import HowItWorksStart from './HowItWorksStart/HowItWorksStart';
import HowItWorksContacts from './HowItWorksContacts/HowItWorksContacts';
import HowItWorksBrands from './HowItWorksBrands/HowItWorksBrands';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';

function HowItWorksPage (props) {
  const { isFetching } = props;
  return (
    <>
      <Header />
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <HowItWorksHeader />
          <HowItWorksUsage />
          <HowItWorksScheme />
          <HowItWorksFAQ />
          <HowItWorksStart />
          <HowItWorksRatings />
          <HowItWorksContacts />
          <HowItWorksBrands />
          <Footer />
        </>
      )}
    </>
  );
}

export default HowItWorksPage;
