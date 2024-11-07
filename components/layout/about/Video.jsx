"use client";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayBtnImg from "../../../public/images/v1/play-btn.svg";
import URL from "@/components/Url.js";

function Video({ photo, youtubeUrl }) {
    const [isOpen, setOpen] = useState(false);

    // Construct the image URL from the API response
    const image = `${photo}`;

    // Extract the YouTube video ID from the URL
    const getYoutubeVideoId = (url) => {
        const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    };
    const videoId = getYoutubeVideoId(youtubeUrl);

    return (
        <FadeInUp className="aximo-video-wrap">
            {image && ( // Check if 'image' is valid
                <Image
                    src={image}
                    alt="Video Background"
                    sizes="(max-width:768px) 100vw, 70vw"
                    layout="responsive"
                    width={700}
                    height={400}
                />
            )}
            <ModalVideo
                channel="youtube"
                youtube={{ autoplay: 0 }}
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
            <button className="aximo-video-popup play-btn1 video-init" onClick={() => setOpen(true)}>
                <Image src={PlayBtnImg} alt="Play Button" />
            </button>
        </FadeInUp>
    );
}

export default Video;
