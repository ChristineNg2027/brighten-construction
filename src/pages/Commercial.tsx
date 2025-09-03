import "../styles/pages.css";

export default function Commercial() {
  return (
    <div className="commercial-wrap">
      <header className="section-intro">
        <h1>Commercial Services</h1>
      </header>

      <section className="grid-two">
        <aside className="services-card card">
          <ul className="service-list enhanced">
            <li>Retail and Office Construction</li>
            <li>Custom Renovations</li>
            <li>Infrastructure Improvements</li>
          </ul>
        </aside>

        <form
          className="contact-form card"
          action="https://formsubmit.co/christineng2027@gmail.com"
          method="POST"
          id="contact"
        >
          <h2 className="form-title">Contact Us</h2>
          <h4>brightengc@gmail.com</h4>

          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            <span>Contact Info</span>
            <input type="text" name="email" placeholder="Email or phone" required />
          </label>

          <label>
            <span>Your Message</span>
            <textarea name="message" placeholder="Project details, timeline…" rows={5} required></textarea>
          </label>

          {/* Optional hidden fields */}
          {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />

          <button type="submit" className="btn-dark btn-full">Send</button>
        </form>
      </section>
    </div>
  );
}