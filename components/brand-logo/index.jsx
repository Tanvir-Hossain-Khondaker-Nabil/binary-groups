"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import URL from "@/components/URL.js"; // Adjust if necessary

const swiperSettings = {
  centeredSlides: true,   // Ensures the slides are always centered
  speed: 6000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  allowTouchMove: false,
  modules: [Autoplay],
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
  initialSlide: 0,  // Ensures the first slide starts in the center
};

function BrandLogo() {
  const [logos, setLogos] = useState([]); // Store logo images
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("https://binaryinsurance.pt/admin/public/api/logo_slider");
        if (!response.ok) throw new Error("Failed to fetch logos");
        const data = await response.json();

        // Parse the 'photo' field which is a string of JSON
        const parsedLogos = JSON.parse(data.photo);
        setLogos(parsedLogos);
      } catch (error) {
        console.error("Error fetching logos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (loading) return <div></div>; // Show loading state if still fetching data

  return (
    <div className="aximo-brandlogo-section2 extra-side-margin">
    <div className="aximo-brandlogo-title">
        <p>We help hundreds of companies to grow</p>
      </div>
      <div className="swiper aximo-auto-slider">
        <Swiper {...swiperSettings}>
          {logos.map((logo, index) => (
            <SwiperSlide key={index} >
              <div className="aximo-brandlogo-item">
                <Image
                  src={`${URL}/${logo.replace(/\\/g, "/")}`} // Make sure to adjust the URL path
                  alt={`Brand Logo ${index + 1}`}
                  sizes="100vw"
                  width={150} // Set your preferred width
                  height={100} // Set your preferred height
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BrandLogo;
