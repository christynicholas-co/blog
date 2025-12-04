import "./fonts/fonts.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

// blog category imports
import BlogLayout from "./components/layouts/BlogLayout";
import Life from "./components/blog/Life";
import Tech from "./components/blog/Tech";
import Books from "./components/blog/Books";
import Kitchen from "./components/blog/Kitchen";

function App() {
  return (
    <Routes>
      {/* main landing blog */}
      <Route path="/" element={<Home />} />

      {/* site pages */}
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />

      {/* blog categories */}
      <Route path="/life" element={<BlogLayout><Life/></BlogLayout>} />
      <Route path="/tech" element={<BlogLayout><Tech /></BlogLayout>} />  
      <Route path="/books" element={<BlogLayout> <Books/></BlogLayout>} />
      <Route path="/kitchen" element={<BlogLayout><Kitchen/></BlogLayout>} />
    </Routes>
  );
}

export default App;
