import React from 'react';
import Header from './Header'
import Test from './mainContent/PageContent'
import Footer from './footer/Footer'

// note, set up a division between what home has in it:
// Navbar
// cards <- use client and access context there, leaving the rest to ssr
// Footer

const Home = () => {
  return (
    <main>
      <Header />
      <Test />
      <Footer />
    </main>
  );
};

export default Home;