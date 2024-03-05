import React, { useState, useEffect } from 'react';

import Navbar from "./Navbar";


import Header from "./Header";
import Card from "./Card";



function Home(){
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 100;
          console.log('isScrolled:', isScrolled);
          setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      console.log('scrolled:', scrolled);

    return(
        <>
        <Navbar/>
        <Header/>
        <Card/>
        
    
        </>
    )
}

export default Home;

// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Navbar1 from './components/Navbar1';

// function App() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       {scrolled ? <Navbar1 /> : <Navbar />}
//       {/* Your rest of the application content */}
//     </div>
//   );
// }

// export default App;
