"use client"; // Mark the component as a Client Component
import BreadCrumb from "@/components/common/Breadcrumb";
import { useEffect, useState } from "react";
import Image from "next/image";
import FadeInRight from "@/components/animation/FadeInRight"; // Adjust the path if necessary
import FadeInUp from "@/components/animation/FadeInUp"; // Adjust the path if necessary
import URL from "@/components/URL.js"; // Adjust the path if necessary
import Star2Img from "../../../public/images/v1/star2.png"; // Adjust the path if necessary

function ServiceDetails() {
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract the ID from the URL
    const pathParts = window.location.pathname.split('/');
    const id = pathParts[pathParts.length - 1]; // Assuming the ID is the last segment of the URL

    const fetchServiceData = async () => {
      if (id) {
        try {
          const response = await fetch(`${URL}/api/service_detail/${id}`);
          if (!response.ok) throw new Error("Failed to fetch service data");
          const data = await response.json();
          setServiceData(data);
        } catch (error) {
          console.error("Error fetching service data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchServiceData();
  }, []);

  if (loading) return <div></div>;
  if (!serviceData) return <div>No service data available.</div>;

  return (<>
    <BreadCrumb title={`${serviceData.service_title}`} />
    <div className="section aximo-section-padding2 pb-0">

      <div className="container">
        <div className="aximo-service-details-wrap">
          <FadeInUp className="aximo-service-details-thumb">
            <Image
              src={`${URL}/${serviceData.photo.replace(/\\/g, "/")}`}
              alt="Single img"
              sizes="100vw"
              width="1300"
              height="600"
            />
          </FadeInUp>
          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    {serviceData.primary_title}
                  </span>
                  {serviceData.secondary_title}
                </h2>
                <p>{serviceData.primary_description}</p>
                <p>{serviceData.secondary_description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>1/ {serviceData.first_container_title}:</h3>
                <ul>
                  <li>{serviceData.first_container_list_one}</li>
                  <li>{serviceData.first_container_list_two}</li>
                  <li>{serviceData.first_container_list_three}</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>2/ {serviceData.second_container_title}:</h3>
                <ul>
                  <li>{serviceData.second_container_list_one}</li>
                  <li>{serviceData.second_container_list_two}</li>
                  <li>{serviceData.second_container_list_three}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="aximo-faq-wrap">
            <div className="row">
              <div className="col-lg-5 offset-lg-1 order-lg-1">
                <FadeInRight className="aximo-service-details-thumb2">
                  <Image
                    src={`${URL}/${serviceData.approach_photo.replace(/\\/g, "/")}`}
                    alt="service"
                    sizes="100vw"
                    width={500}
                    height={400}
                  />
                </FadeInRight>
              </div>
              <div className="col-lg-6">
                <div className="aximo-default-content">
                  <h2>
                    <span className="aximo-title-animation">
                      {serviceData.approach_title}
                      <span className="aximo-title-icon">
                        <Image
                          src={Star2Img}
                          alt="star"
                          width={24}
                          height={24}
                        />
                      </span>
                    </span>
                  </h2>
                  <p>{serviceData.approach_description}</p>
                </div>
                <div className="aximo-our-approach">
                  {[
                    {
                      icon: serviceData.approach_first_container_icon,
                      title: serviceData.approach_first_container_title,
                      description: serviceData.approach_first_container_description,
                    },
                    {
                      icon: serviceData.approach_second_container_icon,
                      title: serviceData.approach_second_container_title,
                      description: serviceData.approach_second_container_description,
                    },
                    {
                      icon: serviceData.approach_third_container_icon,
                      title: serviceData.approach_third_container_title,
                      description: serviceData.approach_third_container_description,
                    },
                  ].map((container, index) => (
                    <div className="aximo-iconbox-wrap5" key={index}>
                      <div className="aximo-iconbox-icon5">
                        <Image
                          src={`${URL}/${container.icon.replace(/\\/g, "/")}`}
                          alt="icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="aximo-iconbox-data5">
                        <h3>{container.title}:</h3>
                        <div className="aximo-user-interface">
                          <ul>
                            <li>{container.description}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default ServiceDetails;
