"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMapReact from "google-map-react";
import LocationPin from "@/components/contact/LocationPin";
import Call2Img from "../../public/images/icon/call2.svg";
import EmailImg from "../../public/images/icon/email.svg";
import MapImg from "../../public/images/icon/map.svg";
import Star2Img from "../../public/images/v1/star2.png";
import URL from "@/components/URL.js";
function ContactUs() {
  // State for contact information and loading/error states
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contact info from API on component mount
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(`${URL}/api/contact_us_section`);
        if (!response.ok) {
          throw new Error("Failed to fetch contact information");
        }
        const data = await response.json();
        setContactInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  // Handle loading and error states
  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Ensure latitude and longitude are valid numbers
  const lat = parseFloat(contactInfo.lat);
  const lng = parseFloat(contactInfo.lng);

  if (isNaN(lat) || isNaN(lng)) {
    return <div>Error: Invalid latitude or longitude data.</div>;
  }

  // Map center and zoom
  const location = {
    center: { lat, lng },
    zoom: 11, // You can adjust the zoom level as needed
  };

  return (
    <>
      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info Section */}
      <div className="aximo-contact-info-section">
        <div className="container">
          <div className="aximo-contact-info-title">
            <h2>
              <span className="aximo-title-animation">
                {contactInfo.title || "Contact Information"}
                <span className="aximo-title-icon">
                  <Image src={Star2Img} alt="Star" />
                </span>
              </span>
            </h2>
          </div>
          <div className="row">
            {/* Contact Info Box 1 */}
            <div className="col-xl-4 col-md-6">
              <div className="aximo-contact-info-box">
                <div className="aximo-contact-info-icon">
                  <Image src={Call2Img} alt="Call Img" />
                </div>
                <div className="aximo-contact-info-data">
                  <span>{contactInfo.first_container_title || "Call us"}</span>
                  <p>{contactInfo.first_container_content || "+351 939 272 026"}</p>
                </div>
              </div>
            </div>

            {/* Contact Info Box 2 */}
            <div className="col-xl-4 col-md-6">
              <div className="aximo-contact-info-box">
                <div className="aximo-contact-info-icon">
                  <Image src={EmailImg} alt="Email" />
                </div>
                <div className="aximo-contact-info-data">
                  <span>{contactInfo.second_container_title || "Email us"}</span>
                  <p>{contactInfo.second_container_content || "geral@binaryechoes.com"}</p>
                </div>
              </div>
            </div>

            {/* Contact Info Box 3 */}
            <div className="col-xl-4 col-md-6">
              <div className="aximo-contact-info-box">
                <div className="aximo-contact-info-icon">
                  <Image src={MapImg} alt="Map" />
                </div>
                <div className="aximo-contact-info-data">
                  <span>{contactInfo.third_container_title || "Office Address"}</span>
                  <p>{contactInfo.third_container_content || "4132 Thornridge City, New York."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Component */}
      <div className="section">
        <div className="container">
          <div className="aximo-map-wrap">
            <div id="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }} // Add your Google Maps API key here
                defaultCenter={location.center}
                defaultZoom={location.zoom}
              >
                <LocationPin lat={location.center.lat} lng={location.center.lng} />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
