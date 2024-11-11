import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import StarImg from "../../../public/images/v1/star.png";
import ShapeImg from "../../../public/images/v1/shape1.png";
import URL from "@/components/URL.js";

function HeroContent({ sliderData }) {
    return (
        <FadeInStaggerTwo className="aximo-hero-content">
            <FadeInStaggerTwoChildren>
                <h1>
                    <span className="aximo-title-animation">
                        {sliderData.primary_title} 
                        <Image src={StarImg} alt="Star" className="ps-3" width={70} height={70} />
                    </span><br />
                    {sliderData.secondary_title}
                </h1>
            </FadeInStaggerTwoChildren>
            <FadeInStaggerTwoChildren>
                <p>{sliderData.description}</p>
            </FadeInStaggerTwoChildren>
            <FadeInStaggerTwoChildren>
                <div className="aximo-hero-user-wrap">
                    <div className="aximo-hero-user-thumb">
                        <div className="aximo-hero-user-thumb-item">
                            <Image src={`${URL}/${sliderData.user_image_one.replace(/\\/g, '/')}`} alt="User Image One" width="100" height="100" />
                        </div>
                        <div className="aximo-hero-user-thumb-item">
                            <Image src={`${URL}/${sliderData.user_image_two.replace(/\\/g, '/')}`} alt="User Image Two" width="100" height="100" />
                        </div>
                        <div className="aximo-hero-user-thumb-item">
                            <Image src={`${URL}/${sliderData.user_image_three.replace(/\\/g, '/')}`} alt="User Image Three" width="100" height="100" />
                        </div>
                    </div>
                    <div className="aximo-hero-user-data">
                        <p>{sliderData.sub_title}</p>
                    </div>
                </div>
            </FadeInStaggerTwoChildren>
            <FadeInStaggerTwoChildren>
                <Link className="aximo-call-btn" href={sliderData.button_url}>
                    {sliderData.button_text} <i className="icon-call"></i>
                </Link>
                <div className="aximo-hero-shape">
                    <Image src={ShapeImg} alt="Shape" width={300} height={200} />
                </div>
            </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
    );
}

export default HeroContent;
