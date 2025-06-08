import "../Style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Weight Tracker. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
