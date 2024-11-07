import FadeInRight from "@/components/animation/FadeInRight";
import Image from "next/image";
import URL from "@/components/URL.js";

function HeroThumbs({ sliderData }) {
    return (
        <FadeInRight className="aximo-hero-thumb">
            <Image 
                src={`${URL}/${sliderData.photo.replace(/\\/g, '/')}`} 
                alt="Hero thumb" 
                width="800"  // Set your desired width
                height="600" // Set your desired height
                sizes="100vw" 
                priority 
            />
        </FadeInRight>
    );
}

export default HeroThumbs;
