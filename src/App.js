import React from "react";
import "./index.css";
import Home from './routes/Home';
import Faq from './routes/faq';
import Testiminoal from './routes/Testimonial';
import Pricing from './routes/Pricing';
import Buy from './routes/Buy';
import{ Route, Routes} from 'react-router-dom';
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/pricing" element={<Pricing/>} />
    <Route path="/faq" element={<Faq/>} />
    <Route path="/testimonial" element={<Testiminoal/>} />
    <Route path="/buy" element={<Buy/>} />
   </Routes>
   </>
  );
}

export default App;
