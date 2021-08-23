import "./style.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <div>
              <h3>About </h3>
            </div>
            <div className="footer-links">About Us</div>
            <div className="footer-links">Contact Us</div>
            <div className="footer-links">Careers</div>
            <div className="footer-links">Corporate Information</div>
          </div>
          <div className="col">
            <div>
              <h3>Help</h3>
            </div>
            <div className="footer-links">Payments</div>
            <div className="footer-links">Shipping</div>
            <div className="footer-links">FAQ</div>
            <div className="footer-links">Cancellation</div>
          </div>
          <div className="col">
            <div>
              <h3>Policy</h3>
            </div>
            <div className="footer-links">Terms & Conditions</div>
            <div className="footer-links">Return Policy</div>
            <div className="footer-links">Security</div>
            <div className="footer-links">Privacy</div>
            <div className="footer-links">Sitemap</div>
          </div>
          <div className="col">
            <div>
              <h3>Social</h3>
            </div>
            <InstagramIcon color="secondary" />
            <br />
            <TwitterIcon color="primary" />
            <br />
            <FacebookIcon color="black" />
          </div>
        </div>
        <hr
          style={{
            color: "white",
            backgroundColor: "#000000",
          }}
        />

        <div className="company">
          <p className="col-sm">&copy;{new Date().getFullYear()} Cosmos Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
