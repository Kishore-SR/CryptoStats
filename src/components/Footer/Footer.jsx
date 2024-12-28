import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line"></div> 
      <div className="footer-bottom">
        <p>CryptoStats &copy; 2024</p>
        <a href="https://bento.me/ksr" target="_blank">
          <p className="my-name">
            <i className="ri-sparkling-2-fill"></i> Kishore S R
          </p>
        </a>
      </div>
    </footer>
  );
};
