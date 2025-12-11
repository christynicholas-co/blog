import { FaInstagram, FaTiktok, FaThreads } from 'react-icons/fa6'; 

export default function FooterLinks() {
  return (
    <>
      <div className="col-xl-4 col-lg-6"> {/* Increased width for subscribe section */}
        <h3>Subscribe for Updates</h3>
        <div className="newsletter-form">
              <form
                action="#"
                method="POST"
                className="php-email-form"
                id="newsletter-form"
              >
                <input type="email" className="mb-3" name="email" placeholder="Enter your Email address" required />
                <input type="submit" value="Subscribe" />
              </form>
            </div>

         {/* The updated social links div */}
      <div className="social-links d-flex mt-3">
        {/* Use the imported components. Add 'me-3' (margin-end/right: 3) for spacing */}
        <a href="https://www.instagram.com/ " target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="me-3">
          <FaInstagram size={24} /> {/* Size prop controls the icon size */}
        </a>
        
        <a href="https://www.tiktok.com/explore" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="me-3">
          <FaTiktok size={24} />
        </a>
        
        <a href="https://www.threads.com/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Threads">
          {/* Note: The 'FaThreads' icon from Font Awesome 6 looks like the official 'at' symbol logo. */}
          <FaThreads size={24} />
        </a>
        
        {/* The newsletter link remains text-based */}
        <a href="/newsletter" rel="noreferrer" className="ms-3"> {/* Added ms-3 (margin-start/left: 3) for spacing from the Threads icon */}
          Newsletter
        </a>
      </div>
      </div>
      {/* 
        The next three columns are now all col-xl-2. 
        If these four top-level divs are wrapped in a Bootstrap <div class="row">...</div>,
        the first column (width 4) leaves exactly 8 units of width remaining for the 
        next three columns (width 2+2+2 = 6 units), giving you space for alignment.
      */}
      <div className="col-xl-2 col-lg-2 col-md-4"> {/* Added col-md classes for better mobile alignment */}
        <h3>HOME</h3>
        <nav className="footer-nav">
          <ul>
            <li><a href="/template1">ABOUT</a></li>
            <li><a href="/template2">SERVICES</a></li>
            <li><a href="/template1">FAQs</a></li>
            <li><a href="/template2">CONTACT</a></li>
          </ul>
        </nav>
      </div>

      <div className="col-xl-2 col-lg-2 col-md-4">
        <h3>SHOP</h3>
        <nav className="footer-nav">
          <ul>
            <li><a href="/template1">TECH</a></li>
            <li><a href="/template2">KITCHEN</a></li>
            <li><a href="/template1">BOOKS</a></li>
            <li><a href="/template2">Etc.</a></li>
          </ul>
        </nav>
      </div>

      <div className="col-xl-2 col-lg-2 col-md-4"> {/* This is your new BLOG div */}
        <h3>BLOG</h3>
        <nav className="footer-nav">
          <ul>
            <li><a href="/category1">LIFE</a></li>
            <li><a href="/category2">TECH</a></li>
            <li><a href="/category1">BOOKS</a></li>
            <li><a href="/category2">KITCHEN</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
