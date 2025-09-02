import "../styles/pages.css";

export default function Commercial() {
  return (
    <div className="page-container">
      <h2 className="page-title">Commercial Services</h2>
      <ul className="service-list">
        <li>Retail and Office Construction</li>
        <li>Custom Renovations</li>
        <li>Infrastructure Improvements</li>
      </ul>

      <h3 className="contact-heading">Contact Us</h3>
      <form
        className="contact-form"
        action="https://formsubmit.co/christineng2027@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="email" placeholder="Contact Info" required />
        <textarea name="message" placeholder="Your Message" rows={4} required></textarea>

        {/* Optional hidden fields */}
        {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}