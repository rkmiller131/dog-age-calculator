import React from 'react';
import Header from './Header'
import Test from './TestRoute'
import Footer from './footer/Footer'

// note, set up a division between what home has in it:
// Navbar
// cards <- use client and access context there, leaving the rest to ssr
// Footer

// tailwind config not available for ssr components, so used inline styling here
const mainStyle: React.CSSProperties = {
  backgroundImage: 'url("/park.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
const Home = () => {
  return (
    <main style={mainStyle}>
      <Header />
      <Test />
      <Footer />
    </main>
  );
};

export default Home;