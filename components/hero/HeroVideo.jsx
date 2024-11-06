"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import CirclePlayImg from "../../public/images/v4/circle-play.png";
import PlayIconImg from "../../public/images/v4/play-icon.svg";

function HeroVideo({ sliderData }) {
    const [isOpen, setOpen] = useState(false);

    // Extract the YouTube video ID from the URL in `sliderData`
    const youtubeUrl = sliderData?.youtube_url;
    const videoId = youtubeUrl ? youtubeUrl.split("v=")[1] || youtubeUrl.split("/").pop() : "";

    return (
        <div className="aximo-hero-video-section">
            <ModalVideo
                channel="youtube"
                youtube={{ autoplay: 0 }}
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
            <button className="aximo-video-popup3 video-init" onClick={() => setOpen(true)}>
                <Image className="aximo-video-circle" src={CirclePlayImg} alt="CirclePlayImg" />
                <Image className="aximo-video-icon" src={PlayIconImg} alt="PlayIconImg" />
            </button>
        </div>
    );
}

export default HeroVideo;
