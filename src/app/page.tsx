import React from 'react';
import Header from './Header'
import PageContent from './mainContent/PageContent'
import Footer from './footer/Footer'

// set up the following division:
// Navbar <- ssr component
// PageContent <- use client and access context in there
// Footer <- ssr component

const Home = () => {
  return (
    <main>
      <Header />
      <PageContent />
      <Footer />
    </main>
  );
};

export default Home;