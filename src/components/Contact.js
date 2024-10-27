import React from "react";
import '../stylesSheets/Contact.css';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="contact-container1" id="Contact">
            <h2 className="contact-h2">Contact Us</h2>
            <div className="contact-content1">
                <div className="contact-form1">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group1">
                            <label className="contact-lable1" htmlFor="message">Any Queries:</label>
                            <textarea className="contact-textarea1"
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="Type your query here..."
                            ></textarea>
                        </div>
                        <button className="contact-btn" type="submit">Send Message</button>
                    </form>
                    <div className="contact-details">
                        <h3 className="contact-details-h3">Contact Details</h3>
                        <p className="contact-details-p">Email: <a href="mailto:sreerajmutha@gmail.com">sreerajmutha@gmail.com</a></p>
                        <p className="contact-details-p">Mobile: <a href="tel:9391410078">9391410078</a></p>
                    </div>
                </div>
                <div className="map-container1">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5050974128913!2d80.61870621473945!3d16.507400588026978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f97ee3c1ef43%3A0xe9df55db30e693b4!2sChittinagar%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520001!5e0!3m2!1sen!2sin!4v1698465671111!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;
