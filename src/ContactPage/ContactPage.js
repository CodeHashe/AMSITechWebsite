import ContactPageScreenOne from "./ContactPageScreenOne";

function ContactPage() {
    return (
        <div>
            <ContactPageScreenOne 
                heading={"Contact Us"} 
                paragraph={"We are here to help you. Feel free to contact us for any inquiries or feedback. We'd love to hear from you."} 
            />
            <div style={{ padding: "20px", fontFamily: "PoppinsMedium, sans-serif" }}>
                <h2 
                    style={{
                        fontFamily: "MagistralBlack, sans-serif", 
                        fontSize: "2rem", 
                        fontWeight: "900", 
                        color: "#333"
                    }}
                >
                    Contact Details
                </h2>
                <p 
                    style={{
                        fontSize: "1rem", 
                        fontWeight: "500", 
                        color: "#555", 
                        margin: "10px 0"
                    }}
                >
                    Phone: 03367196278
                </p>
                <div style={{ marginTop: "20px" }}>
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.613820688563!2d74.3119468764754!3d31.47980774914359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905fedf6062a5%3A0x85bece7ea5ec3f1f!2sDepilex%20Beauty%20Clinic%20%26%20Depilex%20Men%20Salon%20Model%20Town%20Lahore!5e0!3m2!1sen!2s!4v1737396448841!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: "0", borderRadius: "8px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <p 
                        style={{
                            fontSize: "1rem", 
                            fontWeight: "500", 
                            color: "#555", 
                            marginTop: "10px"
                        }}
                    >
                        Address: 21K Model Town, Lahore, Pakistan
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
