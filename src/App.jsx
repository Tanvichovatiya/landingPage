import React, { useEffect } from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Feature from './component/feature';
import About from './component/About';
import ScrollReveal from 'scrollreveal';
import WatchReviewApp from './component/review';
function App() {
  useEffect(() => {
    ScrollReveal({
      reset:true,
      distance:'60px',
      duration:2500,
      delay:400
    });
    ScrollReveal().reveal('.navbar', {
      delay: 200,
      origin: 'left',    });
  
     ScrollReveal().reveal('.text',{delay:320,origin:'top'});
     ScrollReveal().reveal('.button',{delay:380,origin:'bottom'});
    ScrollReveal().reveal('img',{delay:400,origin:'top'})
    ScrollReveal().reveal('#custo1',{delay:430,origin:'left'})
    ScrollReveal().reveal('#custo2',{delay:440,origin:'right'})


   }, []);
  return (
    // <WatchReviewApp/>
        <BrowserRouter>
      //  <Routes>
      //   <Route path='/' element={<Home/>}></Route>
      //   <Route path='/feature' element={<Feature/>}></Route>
      //   <Route path='/about' element={<About/>}></Route>

      //  </Routes>
       </BrowserRouter>
  );
}

export default App;
