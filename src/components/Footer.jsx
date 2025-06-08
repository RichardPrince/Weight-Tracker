import '../Style/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} idk yet. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;