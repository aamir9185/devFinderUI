function Footer() {
    return (
      <footer className="footer bg-base-300 text-neutral-content p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <aside className="flex items-center gap-2">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811..."></path>
            </svg>
            <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
          </aside>
  
          {/* Social Media Links */}
          <nav className="flex gap-4 mt-2 md:mt-0">
            <a className="hover:text-primary transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832..."></path>
              </svg>
            </a>
            <a className="hover:text-primary transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631..."></path>
              </svg>
            </a>
            <a className="hover:text-primary transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642..."></path>
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  