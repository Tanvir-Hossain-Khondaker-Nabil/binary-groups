"use client";
import CountUp from "react-countup";

function AboutCounter({ introData }) {
    // Check if introData is available
    if (!introData) {
        return <div></div>;
    }

    return (
        <div className="aximo-counter-wrap">
            <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                    <span className="aximo-counter">
                        <CountUp end={parseInt(introData.first_counter_number)} duration={3} redraw={true} enableScrollSpy />
                    </span>
                    {introData.first_counter_sub_title}
                </h2>
                <p>{introData.first_counter_content}</p>
            </div>
            <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                    <span className="aximo-counter">
                        <CountUp end={parseInt(introData.second_counter_number)} duration={3} redraw={true} enableScrollSpy />
                    </span>
                    {introData.second_counter_sub_title}
                </h2>
                <p>{introData.second_counter_content}</p>
            </div>
            <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                    <span className="aximo-counter">
                        <CountUp end={parseInt(introData.third_counter_number)} duration={3} redraw={true} enableScrollSpy />
                    </span>
                    {introData.third_counter_sub_title}
                </h2>
                <p>{introData.third_counter_content}</p>
            </div>
        </div>
    );
}

export default AboutCounter;
