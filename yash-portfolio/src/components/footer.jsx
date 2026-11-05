function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Yash Kumar.
        Built with React.js
      </p>

      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

export default Footer;