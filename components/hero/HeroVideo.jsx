"use client";
import { useState } from "react";
import Image from "next/image";
import PlayBtnImg from "../../public/images/v4/play-icon.svg";  // Play button icon
import CirclePlayImg from "../../public/images/v4/circle-play.png";  // Circle play button

function HeroVideo({ sliderData }) {
    const [isOpen, setOpen] = useState(false);
    // console.log(sliderData)
    // Function to extract Vimeo video ID from the URL
    const getVimeoVideoId = (url) => {
        if (!url) {
            console.error("Invalid Vimeo URL", url);
            return null;  // Return null if the URL is undefined or invalid
        }

        // Regular expression to extract the video ID from the Vimeo URL
        const regExp = /(?:vimeo\.com\/(?:video\/|))(\d{8,11})/; // Matches vimeo.com/{videoId} or vimeo.com/video/{videoId}
        const match = url.match(regExp);

        return match ? match[1] : null;  // Return video ID if matched, otherwise null
    };

    // Extract Vimeo video ID from the provided URL in `sliderData`
    const vimeoUrl = sliderData?.youtube_url;
    const videoId = getVimeoVideoId(vimeoUrl);  // Get video ID from Vimeo URL

    return (
        <div className="aximo-hero-video-section">
            {/* Custom Popup Modal for Vimeo */}
            {isOpen && (
                <div className="custom-video-modal">
                    <div className="custom-modal-overlay" onClick={() => setOpen(false)} />
                    <div className="custom-modal-content">
                        <button
                            className="custom-modal-close-btn"
                            onClick={() => setOpen(false)}
                        >
                            &times;
                        </button>
                        {/* Only load iframe if videoId is present */}
                        {videoId ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            />
                        ) : (
                            <p>Video not available</p>
                        )}
                    </div>
                </div>
            )}

            {/* Play Button */}
            <button className="aximo-video-popup3 video-init" onClick={() => setOpen(true)}>
                <Image className="aximo-video-circle" src={CirclePlayImg} alt="Circle Play Button" />
                <Image className="aximo-video-icon" src={PlayBtnImg} alt="Play Icon" />
            </button>

            {/* Add custom modal styling */}
            <style jsx>{`
                .custom-video-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.8);
                    z-index: 9999;
                }

                .custom-modal-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.6);
                }

                .custom-modal-content {
                    position: relative;
                    background: #fff;
                    width: 80%;
                    height: 80%;
                    max-width: 800px;
                    max-height: 450px;
                }

                .custom-modal-close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 30px;
                    color: #fff;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                }

                .aximo-video-popup3 {
                    position: relative;
                    cursor: pointer;
                    background-color: transparent;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 15px;
                }

                .aximo-video-circle {
                    width: 70px;
                    height: 70px;
                    object-fit: contain;
                }

                .aximo-video-icon {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    object-fit: contain;
                    z-index: 10;
                }
            `}</style>
        </div>
    );
}

export default HeroVideo;
